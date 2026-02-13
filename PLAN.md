# $200 Restaurant Website - "Functional Starter"

## Project Overview

**Budget**: $200
**Target**: Small local business
**Development Time**: 4-8 hours
**Best For**: Local restaurants wanting professional look without complexity

---

## Technical Specifications

### Stack
- **Frontend**: Next.js 14+ (App Router)
- **Backend**: None (static generation)
- **Database**: None
- **Hosting**: Vercel (free tier) or Netlify
- **Forms**: Formspree, FormSubmit, or Netlify Forms (free tier)
- **Styling**: Tailwind CSS

### File Structure
```
two_hundred_dollar_site/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── menu/
│   │   └── page.tsx        # Menu page
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── contact/
│   │   └── page.tsx        # Contact page with form
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Site navigation
│   ├── Footer.tsx          # Site footer
│   └── ContactForm.tsx     # Working contact form
├── public/
│   ├── images/
│   │   ├── hero.jpg        # Hero image
│   │   ├── interior.jpg    # Restaurant interior
│   │   ├── dish-1.jpg      # Food photos
│   │   ├── dish-2.jpg
│   │   └── dish-3.jpg
│   └── logo.svg            # Restaurant logo
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## Pages

### 1. Home Page (`/`)
- Hero section with background image overlay
- Restaurant tagline and brief intro
- Featured dishes carousel/grid
- Quick info (hours, location preview)
- Call to action buttons (View Menu, Make Reservation)
- Testimonials section (static)

### 2. Menu Page (`/menu`)
- Menu categories with tabs or sections
- Dish cards with images, names, descriptions, prices
- Category navigation
- PDF download option (optional)

### 3. About Page (`/about`)
- Restaurant story
- Team/chef introduction
- Image gallery (3-5 photos)
- Mission/values section

### 4. Contact Page (`/contact`)
- Contact form (name, email, phone, message)
- Google Maps embed
- Business hours
- Address and contact info
- Social media links

---

## Design Specifications

### Colors
Create a cohesive brand palette:
```css
/* Primary Brand Colors */
--primary: #8B2635;        /* Deep red/burgundy */
--primary-dark: #6B1D29;
--secondary: #2C3E50;      /* Dark blue-gray */
--accent: #D4A574;         /* Gold/warm accent */

/* Neutrals */
--background: #FFFBF5;     /* Warm white */
--text: #1A1A1A;
--text-light: #666666;
--border: #E5E5E5;
```

### Typography
```css
/* Google Fonts - 2 fonts max */
--font-heading: 'Playfair Display', serif;
--font-body: 'Inter', sans-serif;

/* Font Sizes */
h1: 48px (mobile: 32px)
h2: 36px (mobile: 28px)
h3: 24px (mobile: 20px)
body: 16px
small: 14px
```

### Layout
- Max width: 1200px
- Content padding: 24px (mobile), 48px (desktop)
- Grid: CSS Grid or Tailwind grid
- Consistent section spacing

### Responsive Breakpoints
```css
sm: 640px    /* Small devices */
md: 768px    /* Tablets */
lg: 1024px   /* Desktop */
xl: 1280px   /* Large desktop */
```

---

## Features

### Must Have
- [ ] 4 pages with navigation
- [ ] Fully responsive design
- [ ] Working contact form (emails on submission)
- [ ] Image gallery on About page
- [ ] Menu with categories and images
- [ ] Hero section with overlay
- [ ] Google Fonts integration
- [ ] Social media links
- [ ] Basic SEO meta tags

### Nice to Have
- [ ] Hover effects on buttons/cards
- [ ] Smooth scroll navigation
- [ ] Image lightbox (CSS-only)
- [ ] Favicon

### Must NOT Have
- [ ] NO CMS
- [ ] NO database
- [ ] NO user authentication
- [ ] NO real-time features
- [ ] NO animations library (CSS only)
- [ ] NO reservation system
- [ ] NO online ordering

---

## Components

### Navigation
- Logo on left
- Nav links on right
- Mobile hamburger menu
- Sticky on scroll (optional)

### Hero
- Full-width background image
- Dark overlay
- Centered text content
- CTA buttons

### Menu Card
- Food image
- Dish name
- Description (2-3 lines)
- Price
- Optional: dietary tags

### Contact Form
```typescript
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}
```

### Footer
- Logo
- Quick links
- Contact info
- Social icons
- Copyright

---

## Content Requirements

### Restaurant Details
```
Name: Bella Italia Restaurant
Tagline: Authentic Italian Cuisine Since 2010
Address: 123 Main Street, Anytown, USA 12345
Phone: (555) 123-4567
Email: info@bellaitalia.example.com
Hours: 
  Mon-Thu: 11:00 AM - 9:00 PM
  Fri-Sat: 11:00 AM - 10:00 PM
  Sunday: 12:00 PM - 8:00 PM

Social:
- Facebook: facebook.com/bellaitalia
- Instagram: instagram.com/bellaitalia
```

### About Content
```
Our Story:
Bella Italia was founded in 2010 by Chef Marco Rossi, 
bringing authentic Italian recipes passed down through 
generations. Our kitchen uses only the freshest locally-
sourced ingredients to create dishes that transport you 
straight to the Italian countryside.

Our Mission:
To provide an unforgettable dining experience through 
exceptional food, warm hospitality, and a passion for 
Italian culinary traditions.
```

### Testimonials (Static - 3)
```
1. "The best Italian food outside of Italy! The pasta is 
   made fresh daily and you can taste the difference."
   - Sarah M.

2. "Our go-to date night spot. Romantic atmosphere and 
   incredible wine selection."
   - James & Lisa K.

3. "The lasagna is to die for! Friendly staff and cozy 
   ambiance. Highly recommend!"
   - Michael R.
```

---

## Performance Requirements

### Target Metrics
- **Lighthouse Performance**: 70+
- **Lighthouse Accessibility**: 90+
- **First Contentful Paint**: < 2s
- **Largest Contentful Paint**: < 3s

### Optimizations
- [ ] Next.js Image component for all images
- [ ] Static generation (no SSR needed)
- [ ] Font optimization with `next/font`
- [ ] Image lazy loading
- [ ] Minimal JavaScript bundle

### Image Guidelines
- Hero: 1920x1080px, < 200KB (WebP preferred)
- Menu items: 600x400px, < 50KB each
- Gallery: 800x600px, < 100KB each

---

## SEO Requirements

### Meta Tags
```html
<title>Bella Italia | Authentic Italian Restaurant in Anytown</title>
<meta name="description" content="Experience authentic Italian cuisine...">
<meta name="keywords" content="Italian restaurant, pasta, Anytown, ...">
```

### Open Graph
```html
<meta property="og:title" content="Bella Italia Restaurant">
<meta property="og:description" content="...">
<meta property="og:image" content="/images/og-image.jpg">
<meta property="og:type" content="restaurant">
```

### Basic Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Bella Italia",
  "address": { ... },
  "servesCuisine": "Italian",
  "priceRange": "$$"
}
```

---

## Accessibility Requirements

### WCAG 2.1 Level AA
- [ ] Semantic HTML throughout
- [ ] Alt text for all images
- [ ] Color contrast ratio 4.5:1 minimum
- [ ] Focus states for interactive elements
- [ ] Skip to main content link
- [ ] Form labels and error messages
- [ ] Keyboard navigable

---

## Implementation Checklist

### Setup
- [ ] Create Next.js app with TypeScript
- [ ] Install and configure Tailwind CSS
- [ ] Set up Google Fonts
- [ ] Create folder structure
- [ ] Set up Formspree account

### Components
- [ ] Build Navigation component
- [ ] Build Footer component
- [ ] Build ContactForm component
- [ ] Build MenuCard component
- [ ] Build Hero component

### Pages
- [ ] Build Home page
- [ ] Build Menu page with categories
- [ ] Build About page with gallery
- [ ] Build Contact page with form

### Integration
- [ ] Connect contact form to Formspree
- [ ] Add Google Maps embed
- [ ] Implement responsive navigation
- [ ] Test all pages on mobile

### Optimization
- [ ] Optimize all images
- [ ] Run Lighthouse audit
- [ ] Fix any accessibility issues
- [ ] Test form submissions

### Deployment
- [ ] Push to Git repository
- [ ] Connect to Vercel
- [ ] Deploy
- [ ] Verify live site

---

## Contact Form Integration

### Formspree Setup
1. Create account at formspree.io
2. Create new form
3. Use form endpoint in form action:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Form Fields
```tsx
<form action="https://formspree.io/f/xxxxx" method="POST">
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <input type="tel" name="phone" />
  <textarea name="message" required></textarea>
  <button type="submit">Send Message</button>
</form>
```

---

## Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify Alternative
1. Push to GitHub
2. Connect repo in Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

---

## Comparison to $100 Tier

| Feature | $100 | $200 |
|---------|------|------|
| Pages | 2 | 4 |
| Tech | Plain HTML | Next.js |
| Styling | Basic CSS | Tailwind |
| Forms | mailto: | Working form |
| Images | Minimal | Gallery + hero |
| Fonts | System | Google Fonts |
| SEO | Minimal | Basic + Schema |
| Performance | ~50 | ~70 |

---

## Notes for Developers

This tier introduces modern web development practices:
- React/Next.js framework
- Component-based architecture
- CSS frameworks (Tailwind)
- Third-party service integration (forms)
- Image optimization
- Basic SEO

Focus on clean, maintainable code. This serves as the foundation that higher tiers will build upon.
