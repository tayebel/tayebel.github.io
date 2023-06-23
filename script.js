function copyCode() {
    var code = document.getElementById("code").textContent;
    navigator.clipboard.writeText(code)
      .then(function() {
        showCopyNotification();
      })
      .catch(function(error) {
        console.error("Failed to copy code: ", error);
      });
  }
  
  function showCopyNotification() {
    var notification = document.createElement("div");
    notification.classList.add("copy-notification");
    notification.textContent = "Code copied!";
    document.body.appendChild(notification);
  
    setTimeout(function() {
      notification.style.display = "none";
      document.body.removeChild(notification);
    }, 2000);
  }
  