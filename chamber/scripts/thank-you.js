// Get query string from URL
const urlParams = new URLSearchParams(window.location.search);

// Extract values from query string
const firstName = urlParams.get('firstName');
const lastName = urlParams.get('lastName');
const orgTitle = urlParams.get('orgTitle');
const email = urlParams.get('email');
const phone = urlParams.get('phone');
const orgName = urlParams.get('orgName');
const businessType = urlParams.get('businessType');
const businessDescription = urlParams.get('businessDescription');
const membershipLevel = urlParams.get('membershipLevel');
const formattedTimestamp = new Date(urlParams.get('timestamp')).toLocaleString();

// Populate thank you page with extracted values
document.getElementById('thank-you-message').innerHTML = `
    <h2>Thank You, ${firstName} ${lastName}!</h2>
    <br>
    <p>We have received your request for <strong>${orgName}</strong> to join the Chamber of Commerce as a <strong>${membershipLevel}</strong> member.</p>
    <p>We look forward to working with you and supporting your business in the <strong>${businessType}</strong> industry.</p>
    <br>
    <p>One of our representatives will contact you as soon as possible at <strong>${email}</strong> or <strong>${phone}</strong>.</p>
    <br>
    <div class="submitted-info">
    <h3>Submission Details:</h3>
    <br>
    <span><strong>Organization Title:</strong> ${orgTitle}</span>
    <span><strong>Business Type:</strong> ${businessType}</span>
    <span><strong>Business Description:</strong> <br>${businessDescription}</span>
    <span><strong>Submitted on:</strong> ${formattedTimestamp}</span>
    </div>
    <br>
    <button onclick="window.location.href='index.html'">Return to Home Page</button>
`;
