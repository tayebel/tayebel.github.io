function copyCode() {
  const codeElement = document.querySelector('.code code');
  const codeText = codeElement.innerText;

  navigator.clipboard.writeText(codeText).then(function() {
    const copyNotification = document.getElementById('copyNotification');
    copyNotification.style.display = 'inline-block';
    setTimeout(function() {
      copyNotification.style.display = 'none';
    }, 2000);
  }).catch(function(error) {
    console.error('Failed to copy code: ', error);
  });
}