'use strict';

function roll() {
  let list = [];
  let list1 = document.getElementById("target");
  while (true) {
    let number = Math.floor(Math.random() * 6) + 1;
    if (number !== 6){
     list.push(number);
    }
    if (number === 6){
      console.log(list);
      list.forEach((item) =>{
      let li = document.createElement("li");
      li.innerText = item;
      list1.appendChild(li)
    })
      break;
   }
  }
}
roll()