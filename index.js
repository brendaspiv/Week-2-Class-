const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const container = document.getElementById("container");

const dramaImgArray = ["maid2.jpg", "static.jpg"];

function changeDramaImg() {
  const randomItemFromArray = Math.floor(Math.random() * dramaImgArray.length);
  //document.body.style.backgroundImage = "url('maid2.jpg')";
  container.style.backgroundImage = `url("maid2.jpg")`; // `url(${dramaImgArray[0].thumbnail})`;
  // name.innerHTML = dramaImgArray[randomItemFromArray].name;]
  console.log("changeDramaImg executed");
}
// document.addEventListener("DOMContentLoaded", changeBackgroundImage());
btn1.addEventListener("click", changeDramaImg);
