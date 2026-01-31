# GitHub Deployment Guide 🚀

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository:
   - **Repository name**: `SeniorFrontend.dev` (or your preferred name)
   - **Description**: "Premium curriculum platform for Senior Frontend Engineers"
   - **Visibility**: Public (recommended) or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)

## Step 2: Push to GitHub

After creating the repository, run these commands:

```bash
# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/SeniorFrontend.dev.git

# Push to GitHub
git push -u origin main
```

## Step 3: Deploy to Vercel (Recommended)

### Option A: Deploy via Vercel Dashboard

1. Go to [Vercel](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"
6. Your app will be live at `https://your-project.vercel.app`

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Step 4: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `seniorfrontend.dev`)
4. Follow DNS configuration instructions

## Environment Variables

This project doesn't require any environment variables for basic functionality.

If you add features that need env vars:

1. Create `.env.local` file locally
2. Add variables to Vercel:
   - Go to Project Settings → Environment Variables
   - Add your variables

## Build Configuration

The project uses default Next.js build settings:

```json
{
  "buildCommand": "next build",
  "outputDirectory": ".next",
  "installCommand": "npm install"
}
```

## Deployment Checklist

- ✅ All content committed to git
- ✅ README.md created
- ✅ .gitignore configured
- ✅ Repository created on GitHub
- ✅ Code pushed to GitHub
- ✅ Deployed to Vercel
- ⬜ Custom domain configured (optional)
- ⬜ Analytics added (optional)

## Troubleshooting

### Build Fails on Vercel

1. Check Node.js version (should be 18+)
2. Verify all dependencies are in `package.json`
3. Check build logs for specific errors

### Content Not Loading

1. Ensure `content/` directory is committed
2. Check file paths are correct
3. Verify MDX files have proper frontmatter

### Mobile Menu Not Working

1. Clear browser cache
2. Check JavaScript is enabled
3. Verify build completed successfully

## Next Steps

1. **Analytics**: Add Vercel Analytics or Google Analytics
2. **SEO**: Add meta tags and sitemap
3. **Performance**: Monitor Core Web Vitals
4. **Content**: Add more questions and topics
5. **Features**: Add search, filters, progress tracking

---

**Your app is now live! 🎉**

Share it with the community and help senior engineers level up! 🚀
