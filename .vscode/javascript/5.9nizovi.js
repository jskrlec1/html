var name1 = "John";
var names = ["John", "Jane", "Mike"];

console.log(names[1]);
console.log(typeof name1);
console.log(typeof names);
//dodavanje elementa u niz
names[3] = "Holly;";
console.log("Names niz " + names.length);
var novo = names[2];
console.log("Novo: " + novo);

var empty = [];
console.log(empty[0]);
console.log(typeof empty);
console.log(empty.length); //veličina niza

var empty1 = [5, , 4];
console.log(empty1[1]);
console.log(empty1.length); //veličina niza

//Dodavanje elemenata u niz
empty1.push("chickens", "cats", "dogs");
console.log(empty1);
console.log(empty1.pop());
const sorted = empty1.sort();
console.log(sorted);
const reversed = empty1.reverse();

//ispis vrijednosti niza petljom ForEach
reversed.forEach((element) => {
  console.log("ForEach " + element);
});

var animals = ["chickens", "cats", "dogs"];
console.log(animals);
// console.log(animals.pop());
const sorted1 = animals.sort();
console.log(sorted1);
const reversed1 = animals.reverse();
console.log(reversed1);
//ispis vrijednost niza petljom ForEach
reversed1.forEach((element) => {
  console.log("ForEach " + element);
});

sorted1.forEach((element) => {
  console.log(element);
});

//for petlja za ispis niza
//korištenjem petlje FOR ispiši vrijednost niza ispis
var ispis = ["prvi", "drugi", "treći", "peti"];

for (var i = 0; i < ispis.length; i++) {
  console.log(ispis[i]);
}

//ZADATAK:

// 1. Pomoću petlje napravite iteraciju kroz niz i ispisite u konzolu sve elemente niza.
var names = ["John", "Jane", "Bob", , "Mike"];

names.forEach(function (name) {
  console.log(name);
});

// 2. Dodajte svoje ime na kraj niza.
var names = ["John", "Jane", "Bob", , "Mike"];

names.push("Josip");
console.log(names);

// 3. Koristeći petlju, napravite iteraciju kroz ovaj niz te nakon išto ispišete "Jane" izađite iz petlje.
var names = ["John", "Jane", "Bob", , "Mike"];

for (var i = 0; i < names.length; i++) {
  if (names[i] === "Jane") {
    console.log("Pronađeno ime 'Jane'!");
    break;
  }
  console.log(names[i]);
}

// 4. Napišite naredbu za uklanjanje undefined vrijednosti iz niza.
var names = ["John", "Jane", "Bob", , "Mike"];

for (var i = names.length - 1; i >= 0; i--) {
  if (names[i] === undefined) {
    names.splice(i, 1);
  }
}

console.log(names);
