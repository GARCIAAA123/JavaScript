const name = prompt("Enter your name");
const h1  = 'Gryffindor';
const h2 = 'Slytherin';
const h3 = 'Hufflepuff';
const h4 = 'Ravenclaw';

let number;
number = Math.floor(Math.random()*4)+1;
console.log(number);

if (number === 1){
  document.querySelector('#target').innerHTML = name + " you are " + h1;
}
else if (number === 2){
  document.querySelector('#target').innerHTML = name + " you are " + h2;
}
else if (number === 3){
  document.querySelector('#target').innerHTML = name + " you are " + h3;
}
else{
  document.querySelector('#target').innerHTML = name + " you are " + h4;
}