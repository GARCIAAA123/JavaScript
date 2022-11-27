const num = prompt('Please enter a number');
const target = document.querySelector('#target');
let prime = true;
for (let i =2; i < num; i++){
  if (num % i === 0){
    prime = false;
    break;
  }
}
if (prime){
  target.innerHTML = `${sum} is a prime number`;
}
else {
  target.innerHTML = `${sum} is not a prime number`;
}