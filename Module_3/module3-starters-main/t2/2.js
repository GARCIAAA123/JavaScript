'use strict';

const list = ["First", "Second", "Third"];
for (let i = 0; i < list.length; i++){
  const li = document.getElementById('target');
  let n = `${list[i]} item`;
  let x = li.appendChild(document.createTextNode(n));
  document.getElementById('target').appendChild(li);
}

const item = document.getElementById('target').childNodes[1];
item.classList.add('my-item');


