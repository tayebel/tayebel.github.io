// Copy code function
function copyCode(event) {
  const codeElement = event.target.parentNode.parentNode.querySelector('.code code');
  const code = codeElement.innerText;

  navigator.clipboard.writeText(code)
    .then(() => {
      showCopyNotification(event.target);
    })
    .catch((error) => {
      console.error('Failed to copy code: ', error);
    });
}

// Show copy notification
function showCopyNotification(button) {
  const copyNotification = button.parentNode.querySelector('.copy-notification');
  copyNotification.style.display = 'inline-block';
  setTimeout(() => {
    copyNotification.style.display = 'none';
  }, 1500);
}

// Add copy button functionality
document.addEventListener('DOMContentLoaded', () => {
  const copyButtons = document.querySelectorAll('.copy-button');
  copyButtons.forEach((button) => {
    button.addEventListener('click', copyCode);
  });
});
