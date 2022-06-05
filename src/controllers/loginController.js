const router = require('express').Router();
const userService = require('../services/userService');
const jwtGenerator = require('../helpers/jwtGenerator');
const validation = require('../middlewares/loginValidation');

router.post('/', validation, async (req, res) => {
  const { email, password } = req.body;
    
  const findUser = await userService.getAll(email, password);
    
  if (findUser.length === 0) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
    
  const token = jwtGenerator({ id: findUser.id, email });
    
  return res.status(200).json({ token });
});

module.exports = router;