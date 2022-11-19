const answer = confirm('Should I calculate the square root?');
console.log(answer);
let root
if (answer === true){
  let sqr  = parseFloat(prompt("Type a number"));
    if (sqr <0){
      document.querySelector('#target').innerHTML = "The square root of negative number cannot be calculated";
      }
    else if(sqr >=0){
      root = sqr**(1/2);
      document.querySelector('#target').innerHTML = `The square root of ${sqr} is ${root}`;
    }
}
else{
  document.querySelector('#target').innerHTML = "The square root is not calculated";
}