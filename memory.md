# ScreenGuardian Project

## Project Overview
This project is a screen protector price comparison website, focusing on the visual layout and structure without populating it with actual data. The website is designed to help users compare screen protector prices for various devices.

## Current State
The project currently consists of:

1. **HTML Structure (index.html)**
   - Header with navigation (Smartphones, Tablets, Watches, About)
   - Filter section with dropdowns (Make, Model) and checkboxes
   - Results table with columns for screen protector attributes (Product, Device, Price, Material, Rating, Affiliate Link)
   - Footer with centered copyright information

2. **CSS Styling (styles/main.css)**
   - Responsive design
   - Modern color scheme with blue accents
   - Table layout for displaying products with center-aligned data
   - Filter controls styling
   - Mobile-friendly design with media queries
   - Sticky footer that remains at the bottom of the viewport
   - Styling for product ratings
   - Styling for compare buttons
   - Special styling for out-of-stock products

3. **JavaScript Functionality (scripts/main.js)**
   - Dummy data for iPhone 15 Pro screen protectors (7 products with various attributes)
   - Functional filtering system based on Make, Model, and In Stock status
   - Sorting functionality (price low to high, price high to low, rating, newest, popularity)
   - Dynamic model selection based on chosen make
   - Product display with simplified numeric ratings (directly in table cells) and clean "Visit Website" hyperlinks without icons
   - Visual indicators for out-of-stock products
   - Compare button functionality (currently just logs to console)

## Technologies Used
- HTML5
- CSS3
- Vanilla JavaScript
- Font Awesome for icons

## Next Steps
Potential future enhancements:
- Add more product data for other device models
- Implement real filtering functionality
- Add price history charts
- Implement product comparison feature
- Add search functionality
- Add device model selector for precise compatibility
- Add user reviews section
