$(document).ready(function () {
  new ClipboardJS('.copy-button', {
    text: function (trigger) {
      var codeElement = $(trigger)
        .closest('.code-container')
        .find('code');
      return codeElement.text();
    }
  });

  $('.copy-button').on('click', function () {
    var copyNotification = $(this)
      .closest('.code-container')
      .find('.copy-notification');
    copyNotification.addClass('show');
    setTimeout(function () {
      copyNotification.removeClass('show');
    }, 1500);
  });
});
