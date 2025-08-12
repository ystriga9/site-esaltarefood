const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema(
  {
    product: { type: String, required: true },
    quantity: { type: Number, default: 0 },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Stock', StockSchema);
