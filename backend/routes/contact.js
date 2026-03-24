// backend/routes/contact.js
const router  = require('express').Router();
const Message = require('../models/Message');
const { notifyOwner, autoReply } = require('../services/mailService');

// POST /api/contact
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name?.trim() || !email?.trim() || !message?.trim())
    return res.status(400).json({ error: 'All fields are required.' });
  if (!/^\S+@\S+\.\S+$/.test(email))
    return res.status(400).json({ error: 'Invalid email address.' });
  try {
    const saved = await Message.create({ name: name.trim(), email: email.trim().toLowerCase(), message: message.trim() });
    // Send emails (failures don't break the response)
    try { await Promise.all([notifyOwner({ name, email, message }), autoReply({ name, email, message })]); }
    catch (mailErr) { console.warn('Mail warning:', mailErr.message); }
    res.status(201).json({ success: true, message: "Message received! I'll reply within 24 hours.", id: saved._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error. Please try again.' });
  }
});

// GET /api/contact  (admin)
router.get('/', async (_req, res) => {
  try { res.json(await Message.find().sort({ createdAt: -1 }).limit(100)); }
  catch (err) { res.status(500).json({ error: 'Server error' }); }
});

// PATCH /api/contact/:id/read
router.patch('/:id/read', async (req, res) => {
  try { res.json(await Message.findByIdAndUpdate(req.params.id, { read: true }, { new: true })); }
  catch (err) { res.status(500).json({ error: 'Server error' }); }
});

// DELETE /api/contact/:id
router.delete('/:id', async (req, res) => {
  try { await Message.findByIdAndDelete(req.params.id); res.json({ success: true }); }
  catch (err) { res.status(500).json({ error: 'Server error' }); }
});

module.exports = router;
