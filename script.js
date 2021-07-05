console.log("Welcome to Coulette");
ChangeRandomColor();

let button = document.querySelector("button");

button.addEventListener("click", ChangeRandomColor);

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

function colorOutput() {
  const header = document.querySelector("header");
  let colorOutput = header.style.backgroundColor;
  console.log("output: " + colorOutput);
}

function ChangeRandomColor() {
  let bgColor = randomColor();
  const header = document.querySelector("header");
  header.style.backgroundColor = bgColor;
  //console.log(bgColor);
  const ausgabe = document.querySelector("p");
  console.log(ausgabe);
  ausgabe.innerHTML = "Farbe: " + bgColor;
  colorOutput();
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
