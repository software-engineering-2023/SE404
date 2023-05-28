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

function viewAccounts() {
  hideAll();
  var yourAccountsText = document.querySelector(".your-accounts-text");
  var accsLabel = document.querySelectorAll(".account-label");
  console.log(accsLabel);
  yourAccountsText.style.display = "block";
  for (let i = 0; i < accsLabel.length; i++)
    accsLabel[i].style.display = "inline-block";
}

function hideAll() {
  var yourAccountsText = document.querySelector(".your-accounts-text");
  var accsLabel = document.querySelectorAll(".account-label");
  yourAccountsText.style.display = "none";
  for (let i = 0; i < accsLabel.length; i++)
    accsLabel[i].style.display = "none";

  let accountDetails = document.getElementById("account-details");
  accountDetails.style.display = "none";
}

function showAccountDetails(number) {
  let accountId = document.getElementById("account-id");
  let accountDetails = document.getElementById("account-details");
  let accountBalance = document.getElementById("account-balance");
  let accountType = document.getElementById("account-type");
  accountDetails.style.display = "block";

  accountId.textContent = number;
  if (number === 123) {
    accountBalance.textContent = "19432";
    accountType.textContent = "Saving Account";
  } else if (number === 853) {
    accountBalance.textContent = "42349";
    accountType.textContent = "Checking Account";
  } else {
    accountBalance.textContent = "79524";
    accountType.textContent = "Current Account";
  }
}

function viewTransactions() {
  hideAll();
}
