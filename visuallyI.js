window.addEventListener("load", async function () {
  // Your code here
  speakText("WELCOME BACK JOHN");
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

recognition.onresult = function (event) {
  const transcript = event.results[event.results.length - 1][0].transcript;
  console.log("Recognized speech:", transcript);
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
