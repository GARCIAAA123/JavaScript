'use strict';

const number = prompt("Type the number of participants");
const player = [];
let list1 = document.getElementById("list");
for (let i = 1; i <= number;  i++ ){
  let name = prompt("Name of the player")
  player.push(name)
  player.sort()
} 
player.forEach((item) =>{
      let li = document.createElement("li");
      li.innerText = item;
      list1.appendChild(li)
    })
