'use strict';

let number_of_dogs = 6;
let list = [];
let list1 = document.getElementById("dog");
for (let i = 0; i < number_of_dogs; i++){
  const name = prompt("Name of the dog")
  list.push(name)
  list.sort()
  list.reverse()
}
list.forEach((item) =>{
      let li = document.createElement("li");
      li.innerText = item;
      list1.appendChild(li)
    })