# Ruse Massage Studio Website

A modern, responsive website for a professional massage studio in Ruse, Bulgaria. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI**: Clean design with smooth animations and professional aesthetics
- **SEO Optimized**: Meta tags, structured data, and optimized images
- **Performance**: Static generation, optimized fonts, and efficient loading
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation
- **Multi-language Ready**: Bulgarian content with easy internationalization structure

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Roboto, Libre Caslon Text)
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/antonioiliev96/ruse-massage-studio.git
   cd ruse-massage-studio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build & Deploy

### Production Build
```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically build and deploy

### Environment Variables
No environment variables required for basic functionality. All content is managed in `content/siteContent.ts`.

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles and Tailwind config
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Homepage
│   ├── contact/          # Contact page
│   ├── services/         # Services page
│   └── ...
├── components/            # Reusable React components
│   ├── ui/               # shadcn/ui components
│   ├── layout/           # Layout components (Header, Footer)
│   └── ...
├── content/              # Content management
│   └── siteContent.ts    # All website content and configuration
├── public/               # Static assets
│   ├── assets/           # Images
│   └── ...
└── lib/                  # Utilities and configurations
```

## ⚙️ Configuration

### Content Management
All website content is managed in `content/siteContent.ts`:
- Business information (name, address, phone, hours)
- Services and pricing
- Testimonials
- FAQ
- Navigation menus

### Styling
- Colors and design tokens: `app/globals.css`
- Tailwind configuration: `tailwind.config.ts`
- Component styles: Individual component files

## 🎨 Customization

### Colors & Branding
Edit the CSS variables in `app/globals.css`:
```css
:root {
  --primary: 336 84% 50%;        /* Main brand color */
  --secondary: 330 25% 22%;      /* Secondary color */
  --accent: 336 60% 94%;         /* Accent color */
  /* ... */
}
```

### Content Updates
Edit `content/siteContent.ts` to update:
- Business details
- Services and prices
- Testimonials
- Contact information

## 📱 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js Image component with WebP support
- **Font Loading**: Optimized Google Fonts loading
- **Static Generation**: Pre-rendered pages for fast loading

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript check
```

### Code Quality
- **TypeScript**: Strict type checking
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting (if configured)

## 📄 License

This project is proprietary software for Ruse Massage Studio.

## 🤝 Support

For technical support or questions about this website, please contact the development team.