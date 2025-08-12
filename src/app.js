const express = require('express');
const { body, validationResult } = require('express-validator');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(express.json());

app.post('/users',
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array().map(e => e.msg) });
    }
    res.json({ message: 'User created' });
  }
);

app.get('/error', (req, res, next) => {
  next(new Error('Something went wrong'));
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
