const router = require('express').Router();
const userService = require('../services/userService');
const jwtGenerator = require('../helpers/jwtGenerator');
const validation = require('../middlewares/userValidation');
const authorization = require('../middlewares/authorization');

router.get('/', authorization, async (req, res) => {
  const users = await userService.getAll();
  
  return res.status(200).json(users);
});

router.get('/:id', authorization, async (req, res) => {
  const { id } = req.params;
  const user = await userService.getById(id);

  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }

  return res.status(200).json(user);
});

router.post('/', validation, async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const findUser = await userService.findByEmail(email);

  if (findUser.length > 0) {
    return res.status(409).json({ message: 'User already registered' });
  }

  const newUser = await userService.create(displayName, email, password, image);

  const token = jwtGenerator({ id: newUser.id, email });

  return res.status(201).json({ token });
});

module.exports = router;