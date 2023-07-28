/*
    index.ts
    Javascript interactive
*/
import * as readline from "node:readline";
import axios from "axios";

const parking_csv = axios
  .get(
    "https://raw.githubusercontent.com/ParkingReformNetwork/parking-lot-map/main/data/score-cards.json",
  )
  .then((response) => {
    console.log(response.data);
  })
  .catch((err) => {
    console.log(err);
  });

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
