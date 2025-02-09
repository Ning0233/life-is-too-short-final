const users = JSON.parse(localStorage.getItem('users')) || [];
document.getElementById('loginButton').addEventListener('click', function() {
  window.location.href = 'login.html'; // Navigate to the login page
});
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting and refreshing the page
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Find the user from stored users
  const user = users.find(user => user.email === email && user.password === password);
  
  if (!user) {
    alert('Invalid email or password!'); // If no match, alert the user
    return;
  }
  
  alert('Login successful!'); // If match found, show success message
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
