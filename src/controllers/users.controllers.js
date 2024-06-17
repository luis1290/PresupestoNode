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




  module.exports = {
    createUserController
    // getAplicationByUserController,
    // updateUserController,
    // login,
    // validateUserController,
    // emailResetPassController,
    // resetPasswordController
  }