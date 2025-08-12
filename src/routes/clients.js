const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'GET clients' });
});

router.post('/', (req, res) => {
  res.json({ message: 'POST clients' });
});

router.put('/:id', (req, res) => {
  res.json({ message: `PUT clients ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
  res.json({ message: `DELETE clients ${req.params.id}` });
});

module.exports = router;
