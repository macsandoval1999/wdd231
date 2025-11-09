// *********Fetch Data From network request*********

// Declare the URL to fetch data from
const requestURL = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json'; 

// Select the container element where the data will be displayed
const cards = document.querySelector('#cards');

// Function to fetch and display the prophet data
async function getProphetData() {
    // Create a fetch request to the specified URL and wait for the response. store it in a variable named 'response'
    const response = await fetch(requestURL);
    // Parse the JSON data from the response and store it in a variable named 'data'
    const data = await response.json();
    // Log the prophets data to console in tabular format. This helps in visualizing the data structure and with debugging. console.log would also work, but console.table provides a clearer view for arrays of objects.
    console.table(data.prophets);
    // Iterate over each prophet in the data.prophets array and call the displayProphets function. Note that you reference the prophets array within the data object, not the entire object. In other words access the data that you are wanting.
    displayProphets(data.prophets);
}

// Function to create and display prophet cards
function displayProphets(prophets) {
    
    // Loop through each prophet in the prophets array
    prophets.forEach((prophet) => {
        
        // Create a new section element to hold the prophet's information
        let card = document.createElement('section');
        
        // Create an h2 element for the prophet's full name
        let fullName = document.createElement('h2');
        // Create an img element for the prophet's portrait
        let portrait = document.createElement('img');
        let birthDate = document.createElement('p');
        let birthPlace = document.createElement('p');

        
        // Set the text content of the h2 element to the prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Set the text content for birth date
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;

        // Set the text content for birth place
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

        // Set the src and alt attributes of the img element
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        
        // Append the h2 and img elements to the section element
        card.appendChild(fullName);
        card.appendChild(birthDate);    
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        // Append the section element to the cards container
        cards.appendChild(card);
    });
}

// ************************MAIN CODE BLOCK**************************

// Call the function to fetch and display the prophet data
getProphetData();