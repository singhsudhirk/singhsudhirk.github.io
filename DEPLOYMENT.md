# 🚀 Quick Deployment Guide

## Step-by-Step Instructions to Deploy Your New Website

### 1️⃣ Backup Your Current Site (Optional but Recommended)
```bash
# Clone your current repository to a backup location
git clone https://github.com/singhsudhirk/singhsudhirk.github.io.git backup-old-site
```

### 2️⃣ Prepare Your Repository

**Option A: Start Fresh (Recommended)**
1. Go to https://github.com/singhsudhirk/singhsudhirk.github.io
2. Click "Settings" → Scroll down → "Delete this repository"
3. Create a new repository named `singhsudhirk.github.io`

**Option B: Clean Existing Repository**
```bash
cd singhsudhirk.github.io
git rm -rf .
git commit -m "Clean repository for new site"
```

### 3️⃣ Upload Your New Site

1. **Copy all files from the `academic-website` folder to your repository**

2. **Add your personal files:**
   - Place `profile.jpg` in the `public/` folder
   - Place `Sudhir_Singh_CV.pdf` in the `public/` folder

3. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "New React-based academic website"
   git push origin main
   ```

### 4️⃣ Enable GitHub Pages with GitHub Actions

1. Go to your repository on GitHub
2. Click **Settings**
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - Source: Select **GitHub Actions**
5. Click **Save**

### 5️⃣ Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You should see the workflow running
3. Once complete (green checkmark), your site is live at:
   **https://singhsudhirk.github.io**

## ⏱️ Timeline
- First deployment: ~2-5 minutes
- Future updates: ~1-2 minutes (automatic on push)

## 🎯 Making Updates

After initial deployment, any changes you push will automatically deploy:

```bash
# Edit files locally
git add .
git commit -m "Update research papers"
git push
```

The site will automatically rebuild and deploy!

## ✅ Verification Checklist

- [ ] Repository created/cleaned
- [ ] All files copied to repository
- [ ] Profile image added to `public/`
- [ ] CV PDF added to `public/`
- [ ] Files pushed to GitHub
- [ ] GitHub Pages enabled with GitHub Actions
- [ ] Workflow completed successfully
- [ ] Site is live at https://singhsudhirk.github.io

## 🆘 Need Help?

### Common Issues:

**Build fails:**
- Check the Actions tab for error messages
- Ensure `package.json` is in the root of the repository

**Site not updating:**
- Check if the workflow ran (Actions tab)
- Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)

**404 Error:**
- Wait 5-10 minutes after first deployment
- Ensure GitHub Pages is set to "GitHub Actions" source

**Images not showing:**
- Verify files are in the `public/` folder
- Check file names match exactly (case-sensitive)

## 📞 Contact

If you encounter issues, check:
1. GitHub Actions logs in your repository
2. GitHub Pages status in repository settings
3. Browser console for errors (F12)
