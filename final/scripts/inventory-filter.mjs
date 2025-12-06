// Import your buildCards function and inventory data
import { buildCards } from './cards-n-modals.mjs';
import { inventory } from './fetchers.mjs';
import { getSavedVehicles } from './check-saved.mjs';



// Remove all cards
export function clearCards() { // Clear existing cards
    const cardsContainer = document.getElementById('inventory-cards');
    cardsContainer.innerHTML = '';
}



// New Build Cards function with filtering
export function filterAndBuildCards(type) {
    clearCards(); // Clear existing cards first
    let filtered = inventory; // Start with full inventory

    if (type === 'saved') { // If 'saved' filter is selected. In the main file, with the click event, the id of the clicked element is passed as type. So if the saved button is clicked, the id 'saved' is passed here.
        filtered = getSavedVehicles(); // Use the imported function to get saved vehicles. Checks the "saved" array in localStorage and returns the vehicle objects from inventory that match those IDs.
        if (filtered.length === 0) { // If no saved vehicles found in localStorage, show a message and return
            const cardsContainer = document.getElementById('inventory-cards');
            cardsContainer.innerHTML = '<span class="no-vehicles-message">No saved vehicles found.</span>';
            return;
        }
    }
    else if (type && type !== 'all') { // Similarly, if the type is not 'all' and is defined, filter by body style based on the clicked button's id which is passed as type.
        filtered = inventory.filter(vehicle => vehicle.bodyStyle.toLowerCase() === type); // access vehicle.bodyStyle, convert to lowercase, and compare to the type. If they match, include in filtered array.
    }
    buildCards(filtered); // Build cards with the filtered data
}