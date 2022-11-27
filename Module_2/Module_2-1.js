'use strict';

const lista = [];

const n1= prompt("Give number 1");
lista.unshift(n1);
const n2= prompt("Give number 2");
lista.unshift(n2);
const n3= prompt("Give number 3");
lista.unshift(n3);
const n4= prompt("Give number 4");
lista.unshift(n4);
const n5= prompt("Give number 5");
lista.unshift(n5);


for (const i of lista){
  console.log(i)
}
