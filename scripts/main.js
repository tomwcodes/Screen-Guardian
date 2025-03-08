// Main JavaScript file for ScreenGuardian - Screen Protector Price Comparison

// Add meta description dynamically based on selected filters
function updateMetaDescription(make, model) {
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) return;
    
    if (make !== 'all' && model !== 'all') {
        const makeText = document.querySelector(`#make option[value="${make}"]`).textContent;
        const modelText = document.querySelector(`#model option[value="${model}"]`).textContent;
        metaDescription.content = `Compare ${makeText} ${modelText} screen protector prices. Find the best deals on tempered glass, privacy glass, and TPU film screen protectors.`;
    } else if (make !== 'all') {
        const makeText = document.querySelector(`#make option[value="${make}"]`).textContent;
        metaDescription.content = `Compare ${makeText} screen protector prices for all models. Find the best deals on tempered glass, privacy glass, and TPU film screen protectors.`;
    } else {
        metaDescription.content = "Compare screen protector prices for iPhone, Samsung, Google Pixel and more. Find the best deals on tempered glass, privacy glass, and TPU film screen protectors.";
    }
}

// Update page title based on selected filters
function updatePageTitle(make, model) {
    if (make !== 'all' && model !== 'all') {
        const makeText = document.querySelector(`#make option[value="${make}"]`).textContent;
        const modelText = document.querySelector(`#model option[value="${model}"]`).textContent;
        document.title = `${makeText} ${modelText} Screen Protectors | ScreenGuardian`;
    } else if (make !== 'all') {
        const makeText = document.querySelector(`#make option[value="${make}"]`).textContent;
        document.title = `${makeText} Screen Protectors | ScreenGuardian`;
    } else {
        document.title = "ScreenGuardian - Compare Screen Protector Prices | Find the Best Deals";
    }
}

// Dummy data for iPhone 15 Pro screen protectors
const screenProtectorData = [
    {
        id: 1,
        brand: "UltraGuard",
        device: "iPhone 15 Pro",
        deviceValue: "iphone-15-pro",
        make: "apple",
        price: 29.99,
        quantity: 2,
        material: "Tempered Glass",
        rating: 4.8,
        inStock: true,
        link: "https://example.com/ultraguard-pro-max",
        dateAdded: new Date(2025, 1, 15)
    },
    {
        id: 2,
        brand: "CrystalClear",
        device: "iPhone 15 Pro",
        deviceValue: "iphone-15-pro",
        make: "apple",
        price: 24.95,
        quantity: 1,
        material: "Tempered Glass",
        rating: 4.6,
        inStock: true,
        link: "https://example.com/crystalclear-shield",
        dateAdded: new Date(2025, 2, 1)
    },
    {
        id: 3,
        brand: "PrivacyGuard",
        device: "iPhone 15 Pro",
        deviceValue: "iphone-15-pro",
        make: "apple",
        price: 34.99,
        quantity: 3,
        material: "Privacy Glass",
        rating: 4.5,
        inStock: true,
        link: "https://example.com/privacyguard-elite",
        dateAdded: new Date(2025, 0, 20)
    },
    {
        id: 4,
        brand: "NanoShield",
        device: "iPhone 15 Pro",
        deviceValue: "iphone-15-pro",
        make: "apple",
        price: 19.99,
        quantity: 1,
        material: "TPU Film",
        rating: 4.2,
        inStock: true,
        link: "https://example.com/nanoshield-flex",
        dateAdded: new Date(2025, 1, 10)
    },
    {
        id: 5,
        brand: "DiamondDefend",
        device: "iPhone 15 Pro",
        deviceValue: "iphone-15-pro",
        make: "apple",
        price: 39.99,
        quantity: 2,
        material: "Sapphire Glass",
        rating: 4.9,
        inStock: false,
        link: "https://example.com/diamonddefend-pro",
        dateAdded: new Date(2025, 2, 5)
    },
    {
        id: 6,
        brand: "MatteFlex",
        device: "iPhone 15 Pro",
        deviceValue: "iphone-15-pro",
        make: "apple",
        price: 22.95,
        quantity: 1,
        material: "Matte Glass",
        rating: 4.3,
        inStock: true,
        link: "https://example.com/matteflex-antiglare",
        dateAdded: new Date(2025, 1, 25)
    },
    {
        id: 7,
        brand: "EdgeGuard",
        device: "iPhone 15 Pro",
        deviceValue: "iphone-15-pro",
        make: "apple",
        price: 32.99,
        quantity: 2,
        material: "Tempered Glass",
        rating: 4.7,
        inStock: true,
        link: "https://example.com/edgeguard-360",
        dateAdded: new Date(2025, 0, 5)
    }
];

document.addEventListener('DOMContentLoaded', function() {
    // Initialize filter functionality
    initializeFilters();
    
    // Display all products initially
    displayProducts(screenProtectorData);
    
    // Add event listeners for smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Generate product schema for SEO
    generateProductSchema();
});

// Generate JSON-LD schema for products
function generateProductSchema() {
    const schema = {
        "@context": "https://schema.org/",
        "@type": "ItemList",
        "itemListElement": []
    };
    
    screenProtectorData.forEach((product, index) => {
        schema.itemListElement.push({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Product",
                "name": `${product.brand} Screen Protector for ${product.device}`,
                "description": `${product.material} screen protector for ${product.device}`,
                "brand": {
                    "@type": "Brand",
                    "name": product.brand
                },
                "offers": {
                    "@type": "Offer",
                    "price": product.price,
                    "priceCurrency": "USD",
                    "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": product.rating,
                    "bestRating": "5",
                    "worstRating": "1",
                    "ratingCount": "100" // Placeholder value
                }
            }
        });
    });
    
    // Add the schema to the page
    const scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.text = JSON.stringify(schema);
    document.head.appendChild(scriptTag);
}

function initializeFilters() {
    // Get all filter elements
    const makeFilter = document.getElementById('make');
    const modelFilter = document.getElementById('model');
    const inStockFilter = document.getElementById('in-stock');
    const sortBySelect = document.getElementById('sort-by');
    
    // Add event listeners to filters
    if (makeFilter) makeFilter.addEventListener('change', applyFilters);
    if (modelFilter) modelFilter.addEventListener('change', applyFilters);
    if (inStockFilter) inStockFilter.addEventListener('change', applyFilters);
    if (sortBySelect) sortBySelect.addEventListener('change', applyFilters);
    
    // Add event listener to update model options based on selected make
    if (makeFilter) makeFilter.addEventListener('change', updateModelOptions);
    
    // Add event listener to update meta description and title
    if (makeFilter) makeFilter.addEventListener('change', function() {
        updateMetaDescription(makeFilter.value, modelFilter.value);
        updatePageTitle(makeFilter.value, modelFilter.value);
    });
    
    if (modelFilter) modelFilter.addEventListener('change', function() {
        updateMetaDescription(makeFilter.value, modelFilter.value);
        updatePageTitle(makeFilter.value, modelFilter.value);
    });
}

function updateModelOptions() {
    const makeFilter = document.getElementById('make');
    const modelFilter = document.getElementById('model');
    
    if (!makeFilter || !modelFilter) return;
    
    const selectedMake = makeFilter.value;
    
    // Clear current options except the first one (All Models)
    while (modelFilter.options.length > 1) {
        modelFilter.remove(1);
    }
    
    // Add appropriate models based on selected make
    if (selectedMake === 'all') {
        // Add all models
        addModelOption(modelFilter, 'iphone-15-pro', 'iPhone 15 Pro');
        addModelOption(modelFilter, 'iphone-15', 'iPhone 15');
        addModelOption(modelFilter, 'iphone-14-pro', 'iPhone 14 Pro');
        addModelOption(modelFilter, 'iphone-14', 'iPhone 14');
        addModelOption(modelFilter, 'iphone-13', 'iPhone 13');
        addModelOption(modelFilter, 'galaxy-s24', 'Galaxy S24');
        addModelOption(modelFilter, 'galaxy-s23', 'Galaxy S23');
        addModelOption(modelFilter, 'galaxy-s22', 'Galaxy S22');
        addModelOption(modelFilter, 'pixel-8-pro', 'Pixel 8 Pro');
        addModelOption(modelFilter, 'pixel-8', 'Pixel 8');
        addModelOption(modelFilter, 'pixel-7', 'Pixel 7');
    } else if (selectedMake === 'apple') {
        addModelOption(modelFilter, 'iphone-15-pro', 'iPhone 15 Pro');
        addModelOption(modelFilter, 'iphone-15', 'iPhone 15');
        addModelOption(modelFilter, 'iphone-14-pro', 'iPhone 14 Pro');
        addModelOption(modelFilter, 'iphone-14', 'iPhone 14');
        addModelOption(modelFilter, 'iphone-13', 'iPhone 13');
    } else if (selectedMake === 'samsung') {
        addModelOption(modelFilter, 'galaxy-s24', 'Galaxy S24');
        addModelOption(modelFilter, 'galaxy-s23', 'Galaxy S23');
        addModelOption(modelFilter, 'galaxy-s22', 'Galaxy S22');
    } else if (selectedMake === 'google') {
        addModelOption(modelFilter, 'pixel-8-pro', 'Pixel 8 Pro');
        addModelOption(modelFilter, 'pixel-8', 'Pixel 8');
        addModelOption(modelFilter, 'pixel-7', 'Pixel 7');
    } else if (selectedMake === 'oneplus') {
        addModelOption(modelFilter, 'oneplus-12', 'OnePlus 12');
        addModelOption(modelFilter, 'oneplus-11', 'OnePlus 11');
    } else if (selectedMake === 'xiaomi') {
        addModelOption(modelFilter, 'xiaomi-14', 'Xiaomi 14');
        addModelOption(modelFilter, 'xiaomi-13', 'Xiaomi 13');
    }
}

function addModelOption(selectElement, value, text) {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = text;
    selectElement.appendChild(option);
}

function applyFilters() {
    const makeFilter = document.getElementById('make');
    const modelFilter = document.getElementById('model');
    const inStockFilter = document.getElementById('in-stock');
    const sortBySelect = document.getElementById('sort-by');
    
    if (!makeFilter || !modelFilter || !inStockFilter || !sortBySelect) return;
    
    const selectedMake = makeFilter.value;
    const selectedModel = modelFilter.value;
    const inStockOnly = inStockFilter.checked;
    const sortBy = sortBySelect.value;
    
    // Update URL with filter parameters for better SEO and sharing
    const url = new URL(window.location);
    url.searchParams.set('make', selectedMake);
    url.searchParams.set('model', selectedModel);
    url.searchParams.set('inStock', inStockOnly ? 'true' : 'false');
    url.searchParams.set('sort', sortBy);
    window.history.replaceState({}, '', url);
    
    // Filter products
    let filteredProducts = screenProtectorData.filter(product => {
        // Filter by make
        if (selectedMake !== 'all' && product.make !== selectedMake) return false;
        
        // Filter by model
        if (selectedModel !== 'all' && product.deviceValue !== selectedModel) return false;
        
        // Filter by stock
        if (inStockOnly && !product.inStock) return false;
        
        return true;
    });
    
    // Sort products
    filteredProducts.sort((a, b) => {
        switch (sortBy) {
            case 'price-asc':
                return a.price - b.price;
            case 'price-desc':
                return b.price - a.price;
            case 'rating-desc':
                return b.rating - a.rating;
            case 'date-desc':
                return b.dateAdded - a.dateAdded;
            case 'popularity':
                // For demo purposes, we'll use rating as a proxy for popularity
                return b.rating - a.rating;
            default:
                return 0;
        }
    });
    
    // Display filtered products
    displayProducts(filteredProducts);
    
    // Update the results count
    const countElement = document.querySelector('.results-count .count');
    if (countElement) {
        countElement.textContent = filteredProducts.length;
    }
    
    // Update page title and meta description based on filters
    updateMetaDescription(selectedMake, selectedModel);
    updatePageTitle(selectedMake, selectedModel);
}

// This function displays product data in the table
function displayProducts(products) {
    const tableBody = document.querySelector('.results-table tbody');
    if (!tableBody) return;
    
    // Clear existing rows
    tableBody.innerHTML = '';
    
    if (products.length === 0) {
        // Show placeholder message if no products
        const placeholderRow = document.createElement('tr');
        placeholderRow.className = 'placeholder-row';
        placeholderRow.innerHTML = `
            <td colspan="8" class="placeholder-message">
                No products found matching your filters
            </td>
        `;
        tableBody.appendChild(placeholderRow);
    } else {
        // Add product rows
        products.forEach(product => {
            const row = document.createElement('tr');
            
            // Add stock status class
            if (!product.inStock) {
                row.classList.add('out-of-stock');
            }
            
            // Add structured data attributes for better SEO
            row.setAttribute('itemscope', '');
            row.setAttribute('itemtype', 'https://schema.org/Product');
            
            row.innerHTML = `
                <td class="col-brand">
                    <span itemprop="brand" itemscope itemtype="https://schema.org/Brand">
                        <meta itemprop="name" content="${product.brand}">
                        ${product.brand}
                    </span>
                </td>
                <td class="col-price">
                    <span itemprop="offers" itemscope itemtype="https://schema.org/Offer">
                        <meta itemprop="priceCurrency" content="USD">
                        <meta itemprop="price" content="${product.price}">
                        <meta itemprop="availability" content="${product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock'}">
                        $${product.price.toFixed(2)}
                    </span>
                </td>
                <td class="col-quantity">${product.quantity}</td>
                <td class="col-material">${product.material}</td>
                <td class="col-rating">
                    <span itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating">
                        <meta itemprop="ratingValue" content="${product.rating}">
                        <meta itemprop="bestRating" content="5">
                        <meta itemprop="worstRating" content="1">
                        <meta itemprop="ratingCount" content="100">
                        ${product.rating.toFixed(1)}
                    </span>
                </td>
                <td class="col-link">
                    <a href="${product.link}" target="_blank" rel="noopener" itemprop="url">
                        Visit Website
                    </a>
                </td>
            `;
            
            tableBody.appendChild(row);
        });
    }
}

// Helper function to generate star rating HTML
function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let starsHTML = '';
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    // Add half star if needed
    if (halfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

// This function would be used to fetch price history data and render a chart
function loadPriceHistory(productId) {
    // In a real implementation, this would fetch price history data and render a chart
    console.log('Loading price history for product:', productId);
}
