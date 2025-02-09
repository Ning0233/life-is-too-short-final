// scripts/messages.js
document.addEventListener('DOMContentLoaded', function() {
    const messages = [
      "Stop being lazy and do something useful.",
      "Why are you wasting your life staring at this?",
      "Every second you waste is a testament to your lack of ambition.",
      "Procrastination is just a fancy word for being lazy.",
      "You're wasting your potential. Do something meaningful."
    ];
  
    function getRandomMessage() {
      const randomIndex = Math.floor(Math.random() * messages.length);
      return messages[randomIndex];
    }
  
    function displayMessage() {
      const messageContainer = document.getElementById('message-container');
      messageContainer.textContent = getRandomMessage();
    }
  
    displayMessage();
  });