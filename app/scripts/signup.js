const users = JSON.parse(localStorage.getItem('users')) || [];

document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  const userExists = users.some(user => user.email === email);
  if (userExists) {
    alert('User already exists!');
    return;
  }

  users.push({ email, password });
  localStorage.setItem('users', JSON.stringify(users));
  alert('Sign up successful!');
  window.location.href = 'index.html';
});

function displayStoredUsers() {
  const userList = document.getElementById('user-list');
  userList.innerHTML = '';
  users.forEach(user => {
    const listItem = document.createElement('li');
    listItem.textContent = `Email: ${user.email}, Password: ${user.password}`;
    userList.appendChild(listItem);
  });
  document.getElementById('stored-users').style.display = 'block';
}
