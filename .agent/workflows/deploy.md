---
description: How to deploy the Keith Fowler website
---

# Deploying the Website

The easiest way to deploy this Vite/React application is using **Netlify Drop** or **Vercel**.

## Option 1: Netlify Drop (Easiest - Drag & Drop)

1.  **Build the project** (I have already done this for you):
    - Run `npm run build` in your terminal.
    - This creates a `dist` folder in your project directory (`c:\Users\Kiran\Downloads\keith\dist`).

2.  **Deploy**:
    - Go to [app.netlify.com/drop](https://app.netlify.com/drop).
    - Open your file explorer to `c:\Users\Kiran\Downloads\keith`.
    - Drag and drop the **`dist`** folder into the browser window.
    - Netlify will instantly deploy it and give you a live URL (e.g., `silly-keith-123456.netlify.app`).

## Option 2: Vercel (Recommended for long term)

1.  **Install Vercel CLI** (Optional, but easy):
    - Run `npm i -g vercel`
    - Run `vercel` inside the project folder.
    - Follow the prompts (Keep default settings).

2.  **Or via UI**:
    - Push your code to GitHub.
    - Go to [vercel.com](https://vercel.com/new).
    - Import your Git repository.
    - Vercel automatically detects it's a Vite project.
    - Click **Deploy**.

## Verifying the Build Locally first

To check if the build works before deploying:
1. Run `npm run preview`
2. Open the localhost URL provided.
