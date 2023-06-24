function copyCode() {
  const codeElement = document.querySelector('.code code');
  const codeText = codeElement.innerText.trim();

  const tempInput = document.createElement('textarea');
  tempInput.value = codeText;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  const copyNotification = document.getElementById('copyNotification');
  copyNotification.style.display = 'inline-block';
  setTimeout(function() {
    copyNotification.style.display = 'none';
  }, 2000);
}
