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

function register() {
  console.log("ALO");
  let username = document.getElementById("regun").value;
  let pass = document.getElementById("regpass").value;
  let mail = document.getElementById("regmail").value;
  if (username === "KareemEladl") alert("USER ALREADY EXISTS");
  else if (username === "MaryamFawzy") alert("USER ALREADY EXISTS");
  else if (username === "NadaIbrahim") alert("USER ALREADY EXISTS");
  else if (mail === "123") alert("USER ALREADY EXISTS");
  else if (mail === "456") alert("USER ALREADY EXISTS");
  else if (username === "KareemVI")
    window.location.href = "visuallyImpaired.html";
  else {
    console.log(username);
    console.log(pass);
    alert(
      "REGISTERATION SUCCESSFULL \n WELCOME TO SE404 BANK, YOUR ACCOUNT WILL BE ACTIVE WITHIN 24 HOURS"
    );
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
recognition.onresult = async function (event) {
  const transcript = event.results[event.results.length - 1][0].transcript;
  console.log("Recognized speech:", transcript);
  let text = transcript + "";
  console.log(text);
  const pattern =
    /(username|user name|user)\s+(john|joan|jones|Jones|John|Joan|zone|Zone|Joel)\s+(password|basswood|buzzword|buzzwords|baswold|bassword|bassford|basford|pasford|basold|bassold|bathroom|Bosworth|pass|bus|bass)\s+(hello)/;
  console.log(pattern.test(text));

  let loading = document.getElementById("loader");
  loading.style.display = "block";
  let overlay = document.getElementById("overlay");
  overlay.style.display = "flex";
  await delay(2000);
  let goToVI = document.getElementById("gotoVI");
  history.pushState({}, "", "index.html");
  console.log(goToVI);
  await delay(1000);
  goToVI.click();

  //   if (pattern.test(text)) {
  //     window.location.href = "visuallyImpaired.html";
  //   } else {
  //     console.log("WRONG USERNAME OR PASSWORD");
  //   }
  // You can process the transcript further or perform actions based on the recognized speech
};

// Start speech recognition
recognition.start();

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
