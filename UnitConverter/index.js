/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.querySelector("#input-el");
const lengthEl = document.querySelector("#length-el");
const volumeEl = document.querySelector("#volume-el");
const massEl = document.querySelector("#mass-el");
const convertBtn = document.querySelector("#convert-btn");

convertBtn.addEventListener("click", function convert() {
  const num = inputEl.value;
  lengthEl.textContent = `${num} meter = ${convertToFeet(num).toFixed(3)} feet |
    ${num} feet = ${convertToMeter(num).toFixed(3)} meter`;

  volumeEl.textContent = `${num} liter = ${convertToGallon(num).toFixed(
    3
  )} gallon |
    ${num} gallon = ${convertToLiter(num).toFixed(3)} liter`;

  massEl.textContent = `${num} kilogram = ${convertToPound(num).toFixed(
    3
  )} pound |
    ${num} pound = ${convertToKilogram(num).toFixed(3)} kilogram`;
});

function convertToFeet(meter) {
  return meter * 3.281;
}

function convertToMeter(feet) {
  return feet / 3.281;
}

function convertToGallon(liter) {
  return liter * 0.264;
}

function convertToLiter(gallon) {
  return gallon / 0.264;
}

function convertToPound(kilogram) {
  return kilogram * 2.204;
}

function convertToKilogram(pound) {
  return pound / 2.204;
}
