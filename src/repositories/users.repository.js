const { User } = require('../models');
const { spent } = require('../models');
const { categorySpent } = require('../models');


const createUser = async (newUser) => {
  const user = await User.create(newUser);
  return user;
}

const loginUser = async (email) => {
  const user = await User.findOne({
    where: { email }
  });
  return user;
}

const updateUser = async (dataUser, id) => {
  const user = await User.update({
    name: dataUser.name,
    url_avatar: dataUser.url_avatar,
    avatar: dataUser.avatar
  }, {
    where: { id }
  })
  return user;
}

const validateUser = async (id) => {
  const user = await users.update({
    validate_user: true
  }, {
    where: { id }
  })
  return user;
}


const getUserId = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ["password", "avatar", "validate_user", "createdAt", "updatedAt"] },
    include: [
      {
        model: spent,
        attributes: { exclude: ["updatedAt"] },
        include: [
          {
            model: categorySpent,
            attributes: { exclude: ["updatedAt"] },

          }
        ]
      }
    ]
  })
  return user
}

const getInterviewByUserId = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ["password", "avatar", "url_avatar", "validate_user", "createdAt", "updatedAt"] },
    include: [
      {
        model: interviews
      }
    ]
  })

  return user
}

const virifyEmailInBD = async (email) => {
  const user = await User.findOne({
    attributes: { exclude: ["createdAt", "updatedAt", "password"] },
    where: {
      email
    }
  })
  if (user !== null) {
    return user
  } else {
    return 'email no encontrado'
  }
}

const resetPassword = async (resetPass) => {
  console.log(resetPass)
  const user = await User.update({
    password: resetPass.password,
  }, {
    where: { id: resetPass.id }
  })
  return user;
}

const getUserById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ["createdAt", "updatedAt", "password"] }
  })
  return user
}



module.exports = {
  createUser,
  loginUser,
  updateUser,
  getUserId,
  getInterviewByUserId,
  validateUser,
  virifyEmailInBD,
  resetPassword,
  getUserById
}