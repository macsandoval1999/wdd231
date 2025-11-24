const timeStamp = document.getElementById('timestamp'); // Get the element with ID 'timestamp'
const date = new Date(); // Create a new Date object with the current date and time
timeStamp.value = date.toISOString(); // Set the value of the timestamp element to the current date and time in ISO format