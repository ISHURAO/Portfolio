// backend/index.js
require('dotenv').config();
const express   = require('express');
const mongoose  = require('mongoose');
const cors      = require('cors');
const path      = require('path');

const app  = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ─────────────────────────────────
app.use(cors({ origin: '*', credentials: true }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// ── Routes ─────────────────────────────────────
app.use('/api/contact',  require('./routes/contact'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/blogs',    require('./routes/blogs'));
app.use('/api/certs',    require('./routes/certs'));
app.use('/admin',        require('./routes/admin'));

// ── Health check ───────────────────────────────
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ── MongoDB → Start ────────────────────────────
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio')
  .then(() => {
    console.log('✅  MongoDB connected');
    app.listen(PORT, () => {
      console.log('\n╔══════════════════════════════════════╗');
      console.log('║   🚀  Portfolio Backend Running        ║');
      console.log('╚══════════════════════════════════════╝');
      console.log(`\n   API Health : http://localhost:${PORT}/api/health`);
      console.log(`   Admin Panel: http://localhost:${PORT}/admin\n`);
    });
  })
  .catch(err => {
    console.error('\n❌  MongoDB connection failed:', err.message);
    console.error('   → Make sure MongoDB is running: mongod');
    console.error('   → Or set MONGO_URI in .env to a MongoDB Atlas URL\n');
    process.exit(1);
  });
