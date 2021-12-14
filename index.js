const drama_btn = document.getElementById("drama_btn");
// const comedy_btn = document.getElementById("comedy_btn");
// const container = document.getElementById("container");

// const dramaImgArray = ["maid2.jpg", "static.jpg", "cat.jpg"];

// const imageSrcArray = ["maid2.jpg", "static.jpg", "cat.jpg"];

// function changeDramaImg() {
//   const randomItemFromArray = Math.floor(Math.random() * dramaImgArray.length);
//   //document.body.style.backgroundImage = "url('maid2.jpg')";
//   container.style.backgroundImage = `url("maid2.jpg")`; // `url(${dramaImgArray[0].thumbnail})`;
//   // name.innerHTML = dramaImgArray[randomItemFromArray].name;]
//   console.log("changeDramaImg executed");
// }
// // document.addEventListener("DOMContentLoaded", changeBackgroundImage());
// drama_btn.addEventListener("click", () => {
//   document.body.style.backgroundImage = ("click", imageSrcArray);
// });
// //  changeDramaImg);
const imgPathArray = ["maid2.jpg", "cat.jpg", "static.jpg"];
function changeImg() {
  const randomImg = Math.floor(Math.random() * imgPathArray.length);

  container.style.backgroundImage = `url(${randomImg})`;
}

drama_btn.addEventListner("click", changeImg);
