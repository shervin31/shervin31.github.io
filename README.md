# Shervin Zare — Personal Portfolio

A clean, editorial-style personal site built with vanilla HTML, CSS, and a tiny bit of JavaScript. Warm dark theme, magazine-inspired typography, smooth scroll reveals.

## Folder structure

```
shervin-portfolio/
├── index.html              ← main page
├── styles.css              ← all styling
├── script.js               ← scroll reveals + smooth scroll
├── README.md               ← you are here
└── images/
    ├── PHOTO_GUIDE.md      ← where each photo goes
    ├── hero-portrait.jpg   ← main portrait in the hero
    ├── about-photo.jpg     ← photo in the About section
    ├── projects/
    │   ├── nettrace.jpg
    │   ├── customer-conversion.jpg
    │   └── rag-chatbot.jpg
    └── personal/
        ├── photo-1.jpg
        ├── photo-2.jpg
        └── photo-3.jpg
```

## Where to put your links

Open `index.html` and update these spots:

| What | Find this in `index.html` | What to change |
|---|---|---|
| **X / Twitter** | `https://x.com/YOUR_X_HANDLE` | Replace `YOUR_X_HANDLE` with your handle |
| **LinkedIn** | `https://www.linkedin.com/in/shervin-zare` | Already set — confirm it's right |
| **GitHub** | `https://github.com/shervin31` | Already set |
| **Email** | `shervin.zare2005@gmail.com` | Already set — appears twice (mailto + display) |
| **Project GitHub links** | Each `<a href="https://github.com/shervin31/...">` | Confirm repo URLs match your actual repos |

Use Find & Replace in your editor (Cmd/Ctrl + F) to jump to each.

## Where to put your photos

Drop your photos into the `images/` folder using these exact filenames (jpg or png both work — just change the file extension in `index.html` if you use png).

| File | Where it shows up | Suggested aspect ratio |
|---|---|---|
| `hero-portrait.jpg` | Big portrait on the homepage hero, right side | **4:5** (portrait) |
| `about-photo.jpg` | Photo in the About section, left column | **3:4** (portrait) |
| `projects/nettrace.jpg` | NetTrace project card | **4:3** (landscape) — a screenshot of the dashboard works great |
| `projects/customer-conversion.jpg` | Customer Conversion Predictor card | **4:3** (landscape) — a chart from your notebook works |
| `projects/rag-chatbot.jpg` | RAG Chatbot card | **4:3** (landscape) — a screenshot of the Streamlit app |
| `personal/photo-1.jpg` | "Off the Clock" — big photo on the left | **16:9 or 4:5** (the wide/tall slot) |
| `personal/photo-2.jpg` | "Off the Clock" — middle photo | **4:5** (portrait) |
| `personal/photo-3.jpg` | "Off the Clock" — right photo | **4:5** (portrait) |

The site works perfectly without photos — empty placeholders show with dashed borders so you can see exactly what's missing. Drop in photos one at a time and they'll just appear.

## Running locally

You can just **double-click `index.html`** — it'll open in your browser and work. No build step needed.

For a slightly cleaner experience (and to make sure fonts load smoothly), serve it locally:

```bash
# If you have Python installed
cd shervin-portfolio
python3 -m http.server 8000

# Then open http://localhost:8000 in your browser
```

Or use VS Code's "Live Server" extension and right-click `index.html` → "Open with Live Server".

## Deploying for free

### Option 1: GitHub Pages (recommended — free, easy)

1. Create a new repository on GitHub called `shervin31.github.io` (using your exact GitHub username)
2. Upload all files from this folder to that repo
3. Go to **Settings → Pages → Source: main branch → Save**
4. Your site is live at `https://shervin31.github.io` within a minute or two

### Option 2: Vercel

1. Go to [vercel.com](https://vercel.com), sign in with GitHub
2. Import this folder as a new project
3. Click Deploy — done

### Option 3: Netlify

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `shervin-portfolio` folder onto the page
3. Live in seconds

## Editing tips

- **Change copy:** Open `index.html` and edit text directly. Everything is plain HTML, no templating.
- **Change colors:** Open `styles.css` and look for the `:root` block near the top. All colors are defined there as CSS variables.
- **Change fonts:** Replace the Google Fonts link in `<head>` of `index.html` and update `--font-display`, `--font-body`, `--font-mono` in `styles.css`.
- **Add a project:** Copy one of the `.project-card` blocks in `index.html` and modify.
- **Add navigation links:** Add a new `<a>` inside `<nav class="nav-links">`.

## Browser support

Works in all modern browsers (Chrome, Firefox, Safari, Edge — last 2 versions). Uses CSS variables, IntersectionObserver, and backdrop-filter. Gracefully degrades on older browsers.

---

Built with care · Toronto · 2026
