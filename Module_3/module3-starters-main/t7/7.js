'use strict';

const image = document.querySelector('img')

function mouseOver(){
  image.src = "img/picB.jpg"
}

function mouseOut(){
  image.src = "img/picA.jpg"
}


document.getElementById('trigger').addEventListener("mouseenter",mouseOver);
document.getElementById('trigger').addEventListener("mouseleave",mouseOut);