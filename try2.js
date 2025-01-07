window.onload = function () {
  setTimeout(function () {
    // Hide the loading screen
    document.getElementById("loading").style.display = "none";

    // Show the main content
    document.getElementById("content").style.display = "block";
  }, 5000); // 5000ms = 5 seconds
};
// Retrieve the username from localStorage
const username = localStorage.getItem('username');

// Check if username exists and display it
if ( isNaN(username)) {
  const congMsg = document.getElementById('congMsg'); // Note: Fix the spelling from "massage" to "message" if necessary
  congMsg.textContent = `Welcome  ${username}`;
}
else {
  congMsg.textContent = `Welcome`;
}

//To Redirect To Instagram
function redirect() {

  const instagramAppUrl = "instagram://direct";
  const fallbackUrl = "https://www.instagram.com/direct/";

  // Open Instagram app
  const start = Date.now();
  window.location.href = instagramAppUrl;

  // Fallback to browser if the app is not installed
  setTimeout(() => {
      if (Date.now() - start < 2000) {
          window.location.href = fallbackUrl;
      }
  }, 1500);
}
