// backend/services/mailService.js
const nodemailer = require('nodemailer');

let _transporter = null;

function getTransporter() {
  if (_transporter) return _transporter;
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS ||
      process.env.EMAIL_PASS === 'your_16_char_app_password_here') {
    console.warn('⚠️  Email not configured in .env — emails will be skipped');
    return null;
  }
  _transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
  });
  return _transporter;
}

// Notify portfolio owner
async function notifyOwner({ name, email, message }) {
  const t = getTransporter();
  if (!t) return;
  await t.sendMail({
    from: `"Portfolio Bot" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `📬 New message from ${name}`,
    html: `
    <div style="font-family:sans-serif;max-width:520px;margin:0 auto;border-radius:12px;overflow:hidden;border:1px solid #e0e0e0">
      <div style="background:linear-gradient(135deg,#7c3aed,#00d2ff);padding:20px 24px">
        <h2 style="color:#fff;margin:0">📬 New Portfolio Message</h2>
      </div>
      <div style="padding:24px;background:#fafafa">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message:</strong></p>
        <div style="background:#f0f0f0;border-radius:8px;padding:16px;white-space:pre-wrap">${message}</div>
      </div>
      <div style="padding:12px 24px;background:#f5f5f5;font-size:.75rem;color:#aaa;text-align:center">
        Received ${new Date().toLocaleString()}
      </div>
    </div>`
  });
}

// Auto-reply to sender
async function autoReply({ name, email, message }) {
  const t = getTransporter();
  if (!t) return;
  await t.sendMail({
    from: `"Ishu Yadav" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `Thanks for reaching out, ${name}! 👋`,
    html: `
    <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:28px 0">
      <h2 style="color:#7c3aed">Hey ${name} 👋</h2>
      <p style="color:#444;line-height:1.8">Thanks for getting in touch! I received your message and will reply within 24 hours.</p>
      <blockquote style="border-left:3px solid #00d2ff;padding:10px 14px;margin:16px 0;color:#666;background:#f7faff;border-radius:0 6px 6px 0">${message}</blockquote>
      <p style="color:#444">Looking forward to connecting!</p>
      <p style="margin-top:20px"><strong>Ishu Yadav</strong><br>
      <span style="color:#888;font-size:.85rem">Full Stack Developer · LPU 2026</span></p>
    </div>`
  });
}

module.exports = { notifyOwner, autoReply };
