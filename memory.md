# ScreenGuardian Project

## Project Overview
This project is a screen protector price comparison website, focusing on the visual layout and structure without populating it with actual data. The website is designed to help users compare screen protector prices for various devices.

## Current State
The project currently consists of:

1. **HTML Structure (index.html)**
   - SEO-optimized with proper meta tags, title, and description
   - Schema.org structured data for better search engine understanding
   - Header with navigation (About, Contact)
   - Hero section with clear value proposition
   - Filter section with dropdowns (Make, Model) and checkboxes
   - Data source selection box positioned opposite the device box in a two-column layout
   - Results table with columns for screen protector attributes (Brand, Price, Quantity, Material, Rating, Link)
   - About and Contact sections
   - Enhanced footer with quick links and popular devices
   - Open Graph and Twitter Card meta tags for social sharing

2. **CSS Styling (styles/main.css)**
   - Responsive design
   - Monochromatic teal color scheme for a distinctive yet simple look
   - Increased whitespace throughout for better readability
   - Flat design with no box shadows for a modern appearance
   - Distinctive typography using Poppins for headings and Inter for body text
   - Clear typographic hierarchy with consistent font weights and sizes
   - Minimalist footer design with centered content
   - Table layout for displaying products with center-aligned data
   - Narrower columns for quantity and rating for better visual balance
   - Filter controls styling with improved spacing
   - Mobile-friendly design with media queries
   - Sticky footer that remains at the bottom of the viewport
   - Styling for product ratings
   - Smooth scrolling for anchor links
   - Enhanced section styling for About and Contact sections

3. **JavaScript Functionality (scripts/main.js)**
   - Dummy data for iPhone 15 Pro screen protectors (7 products with various attributes)
   - Simplified filtering system based on Make, Model, and Data Source (limited to Amazon.com and Amazon.co.uk)
   - Sorting functionality (price low to high, price high to low, rating, newest, popularity)
   - Dynamic model selection based on chosen make
   - Product display with simplified numeric ratings and clean "Visit Website" hyperlinks
   - Visual indicators for out-of-stock products
   - Dynamic meta description and title updates based on selected filters
   - URL parameter updates for better SEO and sharing
   - Schema.org structured data for products using JSON-LD
   - Microdata attributes for better SEO

4. **SEO Enhancements**
   - robots.txt file with sitemap reference
   - sitemap.xml with prioritized URLs
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
- Google Fonts (Poppins and Inter)
- Font Awesome for icons
- Schema.org structured data

## Next Steps
Potential future enhancements:
- Add more product data for other device models
- Implement real filtering functionality
- Add price history charts
- Implement product comparison feature
- Add search functionality
- Add device model selector for precise compatibility
- Add user reviews section
- Implement lazy loading for images
- Add a content delivery network (CDN) for faster loading
- Implement server-side rendering for better SEO
