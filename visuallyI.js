window.addEventListener("load", async function () {
  // Your code here
  speakText(
    "WELCOME BACK JOHN, Please sit in quiet place and say your command loud and clear"
  );
  console.log("oo");
  await delay(4000);
  recognition.start();
  // Add your method calls or other code that should run when the window loads
});

const recognition = new window.webkitSpeechRecognition();

// Set properties for the recognition
recognition.lang = "en-US"; // Set the language
recognition.continuous = true; // Set continuous recognition

recognition.onstart = function () {
  console.log("Speech recognition started.");
};

recognition.onend = function () {
  console.log("Speech recognition ended.");
};

recognition.onresult = async function (event) {
  const transcript = event.results[event.results.length - 1][0].transcript;
  console.log("Recognized speech:", transcript);
  let text = transcript + "";
  console.log(text);
  const patterntransactions =
    /(view|View|views|Views)\s+(transactions|transaction|trans action)/;
  // console.log(pattern.test(text));
  const patternLoans =
    /\s*((view|View|views|Views)\s+(loans|loan|loanz|lon|loon))|(violence|violenz|violense)\s*/;

  const viewBankAccountPattern =
    /\s*(view|View|views|Views)\s+(account|bank account|bank accounts|accounts|accountz)\s*/;

  const doTransferpattern = /\s*(transfer)\s+(money|maney|many|mony)\s*/;

  const report =
    /\s*(report|reboot|repoot)\s+(problem|a problem|air problem|problems)\s*|we bought a problem/;

  const viewCCpattern =
    /\s*(view|View|views|Views)\s+(Credit|credit|credeet|crediit)\s*(Card|card|cards|Cards)\s*/;
  if (patterntransactions.test(text)) {
    speakText(
      "Transaction 1 at the supermarket, Transaction 1 amount : 500 pounds, Transaction 1 date : fifth of may 2023"
    );
    speakText(
      "Transaction 2 at mcdonalds, Transaction 2 amount : 700 pounds, Transaction 2 date : seventeenth of may 2023"
    );
    speakText(
      "Transaction 3 at the gas station, Transaction 3 amount : 500 pounds, Transaction 3 date : first of june 2023"
    );
    // await delay(5000);
  } else if (patternLoans.test(text)) {
    speakText(
      "Loan 1 type is Car Loan, Loan 1 amount : 500000 pounds, Loan 1 Next installment Due date : fifth of June 2023"
    );
    speakText(
      "Loan 2 type is Personal Loan, Loan 2 amount : 500000 pounds, Loan 2 Next installment Due date : ninth of June 2023"
    );
  } else if (viewBankAccountPattern.test(text)) {
    speakText(
      "Account 1 Number is 123, Account 1 balance : 100000 pounds, Account 1 type : Saving account"
    );
    speakText(
      "Account 2 Number is 456, Account 2 balance : 50000 pounds, Account 2 type : checking account"
    );
  } else if (doTransferpattern.test(text)) {
    speakText("One of our team will contact you within 2 hours");
  } else if (report.test(text)) {
    speakText("One of our team will contact you within 2 hours");
  } else if (viewCCpattern.test(text)) {
    speakText(
      "Credit Card 1 Number is 5094 0492, Credit Card 1 balance : 19132 pounds, Credit Card 1 Points : 1000 points"
    );
    speakText(
      "Credit Card 2 Number is 9043 8913, Credit Card 2 balance : 9342 pounds, Credit Card 2 Points : 500 points"
    );
  }

  // Process the transcript further or perform actions based on the recognized speech
};

// Start speech recognition

function speakText(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  // Trigger speech synthesis on page loads
  window.speechSynthesis.speak(speech);
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

window.onpopstate = function (event) {
  window.location.href = "index.html";
};
