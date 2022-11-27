'use strict';

let list = []
while (true) {
  let number = Number(prompt("Enter a number"));
  if (list.includes(number)){
    alert("This number is already in the list")
    break;
  }
  else{
    list.push(number)
  }
}

list.sort()
console.log(list)
