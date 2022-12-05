'use strict';

const target = document.getElementById("target");
const names = ['John', 'Paul', 'Jones'];

for(name of names){
  let element = document.createElement('li');
  element.textContent = name;
  target.appendChild(element);
}