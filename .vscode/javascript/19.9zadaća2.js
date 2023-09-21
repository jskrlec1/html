//1. Postavite “use strict” direktivu na početak programa u scripts.js. Ispravite sve greške koje se javljaju.

// 2. Dodajte polje "user" u "users" pomoću spread operatora. Spremite rezultat u novu varijablu i ispisite rezultat.

// 3.Koju vrijednost vraćaju console.log izjave? Probajte zamijeniti let sa var.
// 1.

/*a = 78;
var b = 034;
delete a;
delete window.b;
myObject = {property1:1, property2:2, property1:1};

// 2.
const users = [
  { name: 'Fabio', surname: 'Biondi' },
  { name: 'Mario', surname: 'Rossi' },
];

const user = { name: 'Lorenzo', surname: 'Verdi' };


// 3.
for (let i = 0; i < 10; i++) {
 setTimeout(function() {
   console.log('The number is ' + i);
 }, 1000);
}

console.log(i);
*/

// 1.
"use strict"; // Postavljanje "use strict" direktive na početak skripte za strožu kontrolu

//a = 78; // Ovo će izazvati ReferenceError jer a nije deklarirana varijabla
var b = 34; // Ispravljeno u 34 (decimalna vrijednost)
//delete a; // Ovo će izazvati ReferenceError jer a nije deklarirana varijabla
delete window.b; // Ovo će izbrisati globalnu varijablu b

var myObject = { property1: 1, property2: 2, property1: 1 }; // Ispravljeno dodavanje svojstava u objekt

// 2.
const users = [
  { name: 'Fabio', surname: 'Biondi' },
  { name: 'Mario', surname: 'Rossi' },
];

const user = { name: 'Lorenzo', surname: 'Verdi' };

const updatedUsers = [...users, user]; // Dodavanje novog korisnika u polje koristeći spread operator

console.log(updatedUsers);

// 3.
for (var i = 0; i < 10; i++) { // Promijenjeno let u var
  setTimeout(function() {
    console.log('Broj je ' + i);
  }, 1000);
}

console.log(i); // Ispisat će 10 jer i je globalna varijabla nakon petlje
