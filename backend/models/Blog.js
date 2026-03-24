// backend/models/Blog.js
const { Schema, model } = require('mongoose');
const s = new Schema({
  tag:       { type: String, required: true },
  title:     { type: String, required: true },
  desc:      { type: String, required: true },
  content:   { type: String, default: '' },
  slug:      { type: String, unique: true, sparse: true },
  date:      { type: String },
  readTime:  { type: String, default: '5 min' },
  published: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});
s.pre('save', function(next) {
  if (!this.slug && this.title)
    this.slug = this.title.toLowerCase().replace(/\s+/g,'-').replace(/[^\w-]/g,'').slice(0,80);
  if (!this.date)
    this.date = new Date().toLocaleDateString('en-US',{month:'short',year:'numeric'});
  next();
});
module.exports = model('Blog', s);
