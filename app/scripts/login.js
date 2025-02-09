const users = JSON.parse(localStorage.getItem('users')) || [];
document.getElementById('loginButton').addEventListener('click', function() {
  window.location.href = 'login.html'; // Navigate to the login page
});
document.getElementById('loginButton').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting and refreshing the page
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Find the user from stored users
  const user = users.find(user => user.email === email && user.password === password);
  
  if (!user) {
    alert('Invalid email or password!'); // If no match, alert the user
    return;
  }
  document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('loginButton');
  
    // Check if the button has been clicked before
    const isButtonClicked = localStorage.getItem('loginButtonClicked');
  
    if (isButtonClicked) {
      loginButton.style.display = 'none'; // Hide the button if it was clicked before
    }
  
    loginButton.addEventListener('click', function() {
      this.classList.add('hidden');
      document.getElementById('loginButton').remove(); 
      document.getElementById('notification-prompt').style.display = 'none';
      // Add any additional actions you want to perform on button click here
    });
  });
  alert('Login successful!'); // If match found, show success message
  document.getElementById('loginButton').style.display = 'none'; // Hide the signup button
  window.location.href = 'index.html'; // Redirect to index.html
});

// This function is for displaying stored users, probably for testing purposes
function displayStoredUsers() {
  const userList = document.getElementById('user-list');
  userList.innerHTML = ''; // Clear previous user list

  // Loop through the users and create list items
  users.forEach(user => {
    const listItem = document.createElement('li');
    listItem.textContent = `Email: ${user.email}, Password: ${user.password}`;
    userList.appendChild(listItem);
  });


  document.getElementById('stored-users').style.display = 'block'; // Show the stored users section
}
