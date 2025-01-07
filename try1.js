
document.getElementById('loginForm').addEventListener('submit', function (event) {
  // Get the username from the input field
  const username = document.getElementById('username').value;

  // Store the username in localStorage
  localStorage.setItem('username', username);

  // Allow form submission
  setTimeout(function () {
    window.location.href = 'second.html'; // Redirect to the second HTML page
  }, 1000); // Delay to ensure form submission
});
