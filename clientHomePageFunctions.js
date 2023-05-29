let cc1Points = 5600;
let cc2Points = 400;
let cc3Points = 14000;
let acc1balance = 19432;
let acc2balance = 43239;
let acc3balance = 79524;

console.log(153);

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

function viewCCs() {
  hideAll();
  var yourccsText = document.querySelector(".your-cc-text");
  var ccLabel = document.querySelectorAll(".cc-label");
  yourccsText.style.display = "block";
  for (let i = 0; i < ccLabel.length; i++)
    ccLabel[i].style.display = "inline-block";
}

function hideAll() {
  //   var yourAccountsText = document.querySelector(".your-accounts-text");
  //   var accsLabel = document.querySelectorAll(".account-label");
  //   yourAccountsText.style.display = "none";
  //   for (let i = 0; i < accsLabel.length; i++)
  //     accsLabel[i].style.display = "none";
  //   let accountDetails = document.getElementById("account-details");
  //   accountDetails.style.display = "none";
  //   let ccDetails = document.getElementById("cc-details");
  //   ccDetails.style.display = "none";
  //   var yourccsText = document.querySelector(".your-cc-text");
  //   var ccLabel = document.querySelectorAll(".cc-label");
  //   yourccsText.style.display = "none";
  //   for (let i = 0; i < ccLabel.length; i++) ccLabel[i].style.display = "none";
  //   var accsLabel = document.querySelectorAll(".account-label-redeem");
  //   for (let i = 0; i < accsLabel.length; i++)
  //     accsLabel[i].style.display = "none";
  //   let redeemaccount = document.getElementById("choose-account-redeem");
  //   redeemaccount.style.display = "none";
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}

function showAccountDetails(number) {
  let accountId = document.getElementById("account-id");
  let accountDetails = document.getElementById("account-details");
  let accountBalance = document.getElementById("account-balance");
  let accountType = document.getElementById("account-type");
  accountDetails.style.visibility = "visible";

  accountId.textContent = number;
  if (number === 123) {
    accountBalance.textContent = acc1balance;
    accountType.textContent = "Saving Account";
  } else if (number === 853) {
    accountBalance.textContent = acc2balance;
    accountType.textContent = "Checking Account";
  } else {
    accountBalance.textContent = acc3balance;
    accountType.textContent = "Current Account";
  }
}

function showCCDetails(number) {
  let redeemaccount = document.getElementById("choose-account-redeem");
  redeemaccount.style.visibility = "hidden";
  let ccId = document.getElementById("cc-id");
  let ccDetails = document.getElementById("cc-details");
  let ccBalance = document.getElementById("cc-balance");
  let ccType = document.getElementById("cc-points");
  let cc1Button = document.getElementById("redeem-button1");
  let cc2Button = document.getElementById("redeem-button2");
  let cc3Button = document.getElementById("redeem-button3");
  ccDetails.style.visibility = "visible";
  var accsLabel = document.querySelectorAll(".account-label-redeem");
  for (let i = 0; i < accsLabel.length; i++)
    accsLabel[i].style.visibility = "hidden";

  ccId.textContent = number;
  if (number === 603) {
    ccBalance.textContent = "709.79";
    ccType.textContent = cc1Points;
    cc1Button.style.display = "inline-block";
    cc2Button.style.display = "none";
    cc3Button.style.display = "none";
  } else if (number === 319) {
    ccBalance.textContent = "941";
    ccType.textContent = cc2Points;
    cc1Button.style.display = "none";
    cc2Button.style.display = "inline-block";
    cc3Button.style.display = "none";
  } else {
    ccBalance.textContent = "63453";
    ccType.textContent = cc3Points;
    cc1Button.style.display = "none";
    cc2Button.style.display = "none";
    cc3Button.style.display = "inline-block";
  }
}

function redeemPoints(number) {
  let chooseacc = document.getElementById("choose-account-redeem");
  chooseacc.style.visibility = "visible";
  var accsLabel = document.querySelectorAll(".account-label-redeem");
  for (let i = 0; i < accsLabel.length; i++)
    accsLabel[i].style.visibility = "visible";
  let redeem11 = document.getElementById("account-label-redeem11");
  let redeem12 = document.getElementById("account-label-redeem12");
  let redeem13 = document.getElementById("account-label-redeem13");
  let redeem21 = document.getElementById("account-label-redeem21");
  let redeem22 = document.getElementById("account-label-redeem22");
  let redeem23 = document.getElementById("account-label-redeem23");
  let redeem31 = document.getElementById("account-label-redeem31");
  let redeem32 = document.getElementById("account-label-redeem32");
  let redeem33 = document.getElementById("account-label-redeem33");
  if (number === 1) {
    redeem11.style.display = "inline-block";
    redeem12.style.display = "inline-block";
    redeem13.style.display = "inline-block";
    redeem21.style.display = "none";
    redeem22.style.display = "none";
    redeem23.style.display = "none";
    redeem31.style.display = "none";
    redeem32.style.display = "none";
    redeem33.style.display = "none";
  } else if (number === 2) {
    redeem11.style.display = "none";
    redeem12.style.display = "none";
    redeem13.style.display = "none";
    redeem21.style.display = "inline-block";
    redeem22.style.display = "inline-block";
    redeem23.style.display = "inline-block";
    redeem31.style.display = "none";
    redeem32.style.display = "none";
    redeem33.style.display = "none";
  } else {
    redeem11.style.display = "none";
    redeem12.style.display = "none";
    redeem13.style.display = "none";
    redeem21.style.display = "none";
    redeem22.style.display = "none";
    redeem23.style.display = "none";
    redeem31.style.display = "inline-block";
    redeem32.style.display = "inline-block";
    redeem33.style.display = "inline-block";
  }
}

function redeemPointsToAcc(number) {
  if (cc1Points === 0 && (number === 11 || number === 12 || number === 13)) {
    alert("ALREADY REDEEMED POINTS");
    return;
  }
  if (cc2Points === 0 && (number === 21 || number === 22 || number === 23)) {
    alert("ALREADY REDEEMED POINTS");
    return;
  }
  if (cc3Points === 0 && (number === 31 || number === 32 || number === 33)) {
    alert("ALREADY REDEEMED POINTS");
    return;
  }

  if (number == 11) {
    cc1Points = 0;
    acc1balance += 600;
    showCCDetails(603);
    alert("600 EGP were cashed back to your account 123");
  }
  if (number == 12) {
    cc1Points = 0;
    acc2balance += 600;
    showCCDetails(603);
    alert("600 EGP were cashed back to your account 853");
  }
  if (number == 13) {
    cc1Points = 0;
    acc3balance += 600;
    showCCDetails(603);
    alert("600 EGP were cashed back to your account 934");
  }
  if (number == 21) {
    cc2Points = 0;
    acc1balance += 50;
    showCCDetails(319);
    alert("50 EGP were cashed back to your account 123");
  }
  if (number == 22) {
    cc2Points = 0;
    acc2balance += 50;
    showCCDetails(319);
    alert("50 EGP were cashed back to your account 853");
  }
  if (number == 23) {
    cc2Points = 0;
    acc3balance += 50;
    showCCDetails(319);
    alert("50 EGP were cashed back to your account 934");
  }
  if (number == 31) {
    cc3Points = 0;
    acc1balance += 1600;
    showCCDetails(734);
    alert("1600 EGP were cashed back to your account 123");
  }
  if (number == 32) {
    cc3Points = 0;
    acc2balance += 1600;
    showCCDetails(734);
    alert("1600 EGP were cashed back to your account 853");
  }
  if (number == 33) {
    cc3Points = 0;
    acc3balance += 1600;
    showCCDetails(734);
    alert("1600 EGP were cashed back to your account 934");
  }
}

function showTransferFields() {
  var transferOption = document.getElementById("transfer-option").value;

  var amountField = document.getElementById("amount-field");
  var bankAccountField = document.getElementById("bank-account-field");
  var bankNameField = document.getElementById("bank-name-field");
  var countryField = document.getElementById("country-field");

  // Hide all fields initially
  amountField.style.visibility = "hidden";
  bankAccountField.style.visibility = "hidden";
  bankNameField.style.visibility = "hidden";
  countryField.style.visibility = "hidden";
  console.log(transferOption);

  if (transferOption === "own") {
    amountField.style.visibility = "visible";
    amountField.placeholder = "Own Account Amount";
  } else if (transferOption === "internal") {
    amountField.style.visibility = "visible";
    bankAccountField.style.visibility = "visible";
    amountField.placeholder = "Internal Amount";
    bankAccountField.placeholder = "Internal Bank Account";
  } else if (transferOption === "domestic") {
    amountField.style.visibility = "visible";
    bankAccountField.style.visibility = "visible";
    bankNameField.style.visibility = "visible";
    amountField.placeholder = "Domestic Amount";
    bankAccountField.placeholder = "Domestic Bank Account";
    bankNameField.placeholder = "Domestic Bank Name";
  } else if (transferOption === "international") {
    amountField.style.visibility = "visible";
    bankAccountField.style.visibility = "visible";
    bankNameField.style.visibility = "visible";
    countryField.style.visibility = "visible";
    amountField.placeholder = "International Amount";
    bankAccountField.placeholder = "International Bank Account";
    bankNameField.placeholder = "International Bank Name";
    countryField.placeholder = "International Country";
  }
}

function doTransfer() {
  var transferOption = document.getElementById("transfer-option").value;

  // Validate fields based on transfer option
  var amountField = document.getElementById("amount-field");
  var bankAccountField = document.getElementById("bank-account-field");
  var bankNameField = document.getElementById("bank-name-field");
  var countryField = document.getElementById("country-field");

  var isMissingInfo = false;
  if (transferOption === "") isMissingInfo = true;
  else if (transferOption === "own" && amountField.value === "") {
    isMissingInfo = true;
  } else if (
    transferOption === "internal" &&
    (amountField.value === "" || bankAccountField.value === "")
  ) {
    isMissingInfo = true;
  } else if (
    transferOption === "domestic" &&
    (amountField.value === "" ||
      bankAccountField.value === "" ||
      bankNameField.value === "")
  ) {
    isMissingInfo = true;
  } else if (
    transferOption === "international" &&
    (amountField.value === "" ||
      bankAccountField.value === "" ||
      bankNameField.value === "" ||
      countryField.value === "")
  ) {
    isMissingInfo = true;
  }

  if (isMissingInfo) {
    alert("Missing information. Please fill in all the required fields.");
  } else {
    alert("Transfer done");
    document.getElementById("transfer-option").selectedIndex = 0;

    // Hide all fields
    document.getElementById("amount-field").style.visibility = "hidden";
    document.getElementById("amount-field").value = "";
    document.getElementById("bank-account-field").style.visibility = "hidden";
    document.getElementById("bank-account-field").value = "";
    document.getElementById("bank-name-field").style.visibility = "hidden";
    document.getElementById("bank-name-field").value = "";
    document.getElementById("country-field").style.visibility = "hidden";
    document.getElementById("country-field").value = "";
    // Reset the form or perform other actions here
  }
}

function viewTransactions() {
  hideAll();
}

function showTransactionPanel() {
  // Show the overlay
  document.getElementById("overlay").style.display = "block";

  // Show the transaction panel
  document.getElementById("transactionPanel").style.display = "block";
}

// Add event listener to hide the transaction panel when clicking outside

function showAccounts() {
  window.location.href = "viewBankAccTrans.html";
}

function showCCTransactions() {
  window.location.href = "viewCreditCardTrans.html";
}

function goToccApp() {
  window.location.href = "creditCardApplication.html";
}

function goToSetR() {
  window.location.href = "set-remainder.html";
}

function goToccBills() {
  window.location.href = "viewCCBills.html";
}
