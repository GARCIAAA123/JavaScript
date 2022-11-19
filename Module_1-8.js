const startYear = prompt('Enter the starting year');
const endYear =  prompt('Enter the ending year');
const target = document.querySelector('#target');

for (let year = startYear; year<=endYear; year++){
  if (year % 400 === 0 || year % 4 === 0 && year % 100 !==0){
    target.innerHTML += `<li>${year}</li>`;
    console.log(year);
  }
}