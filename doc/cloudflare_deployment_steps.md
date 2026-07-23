# Cloudflare Pages Static Deployment Steps

This guide outlines the steps needed on GitHub and Cloudflare to activate the automated deployment pipeline for the Boys Aid Network website.

---

## Step 1: Cloudflare Setup

1. **Log in** to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. **Retrieve your Account ID**:
   - Go to the **Workers & Pages** section on the left sidebar.
   - Look at the right-hand sidebar; copy the string under **Account ID**.
3. **Generate an API Token**:
   - Click the user icon in the top right, go to **My Profile**, and select **API Tokens**.
   - Click **Create Token**.
   - Use the **Edit Cloudflare Workers** template (this covers Pages and Workers edits).
   - Under **Account Resources**, select your account.
   - Click **Continue to summary** and then **Create Token**.
   - Copy the token immediately and save it securely (you won't be able to see it again).
4. **Create a Pages Project**:
   - Go back to **Workers & Pages → Overview**.
   - Click **Create Application** → **Pages** → **Upload assets**.
   - Name the project **`boys-aid-network`** (this must match the `--project-name` in `.github/workflows/deploy.yml`).
   - Click **Create project** (you can skip the initial drag-and-drop upload step).

---

## Step 2: GitHub Repository Setup

1. Create a new repository on GitHub (e.g. `boys-aid-network`).
2. Add your GitHub repository as the remote origin and push the local branches from your terminal:
   ```bash
   git remote add origin <YOUR_GITHUB_REPO_URL>
   git push -u origin development
   git push -u origin main
   ```

---

## Step 3: Configure GitHub Secrets

1. Go to your GitHub repository page.
2. Navigate to **Settings** (tab at the top) → **Secrets and variables** (left sidebar) → **Actions**.
3. Click **New repository secret** (green button).
4. Add the following two secrets:

| Secret Name | Value | Description |
| :--- | :--- | :--- |
| **`CLOUDFLARE_ACCOUNT_ID`** | *Your Cloudflare Account ID* | Retrieved from the Cloudflare sidebar |
| **`CLOUDFLARE_API_TOKEN`** | *Your Cloudflare API Token* | Generated in Step 1.3 |

---

## Step 4: Verify Deployment

- Once the secrets are set up, pushing or merging code into the **`main`** branch will automatically trigger the GitHub Actions workflow.
- You can watch the build progress under the **Actions** tab of your GitHub repository.
- Once complete, Cloudflare will host your site on a unique sub-domain (e.g. `boys-aid-network.pages.dev`).
