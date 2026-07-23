# Cloudflare Workers Static Assets Deployment Guide (Unified Dashboard)

This guide outlines the steps to deploy your Next.js static export website using Cloudflare's unified dashboard **Workers Git Integration** and **Workers Static Assets**.

---

## Step 1: Project Configuration

To enable static hosting on the unified Workers platform, the project has been pre-configured with two files:

1. **`next.config.ts`**:
   Configured for static HTML exports:
   ```typescript
   const nextConfig: NextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   };
   ```

2. **`wrangler.toml`**:
   Tells Cloudflare Wrangler to upload the static `./out` output directory directly to the edge, without installing a custom worker script:
   ```toml
   name = "boys-aid-network"
   compatibility_date = "2024-09-23"

   [assets]
   directory = "./out"
   ```

---

## Step 2: Cloudflare Dashboard Setup

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. On the left sidebar, click on **Workers & Pages**.
3. Click the blue **Create Application** button.
4. Click **Connect to Git** (under the unified Workers screen).
5. Authorize access to your GitHub account and select the **`boys-aid-network`** repository.
6. Verify the build settings configuration:
   - **Build command:** `npm run build`
   - **Deploy command:** `npx wrangler deploy`
   - **Root directory:** `/`
7. Click **Save and Deploy**.

---

## Step 3: Branching & Verification Workflow

Your automated deployment pipeline is now active. The workflow is:

1. Work and push changes to the **`development`** branch:
   ```bash
   git checkout development
   # Make changes and commit
   git commit -am "feat: update design highlights"
   git push origin development
   ```
2. When you are ready to publish changes to production, merge your progress into the **`main`** branch:
   ```bash
   git checkout main
   git merge development
   git push origin main
   ```
3. Cloudflare will automatically detect the push to `main`, compile your Next.js app to `./out`, and run `npx wrangler deploy` to sync the static assets to your worker domain.
