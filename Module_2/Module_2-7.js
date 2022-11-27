'use strict';
const x = parseInt(prompt("Enter a number"));
function roll(dice) {
  let list = [];
  let list1 = document.getElementById("target");
  while (true) {
    let number = Math.floor(Math.random() * dice) + 1;
    if (number !== dice){
     list.push(number)
    }
    if (number === dice){
    console.log(list)
    list.forEach((item) =>{
      let li = document.createElement("li");
      li.innerText = item;
      list1.appendChild(li)
    })
    break;
   }
  }
}
roll(x)
