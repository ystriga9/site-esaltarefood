const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'GET sales' });
});

router.post('/', (req, res) => {
  res.json({ message: 'POST sales' });
});

router.put('/:id', (req, res) => {
  res.json({ message: `PUT sales ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
  res.json({ message: `DELETE sales ${req.params.id}` });
});

module.exports = router;
