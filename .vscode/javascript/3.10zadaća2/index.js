// Zadatak nam je kreirati node modul koji nam izpisuje tip podataka iz vrijednosti koje smo mu poslali.
// Modul je ovisan o lodash biblioteci.

// 1. Inicijalizirajte node modul u folderu. Dodajte sve nužne podatke o modulu.
// 2. Instalirajte lodash paket i dodajte u ovisne pakete (dependencies).
// 3. Napišite funkciju koja provjerava tip prodatka na temelju parametara i ispisuje ju. Exportajte ju.
// 4. Izdajte svoj paket na npm.js

const _ = require("lodash");

function checkAndPrintType(value) {
  if (_.isString(value)) {
    console.log(`Tip podatka je: string`);
  } else if (_.isNumber(value)) {
    console.log(`Tip podatka je: number`);
  } else if (_.isBoolean(value)) {
    console.log(`Tip podatka je: boolean`);
  } else if (_.isArray(value)) {
    console.log(`Tip podatka je: array`);
  } else if (_.isObject(value)) {
    console.log(`Tip podatka je: object`);
  } else {
    console.log(`Tip podatka je: unknown`);
  }
}

module.exports = {
  checkAndPrintType,
};
