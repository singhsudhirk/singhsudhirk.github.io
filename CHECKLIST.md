# 📋 Setup Checklist

Complete these steps to get your new academic website live!

## Before You Start
- [ ] Have Node.js 18+ installed ([Download here](https://nodejs.org/))
- [ ] Have Git installed
- [ ] Have your GitHub repository ready: https://github.com/singhsudhirk/singhsudhirk.github.io

## Files to Prepare
- [ ] Profile photo (as `profile.jpg`)
- [ ] CV PDF (as `Sudhir_Singh_CV.pdf`)
- [ ] Any other documents you want to link

## Local Setup (Optional - for testing)
```bash
# Navigate to the project folder
cd academic-website

# Install dependencies
npm install

# Run locally to test
npm run dev
# Visit http://localhost:3000
```

## Deployment Steps

### 1. Prepare Your Repository
- [ ] Back up your current site (if needed)
- [ ] Clean your GitHub repository OR create new one

### 2. Add Your Files
- [ ] Copy all project files to your repository folder
- [ ] Add `profile.jpg` to the `public/` folder
- [ ] Add `Sudhir_Singh_CV.pdf` to the `public/` folder

### 3. Customize Content (Optional)
- [ ] Update contact email in `app/page.tsx`
- [ ] Add Google Scholar, ORCID, LinkedIn links
- [ ] Review and update research papers list
- [ ] Review and update publications list
- [ ] Review and update teaching information

### 4. Push to GitHub
```bash
git add .
git commit -m "Deploy new React website"
git push origin main
```

### 5. Configure GitHub Pages
- [ ] Go to repository Settings
- [ ] Navigate to Pages section
- [ ] Set source to "GitHub Actions"
- [ ] Save changes

### 6. Verify Deployment
- [ ] Check Actions tab for successful build
- [ ] Visit https://singhsudhirk.github.io
- [ ] Test all navigation links
- [ ] Verify CV download works
- [ ] Check profile image loads
- [ ] Test responsive design (mobile view)

## Content Updates

### To update research papers:
Edit `app/page.tsx` in the "Working Papers Section"

### To update publications:
Edit `app/page.tsx` in the "Publications Section"

### To update teaching:
Edit `app/page.tsx` in the "Teaching Section"

### To change colors/styling:
Modify Tailwind classes in `app/page.tsx` or `app/globals.css`

## Future Updates
After initial deployment, just:
1. Make changes to files locally
2. Commit: `git commit -am "Description of changes"`
3. Push: `git push`
4. Site auto-updates in 1-2 minutes!

## Need Help?
- **Build errors**: Check GitHub Actions logs
- **Styling issues**: Inspect element in browser (F12)
- **Page not loading**: Clear cache (Ctrl+Shift+R)

---

✨ Once complete, your modern academic website will be live!
