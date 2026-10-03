# PlayMate — Official Website & Privacy Policy

The official product presentation and public privacy policy host for **PlayMate**, the offline gaming companion application developed by **Sundram Gupta** under the **Sundramdotdev** identity.

---

## 🎯 Overview

This repository powers the official public web presence for PlayMate:

* **Official Homepage:** [https://sundramdotdev.github.io/playmate-privacy-policy/](https://sundramdotdev.github.io/playmate-privacy-policy/)
* **Official Privacy Policy:** [https://sundramdotdev.github.io/playmate-privacy-policy/privacy-policy/](https://sundramdotdev.github.io/playmate-privacy-policy/privacy-policy/)

It serves as the production-compliant policy URL for:
* Google Play Store Data Safety & Privacy Policy submission
* APKPure & alternative app stores
* GitHub project showcase
* User documentation & product introduction

---

## 📁 Repository Structure

```text
playmate-privacy-policy/
│
├── index.html                   # Official PlayMate product website
├── privacy-policy/
│   └── index.html               # Full PlayMate privacy policy document
│
├── 404.html                     # Branded GitHub Pages 404 error page
│
├── assets/
│   ├── logo/
│   │   ├── playmate-logo.png    # Official PlayMate app logo (512 × 512 px)
│   │   └── favicon.png          # Browser favicon & touch icon
│   └── og/
│       └── playmate-og.png      # Social sharing card (1200 × 630 px)
│
├── css/
│   └── styles.css               # Production dark-first responsive stylesheet
│
├── js/
│   └── main.js                  # Accessible mobile menu, scroll, store URL config
│
├── site.webmanifest             # PWA web manifest metadata
├── robots.txt                   # Search crawler directives
├── sitemap.xml                  # XML sitemap for search engines
└── README.md                    # Project documentation
```

---

## 🎨 Logo & Branding Assets

### 1. Official App Logo
The primary PlayMate logo belongs at:
```text
assets/logo/playmate-logo.png
```
* **Expected source dimensions:** `512 × 512 px` (PNG format with transparency if applicable)
* The layout uses CSS to display this emblem at standard responsive sizes (e.g. 34px in navigation, up to 160px in hero product visual).

### 2. Browser Favicon
```text
assets/logo/favicon.png
```
* Used for `<link rel="icon">`, Apple touch icons, and web manifest bookmarks.

### 3. Open Graph Social Card
```text
assets/og/playmate-og.png
```
* **Recommended dimensions:** `1200 × 630 px`
* Referenced in Open Graph and Twitter Card metadata.

---

## 💻 Local Development

This site is built with pure standards-based HTML5, CSS3, and vanilla JavaScript. It requires zero compilation, bundling, or external dependencies.

Preview the site locally using any static web server:

### Using Python 3 (recommended)
```bash
python3 -m http.server 8000
```
Then visit:
* Homepage: `http://localhost:8000/`
* Privacy Policy: `http://localhost:8000/privacy-policy/`

### Using Node.js / npx
```bash
npx serve .
```

---

## 🚀 GitHub Pages Deployment

The repository is configured to deploy directly to **GitHub Pages**:

1. Ensure the repository settings on GitHub have **Pages** enabled:
   * **Source:** Deploy from a branch
   * **Branch:** `main` / root (`/`)
2. Pushing changes to `main` automatically updates:
   * `https://sundramdotdev.github.io/playmate-privacy-policy/`
   * `https://sundramdotdev.github.io/playmate-privacy-policy/privacy-policy/`

---

## ⚖️ Updating the Privacy Policy

When publishing a new PlayMate release that alters data collection, permissions, or diagnostic tooling:

1. Open `privacy-policy/index.html`.
2. Update the **Effective date** and **Last updated** date in the header metadata.
3. Modify the relevant section (e.g., Section 2 *Information We Handle*, Section 4 *Analytics*, Section 5 *Firebase*, or Section 6 *Device Permissions*).
4. Update the `<meta property="og:description">` or JSON-LD `dateModified` as appropriate.
5. Commit and push to `main`.

---

## 🔗 Official Links & Profiles

* **Developer:** Sundram Gupta ([@sundramdotdev](https://github.com/sundramdotdev))
* **LinkedIn:** [linkedin.com/in/sundramdotdev](https://linkedin.com/in/sundramdotdev)
* **Instagram:** [@devsundram_](https://www.instagram.com/devsundram_?stkn=dXBva2IwMzZxbHY1)
* **PlayMate Repository:** [github.com/sundramdotdev/playmate-privacy-policy](https://github.com/sundramdotdev/playmate-privacy-policy)

---

## 📄 License & Copyright

© 2026 Sundram Gupta. All rights reserved.
PlayMate is developed by Sundramdotdev.
