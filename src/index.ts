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
    // Store cities into an array
    let cities = Object.keys(response.data);

    // Select a city to guess the answer to
    let selectedCity =
      cities[Math.floor(Math.random() * (Object.keys(cities).length + 1))];

    // Generate options for multiple choice response
    let option_a = Math.floor(Math.random() * 101);
    console.log(option_a);

    // Prompt the user for the minigame
    rl.question(`Welcome!\nWhat is the percentage of ${selectedCity}?\nA) ${option_a}\n`, function (answer) {
      console.log(answer);
    });

  })
  .catch((err) => {
    console.log(err);
  });

let userInput = "";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
