'use strict';

const num_can = prompt('Please enter the amount of candidates');
const can_list = [];
for (let i = 0; i < num_can; i++) {
  const can_name = prompt(`Please enter the name for candidate ${i + 1}`).toLowerCase();
  let can = {
    name: can_name,
    votes: 0,
  };
  can_list.push(can);
}

const num_voters = prompt('Please enter the amount of voters');
for (let j = 0; j < num_voters; j++) {
  const vote = prompt(
      `Voter ${j + 1} - Please enter the name of the candidate you want to vote for.`).
      toLowerCase();
  can_list.forEach(can => {
    if (vote === can.name) {
      can.votes += 1;
    }
  });
}

can_list.sort((a, b) => b.votes - a.votes);

console.log(
    `The winner is ${can_list[0].name} with ${can_list[0].votes} votes.`);
console.log(`Results:`);
for (let a = 0; a < can_list.length; a++) {
  console.log(
      `${can_list[a].name}: ${can_list[a].votes} votes`);
}