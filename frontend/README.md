# 🎨 Ishu Yadav Portfolio — React Frontend

Modern portfolio website built with **React**, **Node.js**, and **CSS3**.

## 🚀 Quick Start

### Requirements
- Node.js >= 18.0.0
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   cd frontend
   npm install
   ```

2. **Create `.env` file:**
   ```bash
   cp .env.example .env
   ```

3. **Configure environment variables** (optional):
   - Set `REACT_APP_API_URL` to your backend URL
   - Default: `http://localhost:5000/api`

### Development

```bash
npm run dev
# or
npm start
```

Opens [http://localhost:3000](http://localhost:3000) in the browser.

### Production Build

```bash
npm run build
```

Creates optimized production build in `build/` folder.

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/          # React components
│   ├── styles/              # Component styles
│   ├── utils/               # API utilities
│   ├── App.jsx              # Main app component
│   └── index.jsx            # Entry point
├── public/
│   └── index.html
├── package.json
└── .env.example
```

## 🔗 API Integration

Connects to backend at: `http://localhost:5000/api`

**Endpoints:**
- `GET /api/projects` — All projects
- `GET /api/blogs` — All blog posts
- `GET /api/certs` — All certificates
- `POST /api/contact` — Contact form submission
- `GET /api/health` — Health check

## 🎨 Features

- ✨ Modern, animated UI
- 🎯 Responsive design
- 🌙 Dark theme with gradients
- ⚡ Fast performance
- 🔗 Integrated with backend

## 🚀 Deployment

### GitHub Pages
Automatically deployed to: `https://ishurao.github.io/Portfolio/`

### Vercel/Netlify
1. Connect repository
2. Build command: `npm run build`
3. Output folder: `build`

---

**Built with React & Node.js**
