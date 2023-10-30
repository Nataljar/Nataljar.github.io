
/*********************  HERO SECTION **************************/ 

// Background Images changes every 5 seconds
function changeBg() {
    const bgImages = [
    'url("images/header_1.jpg")',
    'url("images/header_2.jpg")',
    'url("images/header_3.jpg")',
  ]

  const header = document.querySelector(".header-image-container");
  const bg = bgImages[Math.floor(Math.random()* bgImages.length)];
  header.style.backgroundImage = bg; 

   // Check the screen width and add the appropriate CSS class
  if (window.innerWidth <= 650) {
    header.classList.add("mobile");
  } else {
    header.classList.remove("mobile");
  }

}

setInterval(changeBg, 5000);

/*********************  GALERIE  **************************/ 

// Scroll to Top - Gallery

const goTopBtn = document.querySelector('.to-top');

window.addEventListener('scroll', checkHeight)

function checkHeight(){
  if(window.scrollY > 700) {
    goTopBtn.style.display = "flex"
  } else {
    goTopBtn.style.display = "none"
  }
}

if (goTopBtn) {
goTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})
}



/*********************  Kontaktformular  **************************/ 

// Validierung der Eingabefelder (Quelle: https://www.youtube.com/watch?v=CYlNJpltjMM&ab_channel=JavaScriptAcademy)

const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const successMessage = document.querySelector(".success-message");
const submitButton = document.getElementById("submit");
 
form.addEventListener("submit", event => {

  event.preventDefault();             // Funktion um das Abesenden und Neuladen der Seite zu verhindern

  validateInputs();               // Funktion um die Eingabefelder zu validieren

  if (formIsValid()) {            // Bedingung, wenn das Formular korrekt ist, wird dieses abgeschickt und neugeladen
   /* form.submit(); */
  
    successMessage.style.display="block";
    submitButton.click(); // THIS NEEDS TO BE CHECKED IF REALLY CORRECT - FOR NOW NO ERROR MESSAGES!!
   
  }  
});


function formIsValid() {        // Funktion, um zu prüfen, ob das Formular korrekt befüllt ist
  const errorInput = form.querySelector(".input-control.error");
  return !errorInput;
}


const setError = (element, message) => {                        // Funktion, um einen Fehlerzustand für ein Eingabefeld zu setzen ("element" sthet für das Eingabefeld und "message" enthält die Fehlermeldung)
  const inputControl = element.parentElement;                   // hier wird das übergeordnete Element des Eingabefelds abgerufen und der Variablen inputControl zugewiesen. Das übergeordnete Element ist der Container, der das Eingabefeld und die Fehlermeldung umgibt.
  const errorDisplay = inputControl.querySelector(".error");    // hier wird die Fehlermeldung im HTML-Element mit der Klasse "error" gesucht, das sich innerhalb des inputControl-Elements befindet. Die Funktion querySelector sucht das erste Element, das zur angegebenen CSS-Klasse passt, und gibt es zurück. Das gefundene Element wird der Variablen errorDisplay zugewiesen.

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
}

const setSuccess = element => {                                 // Funktion, um einen Fehlerzustand für ein Eingabefeld zu setzen
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
}

const isValidEmail = email => {                                  // Funktion prüft, ob E-Mail Adresse gültig ist 
  let regEx =/^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  return regEx.test(String(email).toLowerCase());               // Die Funktion gibt true zurück, wenn die E-Mail Adresse gültig ist, andernfalls false.
}

const validateInputs = () => {       // Funktion um die Eingabefelder zu validieren
const nameValue = nameInput.value.trim();                       // Zuerst werden die Werte der Eingabefelder abgerufen und Leerzeichen am Anfang und Ende entfernt
const emailValue = emailInput.value.trim();
const messageValue = messageInput.value.trim();

if (nameValue === "") {
  setError(nameInput, "Gib deinen vollständigen Namen ein");
} else {
  setSuccess(nameInput);
}

if (emailValue === "") {
  setError(emailInput, "Gib deine E-Mail Adresse ein");
} else if (!isValidEmail(emailValue)) {
  setError(emailInput, "Gib eine gültige E-Mail Adresse ein");
} else {
  setSuccess(emailInput);
}

if (messageValue === "") {
  setError(messageInput, "Verfasse eine Nachricht");
} else {
  setSuccess(messageInput);
}

// Sobald in das Eingabefeld geklickt wird, wird die Fehlermeldung entfernt
nameInput.addEventListener("focus", () => {
  removeError(nameInput);
});

emailInput.addEventListener("focus", () => {
  removeError(emailInput);
});

messageInput.addEventListener("focus", () => {
  removeError(messageInput);
});

function removeError(inputElement) {
  const inputControl = inputElement.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.remove("error");
}

};



