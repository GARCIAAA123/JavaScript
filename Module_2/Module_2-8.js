'use strict';
const list = ['Johnny','DeeDee','Joey','Marky']
function concat(list) {
  let merge = '';
  for (let i of list){
    merge += i
  }
  document.getElementById('target').innerHTML = merge;
}
concat(list)