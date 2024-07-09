const UserServices = require("../services/users.services");
const { sendWelcomeMail, sendChangePassMail, sendResetMail } = require("../utils/sendMails");
const { users } = require('../models');
const jwt = require("jsonwebtoken");

const createUserController = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const hash = await UserServices.hashed(password)
    await UserServices.createNewUser({ name, email, password: hash });
    res.status(201).send()
    const verifyToken = jwt.sign({ name, email }, process.env.JWT_SECRET_EMAIL_VALIDATION, {
      algorithm: "HS512",
      expiresIn: "12h",
    });
    sendWelcomeMail(email, { verifyToken });
  } catch (e) {
    next(e)
  }
}

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await UserServices.login(email)
    await UserServices.verifyUser(user, next);
    await UserServices.validPassword(password, user, next)
    const { name, id } = user;
    const userData = { name, id, email };
    const token = await UserServices.token(userData)
    userData.token = token;
    res.json(userData);
  } catch (error) {
    next(error);
  }
};

const updateUserController = async (req, res, next) => {
  try {
    const { id } = req.params
    const { path } = req.file
    const { filename } = req.file

    const { name } = req.body
    await UserServices.updateUserServices({ name, url_avatar: path, avatar: filename }, id)
    res.status(201).send()
  } catch (error) {
    next(error)
  }
};

const validateUserController = async (req, res, next) => {
  try {
    const { token } = req.params;
    const decode = jwt.verify(token, process.env.JWT_SECRET_EMAIL_VALIDATION, {
      algorithms: "HS512",
    })

    if (!decode) {
      next({
        status: 400,
        name: "error de verificacion",
        message: "verificacion incorrecta, solicite informacion "
      })
    }
    await users.update({
      validate: true
    }, {
      where: { email: decode.email }
    })
    // await UserServices.validateUserServices(id)
    res.status(201).send()
  } catch (error) {
    next(error)
  }
};

const getUserIdController = async (req, res, next) => {
  try {
    const { id } = req.params
    console.log('entra al controlador')
    const userSpent = await UserServices.getUserIdServices(id)
    res.json(userSpent);
  } catch (error) {
    next(error)
  }
};


const resetPasswordController = async (req, res, next) => {
  try {

    const { password, id } = req.body
    const hash = await UserServices.hashed(password)
    await UserServices.resetPasswordServices({ id, password: hash })
    const user = await UserServices.getUserByIdServices(id)
    sendChangePassMail(user.dataValues.email, { email: user.dataValues.email })
    res.status(204).send();
  } catch (error) {
    next(error)
  }
};

const emailResetPassController = async (req, res, next) => {
  try {
    const { email } = req.body
    const user = await UserServices.virifyEmailBdServices(email)
    res.json(user);
    sendResetMail(email, { id: user.dataValues.id })
  } catch (error) {
    next(error)
  }
};

module.exports = {
  createUserController,
  updateUserController,
  login,
  validateUserController,
  getUserIdController,
  emailResetPassController,
  resetPasswordController
}