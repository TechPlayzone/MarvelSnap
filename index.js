// Load the required modules
const fs = require("fs");

// Array of card names to extract
const cardsToExtract = fs.readFileSync("mycards.txt").toString().split(", ");

const data = require("./Marvel_Snap_Cards_9_28.json");

// Loop through each card
data.success.cards.forEach((card) => {
  // Check if card name is in array
  if (cardsToExtract.includes(card.name)) {
    // Extract desired fields
    const name = card.name;
    const ability = card.ability;
    const cost = card.cost;
    const power = card.power;
    const source = card["source_slug"];

    // Print extracted data
    console.log(name);
    console.log(ability);
    console.log(cost);
    console.log(power);
    console.log(source);
    console.log("");
  }
});
