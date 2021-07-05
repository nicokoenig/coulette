console.log("Welcome to Coulette");
testColor = changeRandomColor();
console.log(testColor);

let button = document.querySelector("#addColor");
let button2 = document.querySelector("#saveColor");
let button3 = document.querySelector("#delColor");

button.addEventListener("click", changeRandomColor);
button2.addEventListener("click", saveColor);
button3.addEventListener("click", delColor);

function delColor() {
  document.getElementById("ausgabe").remove();
}

function saveColor() {
  // colorOutput wird die zu speichernde Farbe
  const main = document.querySelector("main");
  const header = document.querySelector("header");
  let colorOutput = testColor;

  // ein neues Element p mit der Hintergrund coloroutput und Beschriftung wird erzeugt
  const para = document.createElement("p");
  const node = document.createTextNode(colorOutput);
  para.appendChild(node);
  main.appendChild(para);
  para.style.backgroundColor = colorOutput;
  para.id = "ausgabe";

  // es wird gesichert, dass die neue Farbe an erster Stelle der gespeicherten Farben steht.

  const element = document.querySelector("main");
  const child = document.getElementById("ausgabe");
  element.insertBefore(para, child);
}

function switchColor() {
  const color = "hotpink";
  const header = document.querySelector("header");
  const currentBackgroundColor = header.style.backgroundColor.toLowerCase();
  let bgColor = header.style.backgroundColor;
  //console.log(bgColor);
  if (currentBackgroundColor === color) {
    header.style.backgroundColor = "lemonchiffon";
  } else {
    header.style.backgroundColor = color;
  }
}

function changeRandomColor() {
  testColor = randomColor();
  const header = document.querySelector("header");
  header.style.backgroundColor = testColor;
  //console.log(bgColor);
  const ausgabe = document.querySelector("p");
  //console.log(ausgabe);
  ausgabe.innerHTML = "Farbe: " + testColor;
  //colorOutput();
  return testColor;
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
