const express = require('express');
const authRoutes = require('./routes/auth');
const auth = require('./middleware/auth');

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);

// Exemple de route protégée
app.get('/protected', auth, (req, res) => {
  res.json({ message: 'Accès autorisé', user: req.user });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
