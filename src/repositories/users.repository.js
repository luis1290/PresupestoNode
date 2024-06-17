const { users } = require('../models');

const createUser = async (newUser) => {
    const user = await users.create(newUser);
    return user;
  }



  module.exports = {
    createUser
    // loginUser,
    // updateUser,
    // getAplicationByUserId,
    // getInterviewByUserId,
    // validateUser,
    // virifyEmailInBD,
    // resetPassword,
    // getUserById
  }