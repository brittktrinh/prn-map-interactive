/*
    index.ts
    Javascript i/o interactive
*/
import * as readline from "node:readline";

// const parking_csv = ("https://raw.githubusercontent.com/ParkingReformNetwork/parking-lot-map/main/data/score-cards.json");

let option_a = Math.floor(Math.random() * 101);
console.log(option_a);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Does this work?\n", function (answer) {
  console.log(answer);
});

rl.close();
