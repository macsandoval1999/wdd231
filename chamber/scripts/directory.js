// // This function is used to fetch the JSON data and populate the web page. It is defined as an asynchronous function using the async keyword. async functions allow the use of the await keyword, which makes it easier to work with promises. This function uses the Fetch API to get the JSON data from a URL, then processes that data to update the content of the web page. It calls two helper functions, populateHeader and populateHeroes, to update different parts of the page with the fetched data.
async function populate() {
    // Here our JSON is fetched from a file on the server. Here we store the URL of the file.
    const requestURL =
        "https://macsandoval1999.github.io/wdd231/chamber/data/members.json";
    // Here we create a new request object using the URL we just defined.
    const request = new Request(requestURL);
    // Here we send the request using the fetch() method. This method returns a promise that resolves to the Response to that request, whether it is successful or not. await is used to wait for the promise to resolve.
    const response = await fetch(request);
    // Here we use the json() method of the Response object to extract the JSON body content from the response. This also returns a promise, so we use await again.
    const members = await response.json();

    // Now that we have the JSON data, we can use it to populate our web page.
    populateMembers(members);
}

// This function populates the main section of the web page with information about each member from the JSON data. It takes a single parameter, obj, which is expected to be the JSON object containing the members.
function populateMembers(obj) {
    const section = document.querySelector("section"); // Selects the <section> element in the HTML document.
    const members = obj.members; // Retrieves the array of members from the JSON object.
    console.log(members);
    
    // Loops through each member in the members array.
    for (const member of members) {
        const card = document.createElement("section"); // Creates a new <section> element for member card.
        const logo = document.createElement("img"); // Creates a new <img> element for member logo.
        const address = document.createElement("p"); // Creates a new <p> element for member address.
        const phone = document.createElement("p"); // Creates another new <p> element for member phone number.
        const website = document.createElement("a"); // Creates a new <a> element for member website.

        logo.src = member.logo; // Set the logo for the member.
        logo.alt = member.name + " Logo"; // Set the alt text for the logo.
        address.textContent = member.address; // Sets the text content of the address <p> element to the member's address.
        phone.textContent = member.phone; // Sets the text content of the phone <p> element to the member's phone number.
        website.href = member.website; // Sets the href attribute of the website <a> element to the member's website URL.
        website.textContent = "Visit Website"; // Sets the text content of the website <a> element to "Visit Website".

        const superPowers = hero.powers; // Retrieves the array of superpowers for the current hero.

        // Loops through each superpower and creates a list item for it.
        for (const power of superPowers) {
            const listItem = document.createElement("li"); // Creates a new <li> element.
            listItem.textContent = power; // Sets the text content of the <li> element to the current superpower.
            myList.appendChild(listItem); // Appends the <li> element to the <ul> element.
        }

        myArticle.appendChild(myH2); // Appends the <h2> element to the <article> element.
        myArticle.appendChild(myPara1); // Appends the first <p> element to the <article> element.
        myArticle.appendChild(myPara2); // Appends the second <p> element to the <article> element.
        myArticle.appendChild(myPara3); // Appends the third <p> element to the <article> element.
        myArticle.appendChild(myList); // Appends the <ul> element to the <article> element.

        section.appendChild(myArticle); // Appends the <article> element to the <section> element.
    }
}

// Calls the populate function to start the process of fetching data and populating the page.
populate();