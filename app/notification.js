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
    window.getRandomMessage = getRandomMessage; 
    displayMessage();
  });
document.addEventListener('DOMContentLoaded', function () {
    if (!('Notification' in window)) {
        console.log('This browser does not support notifications.');
        return;
    }


    
    function showNotificationPrompt() {
        const prompt = document.getElementById('notification-prompt');
        prompt.style.display = 'block';
    }

    function hideNotificationPrompt() {
        const prompt = document.getElementById('notification-prompt');
        prompt.style.display = 'none';
    }

    function showDeniedPopup() {
        const popup = document.getElementById('notification-denied');
        popup.style.display = 'block';
    }

    function hideDeniedPopup() {
        const popup = document.getElementById('notification-denied');
        popup.style.display = 'none';
    }

    function checkNotificationPermission() {
        if (Notification.permission === 'granted') {
            hideNotificationPrompt();
            showNotification('Shame!', getRandomMessage());
        } else if (Notification.permission === 'denied') {
            showDeniedPopup();
        } else {
            showNotificationPrompt();
        }
    }

    function showNotification(title, body) {
        const options = {
            body: body,
            icon: 'icon.png' // Optional: Add an icon for the notification
        };
        new Notification(title, options);
    }

    document.getElementById('allow-button').addEventListener('click', function () {
        Notification.requestPermission().then(function (permission) {
            if (permission === 'granted') {
                hideNotificationPrompt();
                showNotification('Shame!', getRandomMessage());
            } else if (permission === 'denied') {
                showDeniedPopup();
            }
        });
    });

    document.getElementById('close-popup').addEventListener('click', function () {
        hideDeniedPopup();
    });

    checkNotificationPermission();
});