// Main JavaScript file for ScreenGuardian - Screen Protector Price Comparison

document.addEventListener('DOMContentLoaded', function() {
    // Initialize filter functionality
    initializeFilters();
});

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
    // This function would normally filter and sort the product data
    // Since we're not populating with real data, this is just a placeholder
    console.log('Filters applied');
    
    // Update the results count (just for demonstration)
    const countElement = document.querySelector('.results-count .count');
    if (countElement) {
        // In a real implementation, this would be the actual filtered count
        countElement.textContent = '0';
    }
}

// This function would be used to display product data in the table
function displayProducts(products) {
    // In a real implementation, this would populate the table with product data
    console.log('Displaying products:', products);
}

// This function would be used to fetch price history data and render a chart
function loadPriceHistory(productId) {
    // In a real implementation, this would fetch price history data and render a chart
    console.log('Loading price history for product:', productId);
}
