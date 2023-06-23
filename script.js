function copyCode() {
  const codeElement = document.querySelector('.code code');
  const range = document.createRange();
  range.selectNode(codeElement);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand('copy');

  const copyNotification = document.getElementById('copyNotification');
  copyNotification.style.display = 'inline-block';
  setTimeout(function() {
    copyNotification.style.display = 'none';
  }, 2000);
}
