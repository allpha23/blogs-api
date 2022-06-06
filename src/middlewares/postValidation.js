module.exports = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const message = 'Some required fields are missing';
    
  if (title === '') {
    return res.status(400).json({ 
      message,
    });
  }
  
  if (content === '') {
    return res.status(400).json({ 
      message,
    });
  }
  
  if (categoryIds === []) {
    return res.status(400).json({ 
      message,
    });
  }
      
  next();
};