# Boys Aid Network - Next.js Redesign

A responsive, content-driven Next.js application built with Tailwind CSS and TypeScript for the **Boys Aid Network** redesign. 

---

## 🚀 Key Features

*   **Modern Styling System:** Tailored styling using Tailwind CSS v4, supporting custom brand variables (Navy/Red color palette, Montserrat headings, Open Sans body text) and custom layout sizing constraints (`gap-4.5`, `h-110`).
*   **Decoupled Content System (`src/data/content.ts`):** Complete site data module separating copy (programs, blog posts, impact stories, gallery assets, and metrics) from component structures.
*   **Responsive Desktop Dropdown Navigation:** "Founder's Note" nested neatly under "About" as a sub-menu, and "Support Us" isolated purely to a primary call-to-action button.
*   **Responsive Mobile Drawer:** Fully-responsive hamburger layout with interactive drawer navigation.
*   **Media Lightboxes:** Interactive YouTube video player modal and fullscreen prev/next picture navigation for the 55 gallery items.
*   **Static Export Optimized:** Configured for zero-runtime Static HTML/CSS exports, enabling free hosting on Cloudflare Pages.

---

## 📁 Project Structure

```bash
├── doc/
│   ├── site-content.md                 # Complete original copy reference
│   └── cloudflare_deployment_steps.md  # Git Integration setup instructions
├── public/
│   └── images/                         # Logos, program images, and gallery collection
├── src/
│   ├── app/
│   │   ├── about/                      # About page & Founder's Note page
│   │   ├── blog/                       # Dynamic pre-rendered article pages
│   │   ├── gallery/                    # Gallery page & lightbox overlay
│   │   ├── impact/                     # Impact campaigns & blog feed page
│   │   ├── programs/                   # Initiatives directory page
│   │   ├── support/                    # Donation & partnership details
│   │   ├── globals.css                 # Custom Tailwind v4 stylesheet variables
│   │   ├── layout.tsx                  # Core site wrappers and SEO Metadata
│   │   └── page.tsx                    # Interactive landing homepage
│   ├── components/                     # Reusable layouts (Navbar, Footer, CTA, PageHero)
│   └── data/
│       └── content.ts                  # Static Content Module Database
├── next.config.ts                      # Configuration for Static Site Generation (SSG)
└── tailwind.config.ts / globals.css   # Custom styling theme definitions
```

---

## 🛠️ Local Development

### 1. Install dependencies
Ensure you have Node.js (v20 recommended) installed, then run:
```bash
npm install
```

### 2. Run dev server
Launch the local Turbopack development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📦 Production Builds

To compile and verify the static export locally, run:
```bash
npm run build
```
This generates a production-ready **`out/`** directory.

---

## ☁️ Deployment

This project is optimized for **Cloudflare Pages Auto-Deploy (Method 1a)**. 

To set up deployments:
1. Connect your GitHub repository to your Cloudflare Dashboard under **Workers & Pages**.
2. Point the production branch to **`main`**.
3. Configure the build parameters:
   - **Framework preset:** `Next.js (Static HTML Export)`
   - **Build command:** `npm run build`
   - **Build output directory:** `out`

For detailed setup instructions, see the [Cloudflare Pages Deployment steps guide](doc/cloudflare_deployment_steps.md).
