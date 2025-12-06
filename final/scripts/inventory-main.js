import { filterAndBuildCards } from './inventory-filter.mjs';

// On page load, show all cards
filterAndBuildCards('all');

// Set up filter buttons
document.getElementById('inventory-filter').addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        const type = e.target.id; // e.g., 'sedan', 'suv', etc.
        filterAndBuildCards(type);
        // Optionally, update active class
        document.querySelectorAll('#inventory-filter a').forEach(a => a.classList.remove('active'));
        e.target.classList.add('active');
    }
});

// Set up sort buttons
document.getElementById('inventory-sort').addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        const order = e.target.id === 'sort-price-asc' ? 'ascending' : 'descending';
        sortAndBuildCards(order);
        // Optionally, update active class
        document.querySelectorAll('#inventory-sort a').forEach(a => a.classList.remove('active'));
        e.target.classList.add('active');
    }
});
