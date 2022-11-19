const dice = parseInt(prompt("Number of dice rolls"));
let sum = 0;
for (let i = 0; i<dice ; i++){
  let roll = Math.floor(Math.random()* 6)+1;
  console.log(roll);
  sum += roll;
}
document.querySelector('#target').innerHTML = `The sum is ${sum}`;