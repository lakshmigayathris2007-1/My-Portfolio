# Lakshmigayathri S — Portfolio Website

A modern, fully responsive personal portfolio website built with vanilla HTML, CSS & JavaScript.  
No frameworks, no build tools — deploy directly to GitHub Pages.

---

## 🚀 Quick Start

Open `index.html` in any browser to preview locally.

---

## 📁 Folder Structure

```
portfolio/
├── index.html              ← Main website file
├── style.css               ← All styles
├── script.js               ← JavaScript (theme, animations, form)
├── resume.pdf              ← ADD YOUR RESUME HERE
│
├── images/
│   └── profile.jpg         ← ADD YOUR PROFILE PHOTO HERE
│
├── certificates/           ← ADD YOUR CERTIFICATE PDFs HERE
│   ├── nptel_technical_english.pdf
│   ├── nptel_iot.pdf
│   ├── nptel_cloud.pdf
│   ├── nptel_data_analytics.pdf
│   ├── nptel_industry4.pdf
│   └── infosys_springboard.pdf
│
└── internships/            ← ADD YOUR INTERNSHIP CERTIFICATE PDFs HERE
    ├── internship1.pdf     (Prodigy Tech)
    ├── internship2.pdf     (Hinelix Technologies)
    └── internship3.pdf     (Thazhal Geospatial Analytics)
```

---

## 📸 Adding Your Profile Photo

1. Prepare a square photo (recommended: 400×400px or larger)
2. Name it `profile.jpg`
3. Place it in the `images/` folder
4. The website will automatically use it

---

## 📄 Adding Your Resume

1. Export your resume as a PDF
2. Name it `resume.pdf`
3. Place it in the root `portfolio/` folder

---

## 📜 Adding Certificates

1. Export each certificate as a PDF
2. Name them exactly as shown in the folder structure above
3. Place them in the `certificates/` folder
4. Clicking a certificate card on the website will open the PDF

---

## 🌐 Deploy to GitHub Pages

### Step 1 — Create a GitHub repository
1. Go to [github.com](https://github.com) and sign in
2. Click **New repository**
3. Name it `portfolio` (or `yourusername.github.io` for a root domain)
4. Set it to **Public**
5. Click **Create repository**

### Step 2 — Upload your files
**Option A — GitHub website (simple):**
1. Open your new repository
2. Click **Add file → Upload files**
3. Drag and drop ALL files and folders from your portfolio folder
4. Scroll down and click **Commit changes**

**Option B — Git command line:**
```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio deploy"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. In your repository, click **Settings**
2. Scroll down to **Pages** (left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Select branch: `main`, folder: `/ (root)`
5. Click **Save**

### Step 4 — Access your live site
After 1–2 minutes, your site will be live at:
`https://YOUR_USERNAME.github.io/portfolio/`

---

## 📬 Setting Up the Contact Form (Web3Forms)

The contact form uses [Web3Forms](https://web3forms.com) — free, no backend needed.

1. Go to [web3forms.com](https://web3forms.com)
2. Enter your email address and click **Create Access Key**
3. Copy the access key you receive
4. Open `script.js` and find this line:
   ```js
   access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
   ```
5. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key
6. Save and redeploy

Form submissions will be sent directly to your email.

---

## 🎨 Customisation

### Change colours
Open `style.css` and edit the `:root` block at the top:
```css
:root {
  --teal:    #0EA5E9;   /* Primary accent */
  --cyan:    #06B6D4;   /* Secondary accent */
  --amber:   #F59E0B;   /* Achievement highlight */
  --navy:    #1E3A5F;   /* Stats section background */
}
```

### Change typing roles
Open `script.js` and edit the `roles` array:
```js
const roles = [
  'Full Stack Developer',
  'AI & ML Enthusiast',
  'GIS & Remote Sensing Explorer',
  'B.E Computer Science Student'
];
```

### Update skill bar percentages
In `index.html`, find the skill bar items and update `data-width`:
```html
<div class="skill-bar-fill" data-width="85"></div>
```

---

## ✅ Features Checklist

- [x] Fully responsive (mobile, tablet, desktop)
- [x] Light / Dark mode toggle (persists via localStorage)
- [x] Animated typing effect in hero
- [x] Scroll reveal animations
- [x] Animated skill bars
- [x] Animated statistics counters
- [x] Mobile hamburger menu
- [x] GitHub links on all projects
- [x] Downloadable resume button
- [x] Clickable certification cards (opens PDF)
- [x] Contact form with validation (Web3Forms)
- [x] Scroll-to-top button
- [x] SEO meta tags
- [x] Semantic HTML + ARIA labels
- [x] No external dependencies (except Google Fonts)
- [x] GitHub Pages ready

---

© 2025 Lakshmigayathri S
