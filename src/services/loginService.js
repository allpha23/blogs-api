const { User } = require('../database/models');

const getAll = async (email, password) => {
  const users = await User.findAll({ where: {
    email,
    password,
  } });

  return users; 
};

module.exports = { getAll };