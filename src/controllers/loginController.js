const router = require('express').Router();
const loginService = require('../services/loginService');
const jwtGenerator = require('../helpers/jwtGenerator');
const validation = require('../middlewares/loginValidation');

router.post('/', validation, async (req, res) => {
  const { email, password } = req.body;
    
  const findUser = await loginService.getAll(email, password);
    
  if (findUser.length === 0) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const { id } = findUser[0].dataValues;   
  const token = jwtGenerator({ id, email });
    
  return res.status(200).json({ token });
});

module.exports = router;