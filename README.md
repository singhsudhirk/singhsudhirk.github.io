# Academic Website - Sudhir K. Singh

A modern, React-based academic website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- Git installed
- A GitHub account

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) to view your site.

3. **Add your profile image:**
   - Place your profile photo as `profile.jpg` in the `public/` folder
   - Or update the image path in `app/page.tsx`

4. **Add your CV:**
   - Place your CV PDF as `Sudhir_Singh_CV.pdf` in the `public/` folder

## 📦 Deployment to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. **Create `.github/workflows/deploy.yml`:**
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: ["main"]
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: '18'
         - run: npm ci
         - run: npm run build
         - uses: actions/upload-pages-artifact@v2
           with:
             path: ./out

     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       needs: build
       steps:
         - id: deployment
           uses: actions/deploy-pages@v2
   ```

2. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/singhsudhirk/singhsudhirk.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Build and deployment", select "GitHub Actions" as the source
   - Your site will be live at: `https://singhsudhirk.github.io`

### Option 2: Manual Build and Deploy

1. **Build the static site:**
   ```bash
   npm run build
   ```
   This creates an `out/` folder with static files.

2. **Deploy manually:**
   - Copy contents of `out/` folder to your GitHub Pages repository
   - Push to GitHub

## 📝 Customization

### Update Content
Edit `app/page.tsx` to update:
- Personal information
- Research papers
- Publications
- Teaching experience
- Contact information

### Styling
- Tailwind CSS classes are used throughout
- Global styles in `app/globals.css`
- Modify colors, spacing, and fonts as needed

### Add New Sections
Simply add new `<section>` elements in `app/page.tsx` following the existing pattern.

## 🛠 Project Structure

```
academic-website/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main page (your website)
│   └── globals.css      # Global styles
├── components/
│   └── ui/
│       └── button.tsx   # Button component
├── lib/
│   └── utils.ts         # Utility functions
├── public/
│   ├── profile.jpg      # Your profile image (add this)
│   └── Sudhir_Singh_CV.pdf  # Your CV (add this)
├── next.config.js       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── package.json         # Dependencies

```

## 🔧 Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📚 Removing Jekyll

If you still have Jekyll files in your repository:

1. Delete these files/folders:
   - `_config.yml`
   - `_layouts/`
   - `_includes/`
   - `_posts/`
   - `Gemfile`
   - `Gemfile.lock`
   - Any `.md` files that are Jekyll pages

2. Keep only:
   - Your CV PDF
   - Your profile image
   - Any other assets you want to use

## 🐛 Troubleshooting

### Build fails
- Make sure all dependencies are installed: `npm install`
- Check Node.js version: `node --version` (should be 18+)

### Images not loading
- Ensure images are in the `public/` folder
- Update paths in `app/page.tsx` if needed

### Site not updating on GitHub Pages
- Check GitHub Actions status in the "Actions" tab
- Ensure GitHub Pages is enabled in repository settings

## 📧 Support

For issues or questions, please open an issue in the GitHub repository.

## 📄 License

© 2025 - Personal academic website
