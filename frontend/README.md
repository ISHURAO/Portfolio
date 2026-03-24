# 🎨 Portfolio Frontend

Static HTML/CSS/JS portfolio — no build step needed.

## Run
```bash
npm install
npm run dev
# Opens at http://localhost:3000
```

## Customize
- **Your photo** → add `public/images/ishu.jpg` and update `index.html`
- **Resume** → find `downloadCV()` → replace with your PDF URL
- **GitHub username** → search `ishuyadav` in `index.html` → replace
- **Social links** → find `.h-socials` section → update `href`
- **Backend URL** → find `const API = 'http://localhost:5000'` → update for production

## Deploy to Netlify
Drag the `/public` folder to [app.netlify.com/drop](https://app.netlify.com/drop)
