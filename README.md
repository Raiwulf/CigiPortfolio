# Modern Portfolio Website

A modern, feature-first portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🌓 **Dark/Light Mode** - Toggle between dark and light themes
- 🌐 **Internationalization** - Support for multiple languages (English, Spanish, French)
- 🎨 **Modern Design** - Clean, responsive, and modern UI
- ⚡ **Performance Focused** - Optimized for speed and performance
- 🎭 **Smooth Animations** - Beautiful animations using Framer Motion
- 📱 **Fully Responsive** - Works on all devices
- 🧩 **Component-Based** - Modular and reusable components
- 🔍 **SEO Friendly** - Optimized for search engines
- 📄 **PDF Resume** - Generate and download a PDF resume

## Tech Stack

- **Next.js** - React framework for production
- **TypeScript** - Static type checking
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **next-themes** - Theme management
- **next-intl** - Internationalization
- **react-to-pdf** - PDF generation

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to GitHub Pages

### Automatic Deployment with GitHub Actions

This repository is configured to automatically deploy to GitHub Pages using GitHub Actions. When you push to the `main` branch, the site will be built and deployed automatically.

1. Go to your GitHub repository settings
2. Navigate to "Pages"
3. Select "GitHub Actions" as the source
4. Your site will be available at `https://yourusername.github.io/portfolio`

### Manual Deployment

If you prefer to deploy manually:

1. Build the project:
   ```bash
   npm run build
   ```

2. The static files will be generated in the `out` directory
3. You can deploy these files to any static hosting service

## Project Structure

```
portfolio/
├── app/                  # Next.js app directory
│   ├── [locale]/         # Locale-specific routes
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   └── globals.css       # Global styles
├── components/           # React components
├── data/                 # Data files (projects, skills)
├── messages/             # Localization files
├── public/               # Static assets
├── i18n.ts               # Internationalization config
├── middleware.ts         # Next.js middleware
├── tailwind.config.js    # Tailwind CSS config
└── package.json          # Project dependencies
```

## Customization

### Personal Information

Edit the localization files in the `messages` directory to update your personal information.

### Projects

Update the `data/projects.ts` file to add or modify your projects.

### Skills

Update the `data/skills.ts` file to customize your skills.

### Styling

The project uses Tailwind CSS for styling. You can customize the theme in the `tailwind.config.js` file.

## License

This project is licensed under the MIT License. 