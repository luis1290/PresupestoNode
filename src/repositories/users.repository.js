const { users } = require('../models');
const { spents } = require('../models');
const { categoryspents } = require('../models');


const createUser = async (newUser) => {
  const user = await users.create(newUser);
  return user;
}

const loginUser = async (email) => {
  const user = await users.findOne({
    where: { email }
  });
  return user;
}

const updateUser = async (dataUser, id) => {
  const user = await users.update({
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
  const user = await users.findByPk(id, {
    attributes: { exclude: ["password", "avatar", "validate_user", "createdAt", "updatedAt"] },
    include: [
      {
        model: spents,
        attributes: { exclude: ["updatedAt"] },
        include: [
          {
            model: categoryspents,
            attributes: { exclude: ["updatedAt"] },

          }
        ]
      }
    ]
  })
  return user
}

const getInterviewByUserId = async (id) => {
  const user = await users.findByPk(id, {
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
  const user = await users.findOne({
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
  const user = await users.update({
    password: resetPass.password,
  }, {
    where: { id: resetPass.id }
  })
  return user;
}

const getUserById = async (id) => {
  const user = await users.findByPk(id, {
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