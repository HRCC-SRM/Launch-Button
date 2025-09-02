// Configuration - Redirect to HRCC website
const REDIRECT_URL = 'https://hrcc-srm.vercel.app/';

// Get the redirect button
const redirectButton = document.getElementById('redirectBtn');

// Function to redirect to the website
function redirectToWebsite() {
    window.location.href = REDIRECT_URL;
}

// Add click event listener to the redirect button
redirectButton.addEventListener('click', redirectToWebsite);
