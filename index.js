console.log("Hello")
let boxContainer=document.getElementById("box-container");
let button = document.getElementById("click-button");

const addButton=document.getElementById("add-box");

function randomRange(min, max){
      return Math.floor(Math.random()*(max-min)+min);
}

function addBox(){
    let boxDiv =document.createElement("div");
boxDiv.classList.add("box");
boxDiv.style.top=`${randomRange(10,90)}vh`;
boxDiv.style.left=`${randomRange(10,90)}vw`;

boxContainer.appendChild(boxDiv);
}
addButton.addEventListener('click',addBox);

const removeButton=document.getElementById("remove-box");

function removeBox(){
    let boxes=document.getElementsByClassName("box");
    console.log(boxes);
    if(boxes.length>0){
    boxes[Math.floor(Math.random()*boxes.length)].remove();
    }
}
removeButton.addEventListener('click',removeBox);