// let button = document.getElementById("button");
// console.log(button);

// let slider = document.getElementById("slider");
// console.log(slider);
// let sliderValue = document.getElementById("slider-value");

// function updateSlider() {
//   console.log("yes it reads me");
//   let value = slider.value;
//   console.log(value);
//   sliderValue.innerHTML = `<p>${value}</p>`;
//   sliderValue.style.fontSize = `${value}px`;
//   sliderValue.style.border = `${value / 3}px solid rgb(${value / 2 + 20},${
//     value / 5 + 50
//   },${value})`;
// }
// slider.addEventListener("input", updateSlider);

function changeColor() {
  let red = document.getElementById(`rangeRed`).value;
  let green = document.getElementById(`rangeGreen`).value;
  let blue = document.getElementById(`rangeBlue`).value;
  let color = `rgb(` + red + `,` + green + `,` + blue + `)`;
  document.body.style.backgroundColor = color;
  document.getElementById(`colorOutput`).innerHTML = `:` + color;
}
document.getElementById(`rangeRed`).addEventListener(`input`, changeColor);
document.getElementById(`rangeGreen`).addEventListener(`input`, changeColor);
document.getElementById(`rangeBlue`).addEventListener(`input`, changeColor);
