const express = require('express');
const app = express();

app.use(express.json());

const salesRouter = require('./src/routes/sales');
const stocksRouter = require('./src/routes/stocks');
const clientsRouter = require('./src/routes/clients');

app.use('/api/sales', salesRouter);
app.use('/api/stocks', stocksRouter);
app.use('/api/clients', clientsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
