'use strict';

let list = []
while (true) {
  let number = parseInt(prompt("Enter a number"));
  if (number !== 0){
    list.push(number)
  }
  else{
    break
  }
}
list.sort()
console.log(list.reverse())