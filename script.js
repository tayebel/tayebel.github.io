document.addEventListener('DOMContentLoaded', function() {
  var codeBlocks = document.querySelectorAll('pre');

  codeBlocks.forEach(function(block) {
    var copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.textContent = 'Copy';

    block.parentNode.insertBefore(copyButton, block);
  });

  var clipboard = new ClipboardJS('.copy-button', {
    target: function(trigger) {
      return trigger.nextElementSibling;
    }
  });

  clipboard.on('success', function(e) {
    e.clearSelection();
    showCopyNotification(e.trigger);
  });

  clipboard.on('error', function(e) {
    console.error('Failed to copy code: ', e);
  });
});

function showCopyNotification(button) {
  var notification = document.createElement('span');
  notification.className = 'copy-notification';
  notification.textContent = 'Copied!';
  button.parentNode.insertBefore(notification, button);

  setTimeout(function() {
    button.parentNode.removeChild(notification);
  }, 2000);
}
