# Akshardhama Playschool Website

A multi-page responsive website for Akshardhama Playschool, built with semantic HTML5, CSS3, and minimal JavaScript for enhanced user experience.

## 🎨 Design Features

- **Color Scheme**: Mustard yellow (#D4A017) and warm orange (#FF8A00) as primary accents
- **Typography**: Poppins for headings, Inter for body text
- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **Accessibility**: Semantic HTML5, ARIA labels, keyboard navigation support
- **Modern UI**: Clean, warm design inspired by Dibber and Jumpstart preschool websites

## 📁 Project Structure

```
akshardhama/
├── index.html              # Homepage
├── programs.html           # Programs details (Playschool, LKG, UKG)
├── about.html              # About us, philosophy, teachers
├── admissions.html         # Admission process and form
├── gallery.html            # Photo gallery with filtering
├── contact.html            # Contact information and form
├── styles.css              # Complete stylesheet with CSS variables
├── README.md               # This file
├── create-placeholders.html # Image placeholder generator
├── images/                 # Image assets
│   ├── gallery/           # Gallery images
│   └── ...                # Other images
└── icons/                 # SVG icons
    ├── safety.svg
    ├── learning.svg
    ├── teachers.svg
    └── ...                # Other icons
```

## 🚀 Quick Start

1. **Clone or download** this project to your local machine
2. **Generate placeholder images** (optional):
   - Open `create-placeholders.html` in your browser
   - Images will be automatically downloaded to your default download folder
   - Move downloaded images to the appropriate folders in the project
3. **Open any HTML file** in your browser to view the website
4. **For local development**, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

## 🌐 Deployment Options

### GitHub Pages
1. Push the project to a GitHub repository
2. Go to Settings → Pages
3. Select "Deploy from a branch"
4. Choose main branch and root folder
5. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Push to GitHub/GitLab/Bitbucket
2. Sign up for Netlify and connect your repository
3. Set build command to empty (since it's static)
4. Set publish directory to `.`
5. Deploy!

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`
3. Follow the prompts

### Traditional Hosting
1. Upload all files to your web server's public directory
2. Ensure the server supports static file serving
3. Configure your domain if needed

## 📱 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari 12+, Chrome Mobile 60+)

## ♿ Accessibility Features

- Semantic HTML5 structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast color combinations
- Focus indicators
- Screen reader friendly
- Alt text for all images
- Form labels and descriptions

## 🔧 Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --mustard-500: #D4A017;
    --orange-500: #FF8A00;
    /* ... other colors */
}
```

### Fonts
Replace Google Fonts links in HTML head:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap" rel="stylesheet">
```

### Content
Update text content directly in HTML files. All sections are clearly commented for easy editing.

## 📝 Form Handling

The contact and admission forms include client-side validation. To make them functional:

### Option 1: Netlify Forms
Add `netlify` attribute to form tags:
```html
<form netlify method="POST" name="contact">
```

### Option 2: Formspree
Update form action:
```html
<form action="https://formspree.io/f/your-id" method="POST">
```

### Option 3: Custom Backend
Replace the `action="#"` with your backend endpoint and implement form processing.

## 🖼️ Images

### Placeholder Images
Use the included `create-placeholders.html` to generate placeholder images. For production:

1. **Photography**: Hire a photographer or use stock photos
2. **Stock Photos**: Recommended sources:
   - Unsplash
   - Pexels
   - Adobe Stock
3. **Image Requirements**:
   - Hero images: 1200x800px minimum
   - Gallery: 800x600px minimum
   - Thumbnails: 400x300px
   - Optimize for web (JPEG 80% quality)

### Image Optimization
- Use tools like TinyPNG or Squoosh
- Implement lazy loading for better performance
- Consider WebP format for modern browsers

## 📊 SEO Optimization

The site includes:
- Meta titles and descriptions
- Semantic HTML structure
- Image alt attributes
- Heading hierarchy
- Internal linking

For better SEO:
1. Generate `sitemap.xml`
2. Add structured data (Schema.org)
3. Set up Google Search Console
4. Submit to search engines

## 🔍 Analytics Integration

### Google Analytics
Add before closing `</head>`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🛠️ Maintenance

### Regular Tasks
- Update content (fees, programs, events)
- Add new gallery images
- Check form functionality
- Monitor site performance
- Update security patches

### Performance Optimization
- Enable Gzip compression
- Use CDN for assets
- Implement browser caching
- Minimize CSS/JS
- Optimize images

## 📞 Support

For questions or support:
- Email: info@akshardhama.com
- Phone: +91 80 1234 5678

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ for Akshardhama Playschool**
