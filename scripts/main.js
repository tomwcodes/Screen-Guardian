// Main JavaScript file for DashCamPrice - Dash Cam Price Comparison

// Add meta description dynamically based on selected filters
function updateMetaDescription(make, model) {
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) return;
    
    if (make !== 'all' && model !== 'all') {
        const makeText = document.querySelector(`#make option[value="${make}"]`).textContent;
        const modelText = document.querySelector(`#model option[value="${model}"]`).textContent;
        metaDescription.content = `Compare ${makeText} ${modelText} dash cam prices. Find the best deals on dash cams with features like night vision, parking mode, and 4K resolution.`;
    } else if (make !== 'all') {
        const makeText = document.querySelector(`#make option[value="${make}"]`).textContent;
        metaDescription.content = `Compare ${makeText} dash cam prices for all models. Find the best deals on dash cams with features like night vision, parking mode, and 4K resolution.`;
    } else {
        metaDescription.content = "Compare dash cam prices for various brands and models. Find the best deals on front-facing, dual-channel, and 4K dash cams with night vision and parking mode.";
    }
}

// Update page title based on selected filters
function updatePageTitle(make, model) {
    if (make !== 'all' && model !== 'all') {
        const makeText = document.querySelector(`#make option[value="${make}"]`).textContent;
        const modelText = document.querySelector(`#model option[value="${model}"]`).textContent;
        document.title = `${makeText} ${modelText} Dash Cams | DashCamPrice`;
    } else if (make !== 'all') {
        const makeText = document.querySelector(`#make option[value="${make}"]`).textContent;
        document.title = `${makeText} Dash Cams | DashCamPrice`;
    } else {
        document.title = "DashCamPrice - Compare Dash Cam Prices | Find the Best Deals";
    }
}

// Dummy data for dash cams
const dashCamData = [
    {
        id: 1,
        brand: "Nextbase",
        model: "622GW",
        deviceValue: "nextbase-622gw",
        make: "nextbase",
        price: 329.99,
        resolution: "4K",
        features: "Night Vision, GPS, WiFi, Parking Mode",
        rating: 4.8,
        inStock: true,
        link: "https://example.com/nextbase-622gw",
        dateAdded: new Date(2025, 1, 15)
    },
    {
        id: 2,
        brand: "Nextbase",
        model: "522GW",
        deviceValue: "nextbase-522gw",
        make: "nextbase",
        price: 229.99,
        resolution: "1440p",
        features: "Alexa Built-in, GPS, WiFi",
        rating: 4.6,
        inStock: true,
        link: "https://example.com/nextbase-522gw",
        dateAdded: new Date(2025, 2, 1)
    },
    {
        id: 3,
        brand: "Nextbase",
        model: "322GW",
        deviceValue: "nextbase-322gw",
        make: "nextbase",
        price: 149.99,
        resolution: "1080p",
        features: "WiFi, GPS, Emergency SOS",
        rating: 4.5,
        inStock: true,
        link: "https://example.com/nextbase-322gw",
        dateAdded: new Date(2025, 0, 20)
    },
    {
        id: 4,
        brand: "Garmin",
        model: "Dash Cam 67W",
        deviceValue: "garmin-dash-cam-67w",
        make: "garmin",
        price: 259.99,
        resolution: "1440p",
        features: "180° Field of View, Voice Control, GPS",
        rating: 4.7,
        inStock: true,
        link: "https://example.com/garmin-dash-cam-67w",
        dateAdded: new Date(2025, 1, 10)
    },
    {
        id: 5,
        brand: "Garmin",
        model: "Dash Cam 57",
        deviceValue: "garmin-dash-cam-57",
        make: "garmin",
        price: 229.99,
        resolution: "1440p",
        features: "140° Field of View, Voice Control, GPS",
        rating: 4.6,
        inStock: true,
        link: "https://example.com/garmin-dash-cam-57",
        dateAdded: new Date(2025, 2, 5)
    },
    {
        id: 6,
        brand: "Thinkware",
        model: "U1000",
        deviceValue: "thinkware-u1000",
        make: "thinkware",
        price: 399.99,
        resolution: "4K",
        features: "Dual Channel, Super Night Vision, Parking Mode",
        rating: 4.9,
        inStock: false,
        link: "https://example.com/thinkware-u1000",
        dateAdded: new Date(2025, 1, 25)
    },
    {
        id: 7,
        brand: "BlackVue",
        model: "DR900X Plus",
        deviceValue: "blackvue-dr900x-plus",
        make: "blackvue",
        price: 449.99,
        resolution: "4K",
        features: "Cloud Connectivity, Dual Channel, Parking Mode",
        rating: 4.8,
        inStock: true,
        link: "https://example.com/blackvue-dr900x-plus",
        dateAdded: new Date(2025, 0, 5)
    },
    {
        id: 8,
        brand: "VIOFO",
        model: "A129 Pro Duo",
        deviceValue: "viofo-a129-pro-duo",
        make: "viofo",
        price: 249.99,
        resolution: "4K Front / 1080p Rear",
        features: "Dual Channel, WiFi, GPS, Parking Mode",
        rating: 4.5,
        inStock: true,
        link: "https://example.com/viofo-a129-pro-duo",
        dateAdded: new Date(2025, 2, 10)
    }
];

document.addEventListener('DOMContentLoaded', function() {
    // Initialize filter functionality
    initializeFilters();
    
    // Display all products initially
    displayProducts(dashCamData);
    
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
    
    dashCamData.forEach((product, index) => {
        schema.itemListElement.push({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Product",
                "name": `${product.brand} ${product.model} Dash Cam`,
                "description": `${product.resolution} dash cam with ${product.features}`,
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
    const sortBySelect = document.getElementById('sort-by');
    const dataSourceCom = document.getElementById('data-source-com');
    const dataSourceUk = document.getElementById('data-source-uk');
    
    // Add event listeners to filters
    if (makeFilter) makeFilter.addEventListener('change', applyFilters);
    if (modelFilter) modelFilter.addEventListener('change', applyFilters);
    if (sortBySelect) sortBySelect.addEventListener('change', applyFilters);
    
    // Data source radio buttons
    if (dataSourceCom) dataSourceCom.addEventListener('change', applyFilters);
    if (dataSourceUk) dataSourceUk.addEventListener('change', applyFilters);
    
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
        addModelOption(modelFilter, 'nextbase-622gw', 'Nextbase 622GW');
        addModelOption(modelFilter, 'nextbase-522gw', 'Nextbase 522GW');
        addModelOption(modelFilter, 'nextbase-322gw', 'Nextbase 322GW');
        addModelOption(modelFilter, 'garmin-dash-cam-67w', 'Garmin Dash Cam 67W');
        addModelOption(modelFilter, 'garmin-dash-cam-57', 'Garmin Dash Cam 57');
        addModelOption(modelFilter, 'thinkware-u1000', 'Thinkware U1000');
        addModelOption(modelFilter, 'blackvue-dr900x-plus', 'BlackVue DR900X Plus');
        addModelOption(modelFilter, 'viofo-a129-pro-duo', 'VIOFO A129 Pro Duo');
    } else if (selectedMake === 'nextbase') {
        addModelOption(modelFilter, 'nextbase-622gw', 'Nextbase 622GW');
        addModelOption(modelFilter, 'nextbase-522gw', 'Nextbase 522GW');
        addModelOption(modelFilter, 'nextbase-322gw', 'Nextbase 322GW');
    } else if (selectedMake === 'garmin') {
        addModelOption(modelFilter, 'garmin-dash-cam-67w', 'Garmin Dash Cam 67W');
        addModelOption(modelFilter, 'garmin-dash-cam-57', 'Garmin Dash Cam 57');
    } else if (selectedMake === 'thinkware') {
        addModelOption(modelFilter, 'thinkware-u1000', 'Thinkware U1000');
    } else if (selectedMake === 'blackvue') {
        addModelOption(modelFilter, 'blackvue-dr900x-plus', 'BlackVue DR900X Plus');
    } else if (selectedMake === 'viofo') {
        addModelOption(modelFilter, 'viofo-a129-pro-duo', 'VIOFO A129 Pro Duo');
    }
}

// Helper function to add model options
function addModelOption(selectElement, value, text) {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = text;
    selectElement.appendChild(option);
}

function applyFilters() {
    const makeFilter = document.getElementById('make');
    const modelFilter = document.getElementById('model');
    const sortBySelect = document.getElementById('sort-by');
    
    // Get all data source radio buttons
    const dataSourceRadios = document.querySelectorAll('input[name="data-source"]');
    let dataSource = 'amazon.com'; // Default
    for (const radio of dataSourceRadios) {
        if (radio.checked) {
            dataSource = radio.value;
            break;
        }
    }
    
    if (!makeFilter || !modelFilter || !sortBySelect) return;
    
    const selectedMake = makeFilter.value;
    const selectedModel = modelFilter.value;
    const sortBy = sortBySelect.value;
    
    // Update URL with filter parameters for better SEO and sharing
    const url = new URL(window.location);
    url.searchParams.set('make', selectedMake);
    url.searchParams.set('model', selectedModel);
    url.searchParams.set('sort', sortBy);
    url.searchParams.set('dataSource', dataSource);
    window.history.replaceState({}, '', url);
    
    // Filter products
    let filteredProducts = dashCamData.filter(product => {
        // Filter by make
        if (selectedMake !== 'all' && product.make !== selectedMake) return false;
        
        // Filter by model
        if (selectedModel !== 'all' && product.deviceValue !== selectedModel) return false;
        
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
            <td colspan="6" class="placeholder-message">
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
                        ${product.brand} ${product.model}
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
                <td class="col-resolution">${product.resolution}</td>
                <td class="col-features">${product.features}</td>
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

// Update the data source text in the footer
function updateDataSourceText(dataSource) {
    const footerText = document.querySelector('.footer-section p');
    if (!footerText) return;
    
    let text = footerText.innerHTML;
    
    // Replace Amazon reference with the selected data source
    if (dataSource === 'amazon.com') {
        text = text.replace(/Amazon\.co\.uk/g, 'Amazon.com');
    } else {
        text = text.replace(/Amazon\.com/g, 'Amazon.co.uk');
    }
    
    footerText.innerHTML = text;
}
