# 🚀 Ishu Yadav — Portfolio v2.0

Two completely separate apps — Frontend + Backend.

## 📁 Structure
```
portfolio-ishu-yadav/
│
├── frontend/               ← Static HTML/CSS/JS portfolio
│   ├── public/
│   │   └── index.html      ← The entire frontend
│   ├── package.json
│   └── README.md
│
└── backend/                ← Node.js + Express + MongoDB API
    ├── index.js            ← Server entry point
    ├── .env                ← ⚠️ Fill in your credentials
    ├── package.json
    ├── models/
    │   ├── Message.js
    │   ├── Project.js
    │   ├── Blog.js
    │   └── Certificate.js
    ├── routes/
    │   ├── contact.js
    │   ├── projects.js
    │   ├── blogs.js
    │   ├── certs.js
    │   └── admin.js
    ├── services/
    │   └── mailService.js
    └── README.md
```

---

## ⚡ Run in 4 Steps

### Terminal 1 — Backend
```bash
cd backend
npm install
# Edit .env with your Gmail + MongoDB credentials
npm run dev
```
✅ Backend runs at: **http://localhost:5000**

### Terminal 2 — Frontend
```bash
cd frontend
npm install
npm run dev
```
✅ Frontend runs at: **http://localhost:3000**

---

## 🔑 .env Setup (backend/.env)

The `.env` file is pre-created. Just fill in:

```env
MONGO_URI=mongodb://localhost:27017/portfolio
EMAIL_USER=ishuy066@gmail.com
EMAIL_PASS=your_16_char_app_password
ADMIN_TOKEN=ishu-admin-secret-2025
```

### Get Gmail App Password:
1. [myaccount.google.com](https://myaccount.google.com)
2. Security → Enable **2-Step Verification**
3. Security → **App Passwords** → Create → Name "Portfolio"
4. Copy the **16-character** password → paste in `EMAIL_PASS`

---

## 📸 Add Your Photo
1. Add your photo to `frontend/public/images/ishu.jpg`
2. Open `frontend/public/index.html`
3. Find this section and uncomment the `<img>` tag:
```html
<div class="h-img-inner" id="profile-pic" onclick="speakWelcome()">
  <!-- Uncomment this line: -->
  <!-- <img src="images/ishu.jpg" alt="Ishu Yadav"> -->
  <div class="h-img-fallback">IY</div>   ← Remove this line
</div>
```

## 📄 Add Your Resume
In `frontend/public/index.html`, find:
```js
function downloadCV(){
  window.open('YOUR_RESUME_PDF_URL','_blank');
}
```
Replace `YOUR_RESUME_PDF_URL` with your actual resume link.

## 🔐 Admin Panel
URL: **http://localhost:5000/admin**
Token: `ishu-admin-secret-2025` (change in `backend/.env`)

---

## 🚀 Deploy

| Part | Platform | Free |
|------|----------|------|
| Frontend | Netlify / Vercel | ✅ |
| Backend | Render | ✅ |
| Database | MongoDB Atlas | ✅ |

### Frontend → Netlify
Drag `frontend/public/` to [app.netlify.com/drop](https://app.netlify.com/drop)

### Backend → Render
1. Push to GitHub
2. render.com → New Web Service → connect repo → root: `backend`
3. Add env vars

### After deploying backend
In `frontend/public/index.html`, find:
```js
const API = 'http://localhost:5000';
```
Change to your Render URL:
```js
const API = 'https://your-app.onrender.com';
```
