let drama_btn = document.querySelector("#drama_btn");
let comdey_btn = document.querySelector("#comedy_btn");
let thriller_btn = document.querySelector("#thriller_btn");
let christmas_btn = document.querySelector("#christmas_btn");

// const dramaImgArray = ["handmaid.jpeg", "maisel.jpeg", "soho.jpeg"];

drama_btn.addEventListener("click", () => {
  document.body.style.backgroundImage = "url(handmaid.jpeg)";
});
comedy_btn.addEventListener("click", () => {
  document.body.style.backgroundImage = "url(maisel.jpeg)";
});
thriller_btn.addEventListener("click", () => {
  document.body.style.backgroundImage = "url(soho.jpeg)";
});
christmas_btn.addEventListener("click", () => {
  document.body.style.backgroundImage = "url(grinch.jpeg)";
});

// function changeDramaImg() {
//   drama_btn.addEventListener("click", changeDramaImg);
// }
