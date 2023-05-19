function openAccount() {
  window.location.href = "openAccount.html";
}
function showNotifications() {
  // Get the notifications menu element
  var notificationsMenu = document.getElementById("notifications-dropdown");
  console.log("A");
  var computedStyle = window.getComputedStyle(notificationsMenu);
  var displayValue = computedStyle.getPropertyValue("display");
  console.log(displayValue);
  // If the menu is hidden, show it
  if (displayValue === "none") {
    console.log("ALO");
    notificationsMenu.style.display = "block";
  }
  // If the menu is already visible, hide it
  else {
    console.log("aa");
    notificationsMenu.style.display = "none";
  }
}
function hideNotifications() {
  var notificationsMenu = document.getElementById("notifications-dropdown");
  notificationsMenu.style.display = "none";
}

// Add a "click" event listener to the document object
document.addEventListener("click", function (event) {
  console.log("HOLA");
  // Check if the click event occurred outside of the notifications menu
  var notificationsMenu = document.getElementById("notifications-dropdown");
  var notificationsIcon = document.getElementById("notification-icon");
  console.log(notificationsIcon);
  console.log(notificationsMenu);
  if (
    !notificationsMenu.contains(event.target) &&
    event.target != notificationsIcon
  ) {
    // If the click occurred outside of the notifications menu, hide it
    hideNotifications();
  }
});
