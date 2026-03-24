// backend/models/Project.js
const { Schema, model } = require('mongoose');
const s = new Schema({
  icon:      { type: String, default: '🚀' },
  name:      { type: String, required: true, trim: true },
  desc:      { type: String, required: true },
  features:  [String],
  tech:      [String],
  github:    { type: String, default: '#' },
  live:      { type: String, default: '#' },
  featured:  { type: Boolean, default: false },
  order:     { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});
module.exports = model('Project', s);
