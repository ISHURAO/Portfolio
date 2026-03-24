// backend/models/Certificate.js
const { Schema, model } = require('mongoose');
const s = new Schema({
  platform:  { type: String, required: true },
  title:     { type: String, required: true },
  desc:      { type: String, default: '' },
  link:      { type: String, default: '#' },
  order:     { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});
module.exports = model('Certificate', s);
