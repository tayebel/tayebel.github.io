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

// Add copy button functionality
document.addEventListener('DOMContentLoaded', () => {
  const codeContainers = document.querySelectorAll('.code-container');
  codeContainers.forEach((container) => {
    const copyButton = document.createElement('button');
    copyButton.classList.add('copy-button');
    copyButton.innerHTML = '<i class="fas fa-copy"></i>';
    copyButton.addEventListener('click', copyCode);
    container.querySelector('.code-header').appendChild(copyButton);
  });
});
