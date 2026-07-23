# Cloudflare Pages Auto-Deploy Setup Guide (Method 1a)

This guide outlines the steps to connect your GitHub repository directly to Cloudflare Pages. This method does not require setting up API keys, account tokens, or GitHub secrets.

---

## Step 1: Connect your Repository to Cloudflare Pages

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. On the left sidebar, click on **Workers & Pages**.
3. Click the **Create Application** button.
4. Select the **Pages** tab and click **Connect to Git**.
5. Select **GitHub** and authorize Cloudflare to access your GitHub account (you only need to do this authorization step once).
6. Under the repository list, select **`boys-aid-network`** (or the name of your repository) and click **Begin setup**.

---

## Step 2: Configure Build Settings

In the configuration screen, set the following parameters:

- **Project Name:** `boys-aid-network` (or your preferred site name)
- **Production branch:** `main`
- **Framework preset:** Select **`Next.js (Static HTML Export)`**
- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Node.js version (Recommended):** Scroll down to **Environment variables** under build settings, add a variable named `NODE_VERSION` with value `20`.

Click the **Save and Deploy** button.

---

## Step 3: Branching & Verification Workflow

Your automated deployment pipeline is now active. The workflow is:

1. Create a feature branch or work directly in **`development`**:
   ```bash
   git checkout development
   # Make changes and commit
   git commit -am "feat: update homepage details"
   git push origin development
   ```
2. When you are ready to publish changes to production, merge your progress into the **`main`** branch:
   ```bash
   git checkout main
   git merge development
   git push origin main
   ```
3. Cloudflare will automatically detect the push to `main`, compile your Next.js app in the cloud, and deploy it to your custom subdomain (e.g. `boys-aid-network.pages.dev`).
