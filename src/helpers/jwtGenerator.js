const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '15d',
};

const SECRET = process.env.JWT_SECRET;

module.exports = (data = {}) => jwt.sign({ data }, SECRET, jwtConfig);