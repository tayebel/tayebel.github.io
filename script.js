// Copy code function
function copyCode() {
  const codeElement = document.querySelector('.code code');
  const code = codeElement.innerText;

  navigator.clipboard.writeText(code)
    .then(() => {
      showCopyNotification();
    })
    .catch((error) => {
      console.error('Failed to copy code: ', error);
    });
}

// Show copy notification
function showCopyNotification() {
  const copyNotification = document.getElementById('copyNotification');
  copyNotification.style.display = 'block';
  setTimeout(() => {
    copyNotification.style.display = 'none';
  }, 1500);
}

// Initialize clipboard.js
const clipboard = new ClipboardJS('.copy-button', {
  text: function (trigger) {
    const codeElement = trigger.closest('.code-container').querySelector('code');
    return codeElement.innerText;
  }
});

// Handle copy success
clipboard.on('success', function (e) {
  showCopyNotification();
  e.clearSelection();
});

// Handle copy error
clipboard.on('error', function (e) {
  console.error('Failed to copy code: ', e.action);
});
