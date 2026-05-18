# Photo Guide

Drop your photos into this folder using the exact filenames below. The site uses these paths directly — change the filename and the photo automatically appears.

## Files needed

### Top-level (this folder)
- **`hero-portrait.jpg`** — Big portrait on the homepage hero. Vertical (4:5) works best. Ideal: 720×900 px or larger.
- **`about-photo.jpg`** — Photo in the About section. Portrait (3:4) works best. Ideal: 600×800 px.

### `projects/` folder
- **`nettrace.jpg`** — Screenshot of the NetTrace dashboard or graph visualization. Landscape (4:3). Ideal: 1200×900 px.
- **`customer-conversion.jpg`** — Could be a chart from your notebook (confusion matrix, ROC curve, etc.). Landscape (4:3).
- **`rag-chatbot.jpg`** — Screenshot of the Streamlit app in action. Landscape (4:3).

### `personal/` folder
Three lifestyle photos for the "Off the Clock" section.
- **`photo-1.jpg`** — Biggest slot (left). Either tall (4:5) or wide (16:9) works.
- **`photo-2.jpg`** — Middle slot. Portrait (4:5).
- **`photo-3.jpg`** — Right slot. Portrait (4:5).

## Tips

- **JPG or PNG both work** — but JPG is smaller, which loads faster.
- **Compress before uploading.** Use [tinyjpg.com](https://tinyjpg.com) to shrink file size without losing quality. Aim for under 400KB per photo.
- **Don't sweat exact dimensions.** The site uses `object-fit: cover`, so any landscape/portrait will fit; just match the rough aspect ratio so nothing gets awkwardly cropped.
- **Want to use PNGs instead?** No problem — just rename the file (e.g. `hero-portrait.png`) and update the `src` path in `index.html` to match.
