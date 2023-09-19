var character = {
  name: "Eleven",
  show: "Stranger Things",
  portrayedBy: "Millie Bobby Brown",
};

const quotes = [
  "I'm going to my friends. I'm going home.",
  "Pure fuel! PURE FUEL! WOO!",
  "See? Zoomer.",
  "Bitchin.",
];

// 1. Pratite kod u scripts.js.

// 2. Nadite prototip objekta "character" (naputak: koristite metode globalnog Object objekta). Nadite prototip tog prototipa. Ispisite ih.
const characterPrototype = Object.getPrototypeOf(character);

const characterPrototypePrototype = Object.getPrototypeOf(characterPrototype);

console.log("Prototip objekta character:", characterPrototype);
console.log(
  "Prototip prototipa objekta character:",
  characterPrototypePrototype
);

// 3. Dodajte prototipu objekta "character" funkciju koja vraća jedan (slucajno odabran) citat iz niz "quotes".

characterPrototype.getRandomQuote = function () {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

console.log(character.getRandomQuote());
