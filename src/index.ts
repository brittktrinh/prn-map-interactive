/*
    index.ts
    Javascript interactive
*/
import * as readline from "node:readline";
import axios from "axios";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const parking_csv = axios
  .get(
    "https://raw.githubusercontent.com/ParkingReformNetwork/parking-lot-map/main/data/score-cards.json",
  )
  .then((response) => {
    // Store cities into an object
    // Needed to access Name and Percentage
    const citiesObject = response.data;

    // Store cities into an array
    const citiesArray = Object.keys(response.data);

    // Select a city to guess the answer to
    let elem = Math.floor(
      Math.random() * (Object.keys(citiesArray).length + 1),
    );
    let selectedCity = citiesArray[elem];

    // Save the correct answer from the selected city
    let correctAnswer = citiesObject[selectedCity].Percentage;

    // Generate options for multiple choice response
    let option_a = Math.floor(Math.random() * 101);
    let option_b = Math.floor(Math.random() * 101);
    let option_c = Math.floor(Math.random() * 101);
    let option_d = Math.floor(Math.random() * 101);

    // Prompt the user for the minigame
    rl.question(
      `Welcome!\nWhat is the percentage of ${citiesObject[selectedCity].Name}?\nA) ${option_a}\nB) ${option_b}\nC) ${option_c}\nD) ${option_d}\n`,
      function (answer) {
        console.log(answer);
      },
    );
  })
  .catch((err) => {
    console.log(err);
  });
