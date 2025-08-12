const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = process.env.PORT || 3000;

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Esaltare Food API',
      version: '1.0.0',
    },
  },
  apis: ['./index.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /:
 *   get:
 *     summary: Affiche un message de bienvenue
 *     responses:
 *       200:
 *         description: Message de bienvenue
 */
app.get('/', (req, res) => {
  res.json({ message: "Bienvenue sur l'API Esaltare Food" });
});

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
