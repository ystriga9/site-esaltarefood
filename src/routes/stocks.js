const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'GET stocks' });
});

router.post('/', (req, res) => {
  res.json({ message: 'POST stocks' });
});

router.put('/:id', (req, res) => {
  res.json({ message: `PUT stocks ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
  res.json({ message: `DELETE stocks ${req.params.id}` });
});

module.exports = router;
