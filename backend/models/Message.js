// backend/models/Message.js
const { Schema, model } = require('mongoose');
const s = new Schema({
  name:      { type: String, required: true, trim: true },
  email:     { type: String, required: true, trim: true, lowercase: true },
  message:   { type: String, required: true },
  read:      { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});
module.exports = model('Message', s);
