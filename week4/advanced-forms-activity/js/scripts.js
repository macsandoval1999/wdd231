/* Once you fill out a form, the thank you pages url will show the data you submitted in the form.

For example:
http://127.0.0.1:5500/week4/advanced-forms-activity/thanks.html?first=Marco&last=Sandoval&phone=6779779777&email=hectorsmash%40smashburger.hamburger&ordinance=Sealing&date=2025-11-14&location=Provo+City+Center

Each key and value pair is separated by an equal sign (=) and each pair is separated by an ampersand (&).

Use JavaScript to capture the query string from the URL and log it to the console.
*/
/* ************************************************ */



// GET THE QUERY STRING FROM THE URL 
/* You access it with window.location.search */
/* ************************************************ */
console.log(window.location.search); /* Log the log the url in the window location search and confirm that it matches what is in the URL search. (ONLY DURING TESTING)*/

const myInfo = new URLSearchParams(window.location.search); // window.location.search references the url for the thank you page. Here we are storing it in a newly created URLSearchParams object to work with the query string

console.log(myInfo); /* Log the URLSearchParams object to the console. Confirm that it contains the same amount of key-value pairs from the query string. When you look at the object in the console, you will see several different methods you can use to work with the object. (ONLY DURING TESTING)*/



// EXAMPLES OF GETTING VALUES FROM THE URLSearchParams OBJECT
/* We're not really using these variables or capturing them for anything other than testing here. */
/* ************************************************ */
console.log("First Name: " + myInfo.get("first")); /* Log the value of the "first" key to the console. Confirm that it matches what was submitted in the form. (ONLY DURING TESTING)*/

console.log("Last Name: " + myInfo.get("last")); /* Log the value of the "last" key to the console. Confirm that it matches what was submitted in the form. (ONLY DURING TESTING)*/

console.log("Phone Number: " + myInfo.get("phone")); /* Log the value of the "phone" key to the console. Confirm that it matches what was submitted in the form. (ONLY DURING TESTING)*/
console.log("Email Address: " + myInfo.get("email")); /* Log the value of the "email" key to the console. Confirm that it matches what was submitted in the form. (ONLY DURING TESTING)*/

console.log("Ordinance: " + myInfo.get("ordinance")); /* Log the value of the "ordinance" key to the console. Confirm that it matches what was submitted in the form. (ONLY DURING TESTING)*/
console.log("Date: " + myInfo.get("date")); /* Log the value of the "date" key to the console. Confirm that it matches what was submitted in the form. (ONLY DURING TESTING)*/
console.log("Location: " + myInfo.get("location")); /* Log the value of the "location" key to the console. Confirm that it matches what was submitted in the form. (ONLY DURING TESTING)*/
/* ************************************************ */



// Real Usage
/* Now we will use the data from the URLSearchParams object to populate the thank you page with the data submitted in the form.
We have a div container with the ID of "results" where we will use the data.
*/
/* There are many ways to do this. Here is one way: */
document.getElementById("results").innerHTML = `
    <h2>Thank You, ${myInfo.get("first")} ${myInfo.get("last")}!</h2>
    <p>We have received your request for the <strong>${myInfo.get("ordinance")}</strong> ordinance.</p>
    <p>Your appointment is scheduled for <strong>${myInfo.get("date")}</strong> at the <strong>${myInfo.get("location")}</strong>.</p>
    <p>We will contact you shortly at <strong>${myInfo.get("phone")}</strong> or via email at <strong>${myInfo.get("email")}</strong> if we need any additional information.</p>
`;



/* REMEMBER TO REMOVE OR COMMENT OUT ANY TESTING LOGS BEFORE FINALIZING THE CODE */