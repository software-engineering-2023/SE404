function Login() {
  let username = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  if (username === "KareemEladl" && pass === "123")
    window.location.href = "homePage.html";
  else if (username === "MaryamFawzy" && pass === "123")
    window.location.href = "bankerPage.html";
  else if (username === "NadaIbrahim" && pass === "123")
    window.location.href = "adminPage.html";
  else if (username === "KareemVI" && pass === "123")
    window.location.href = "visuallyImpaired.html";
  else {
    console.log(username);
    console.log(pass);
    alert("WRONG USERNAME OR PASSWORD!!!!");
  }
}

const recognition = new window.webkitSpeechRecognition();

// Set properties for the recognition
recognition.lang = "en-US"; // Set the language
recognition.continuous = true; // Set to false for single utterance recognition

// Event handler for when speech recognition starts
recognition.onstart = function () {
  console.log("Speech recognition started.");
};

// Event handler for when speech recognition ends
recognition.onend = function () {
  console.log("Speech recognition ended.");
};

// Event handler for when speech is recognized
recognition.onresult = function (event) {
  const transcript = event.results[event.results.length - 1][0].transcript;
  console.log("Recognized speech:", transcript);
  let text = transcript + "";
  console.log(text);
  const pattern =
    /(username|user name)\s+(john|joan|jones|Jones|John|Joan|zone|Zone)\s+(password|basswood|buzzword|buzzwords|baswold|bassword)\s+(hello)/;
  console.log(pattern.test(text));

  if (pattern.test(text)) {
    window.location.href = "visuallyImpaired.html";
  } else {
    console.log("WRONG USERNAME OR PASSWORD");
  }
  // You can process the transcript further or perform actions based on the recognized speech
};

// Start speech recognition
recognition.start();
