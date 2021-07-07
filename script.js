console.log("Welcome to Coulette");

// Initialisierung der globalen BG-Variablen + Array + erster Hintergrund
const colors = [];

let currentColor = null;
currentColor = changeRandomColor();

let button = document.querySelector("#addColor");
let button2 = document.querySelector("#saveColor");
let button3 = document.querySelector("#delColor");

button.addEventListener("click", changeRandomColor);
button2.addEventListener("click", saveColor);
//button3.addEventListener("click", delColor);

buttonStatus();

// Löscht den letzten Array-Eintrag
function delColor() {
  document.getElementById("ausgabe").remove();
  colors.pop();
  buttonStatus();
}

function delThisColor() {
  const parent = document.activeElement.parentNode;
  const delThisColor = parent.getAttribute("data-color");
  console.log(delThisColor);

  //array-Vergleich: Farbe enthalten -> Stelle wird gesucht, Array-Eintrag und Elternelement gelöscht
  if (colors.includes(delThisColor)) {
    for (i = 0; i < colors.length; i++) {
      console.log(delThisColor === colors[i]);
      if (colors[i] === delThisColor) {
        colors.splice(i, 1);
        parent.remove();
      }
      console.log(colors.length + colors);
    }
    buttonStatus();
  }

  buttonStatus();
}

function saveColor() {
  buttonStatus();
  // colorOutput wird die zu speichernde Farbe

  if (colors.includes(currentColor) === false) {
    colors.push(currentColor);
    const cList = document.querySelector("#colorList");
    let colorOutput = currentColor;

    // ein neuer Listeneintrag mit der Hintergrund coloroutput und Beschriftung wird erzeugt
    const para = document.createElement("li");
    const newButton = document.createElement("button");

    const node = document.createTextNode(colorOutput);
    const buttonNode = document.createTextNode("delete");
    newButton.appendChild(buttonNode);
    para.appendChild(node);
    para.appendChild(newButton);

    para.style.backgroundColor = colorOutput;
    para.style.fontSize = "2rem";
    para.setAttribute("data-color", colorOutput);

    para.id = "ausgabe";

    newButton.className = "myButton";
    newButton.id = "delEntryColor";
    newButton.style.marginLeft = "3rem";
    newButton.addEventListener("click", delThisColor);
    //newButton.style.float = "right";

    // es wird gesichert, dass die neue Farbe an erster Stelle der gespeicherten Farben steht.

    const element = document.querySelector("#colorList");
    const child = document.getElementById("ausgabe");
    element.insertBefore(para, child);
  }
}

function buttonStatus() {
  const button2 = document.querySelector("#saveColor");
  if (colors.includes(currentColor)) {
    button2.setAttribute("disabled", "");
  } else {
    button2.removeAttribute("disabled");
  }
}

function switchColor() {
  const color = "hotpink";
  const header = document.querySelector("header");
  const currentBackgroundColor = header.style.backgroundColor.toLowerCase();
  let bgColor = header.style.backgroundColor;
  if (currentBackgroundColor === color) {
    header.style.backgroundColor = "lemonchiffon";
  } else {
    header.style.backgroundColor = color;
  }
}

function changeRandomColor() {
  currentColor = randomColor();
  const header = document.querySelector("header");
  header.style.backgroundColor = currentColor;
  const ausgabe = document.querySelector("p");
  ausgabe.textContent = "Farbe: " + currentColor;
  ausgabe.style.fontSize = "1.25rem";
  buttonStatus();
  return currentColor;
}

function randomColor() {
  const red = randomHexNumber();
  const green = randomHexNumber();
  const blue = randomHexNumber();
  return ("#" + red + green + blue).toUpperCase();
}

function randomNumber(min, max) {
  const num = Math.random() * (max - min + 1) + min;
  return Math.floor(num);
}

function randomHexNumber() {
  let hex = randomNumber(0, 255).toString(16);
  if (hex.length === 1) {
    hex = "0" + hex;
  }
  return hex;
}
