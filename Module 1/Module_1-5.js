const year = parseFloat('Enter a year');

if (year%400===0){
  document.querySelector('#target').innerHTML = 'It is a leap year';
}
else if (year%4===0 && year%100===0){
  document.querySelector('#target').innerHTML = 'It is a leap year';
}
else{
  document.querySelector('#target').innerHTML = 'It is not a leap year';
}