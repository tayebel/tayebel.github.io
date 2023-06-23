document.addEventListener('DOMContentLoaded', function() {
  var clipboard = new ClipboardJS('.copy-button');

  clipboard.on('success', function(e) {
    showCopyNotification(e.trigger.nextElementSibling);
    e.clearSelection();
  });

  clipboard.on('error', function(e) {
    console.error('Failed to copy code: ', e);
  });
});

function showCopyNotification(notification) {
  notification.style.opacity = 1;

  setTimeout(function() {
    notification.style.opacity = 0;
  }, 2000);
}
