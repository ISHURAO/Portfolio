# ⚙️ Portfolio Backend

Node.js + Express + MongoDB + Nodemailer

## Run
```bash
npm install
npm run dev
# Starts at http://localhost:5000
```

## .env Setup
Edit the `.env` file (already created) — fill in:
- `MONGO_URI` — your MongoDB connection string
- `EMAIL_USER` — your Gmail address
- `EMAIL_PASS` — your Gmail App Password (16 chars)
- `ADMIN_TOKEN` — secret token for admin panel

## Gmail App Password
1. Go to myaccount.google.com
2. Security → 2-Step Verification → Enable
3. Security → App Passwords → Create → Name it "Portfolio"
4. Copy the 16-char password → paste in `.env` as `EMAIL_PASS`

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/contact | Save message + send emails |
| GET | /api/contact | Get all messages |
| GET | /api/projects | Get all projects |
| POST | /api/projects | Add project |
| DELETE | /api/projects/:id | Delete project |
| GET | /api/blogs | Get published blogs |
| POST | /api/blogs | Create blog |
| GET | /api/certs | Get certificates |
| POST | /api/certs | Add certificate |
| GET | /admin | Admin dashboard |

## Deploy to Render (free)
1. Push to GitHub
2. render.com → New Web Service → connect repo
3. Root directory: `backend`
4. Start command: `npm start`
5. Add env vars from `.env`
