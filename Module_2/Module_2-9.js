'use strict';
const list = [2,7,4];
function even(check_even) {
  const list_even = [];
  for (let i of check_even) {
    if (i % 2 === 0) {
        list_even.push(i);
    }
  }
  console.log(list);
  console.log(list_even);
}
even(list);