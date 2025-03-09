# DashCamPrice Project

## Project Overview
This project is a dash cam price comparison website, focusing on the visual layout and structure without populating it with actual data. The website is designed to help users compare dash cam prices for various brands and models.

## Current State
The project currently consists of:

1. **HTML Structure (index.html)**
   - SEO-optimized with proper meta tags, title, and description
   - Schema.org structured data for better search engine understanding
   - Header with site name and tagline
   - Filter section with dropdowns (Brand, Model) and data source selection
   - Data source selection box positioned opposite the device box in a two-column layout
   - Results table with columns for dash cam attributes (Brand, Price, Resolution, Features, Rating, Link)
   - Enhanced footer with affiliate disclosure and links
   - Open Graph and Twitter Card meta tags for social sharing
   - Font Awesome icons integrated throughout the interface
   - Favicon placeholders for brand identity

2. **CSS Styling (styles/main.css)**
   - Modern color palette with primary blue (#1a73e8) and secondary orange (#ff7043)
   - CSS variables for consistent colors, spacing, shadows, and transitions
   - Responsive design with mobile-first approach
   - Consistent visual language with rounded corners and subtle shadows
   - Modern typography using Google Fonts: Inter for body text and Montserrat for headings
   - Clear typographic hierarchy with distinct sizes and weights
   - Hover and focus states for interactive elements
   - Animated transitions between states
   - Card-based design with consistent spacing
   - Table layout with improved styling and hover effects
   - Gradient text effects for the logo
   - Sticky header that remains visible when scrolling
   - Dark-themed footer with animated link underlines
   - Mobile-friendly design with optimized media queries
   - Animation keyframes for various UI elements

3. **JavaScript Functionality (scripts/main.js)**
   - Dummy data for various dash cam models (8 products with various attributes)
   - Filtering system based on Brand, Model, and Data Source (limited to Amazon.com and Amazon.co.uk)
   - Sorting functionality (price low to high, price high to low, rating, newest, popularity)
   - Dynamic model selection based on chosen brand
   - Product display with simplified numeric ratings and clean "Visit Website" hyperlinks
   - Visual indicators for out-of-stock products
   - Dynamic meta description and title updates based on selected filters
   - URL parameter updates for better SEO and sharing
   - Schema.org structured data for products using JSON-LD
   - Microdata attributes for better SEO
   - Loading animations and transitions
   - Animated count changes for result numbers
   - Staggered animations for product rows
   - Hover effects for interactive elements
   - Page loading animations

4. **SEO Enhancements**
   - robots.txt file with sitemap reference
   - sitemap.xml with prioritized URLs for dash cam brands and models
   - Canonical URL to prevent duplicate content
   - Structured data for products and organization
   - Semantic HTML structure
   - Proper heading hierarchy
   - Descriptive anchor text
   - Mobile-friendly design
   - URL parameters for filtered views

## Technologies Used
- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts (Inter and Montserrat)
- Font Awesome for icons
- Schema.org structured data
- CSS Variables for theming
- CSS Animations and Transitions
- Flexbox for layouts

## Next Steps
Potential future enhancements:
- Add more product data for other dash cam models
- Implement real filtering functionality
- Add price history charts
- Implement product comparison feature
- Add search functionality
- Add more detailed feature filters (night vision, parking mode, etc.)
- Add user reviews section
- Implement lazy loading for images
- Add a content delivery network (CDN) for faster loading
- Implement server-side rendering for better SEO
- Add dark mode toggle
- Create product detail pages
- Implement user accounts for saving favorites
