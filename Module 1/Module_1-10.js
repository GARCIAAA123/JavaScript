const dice = parseInt(prompt("How many number of dice?"));
const diceNumber = parseInt(prompt("What sum do you want?"));
let odd = 0;

for (let i = 0; i<=10000; i++){
  let roll = 0;
  for (let d = 1; d<=dice; d++){
    roll += Math.floor(Math.random()*6)+1;
    if (roll===diceNumber){
      odd++
    }
  }
}
probability = (odd/10000)*100
document.querySelector('#target').innerHTML = `Probability to get sum${diceNumber} with ${dice} dice is ${probability.toFixed(2)}%`;