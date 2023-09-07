/* 1. Kreirajte varijable firstName i lastName i spojite
 ih u varijablu fullName, ali s razmakom ("") 
 između imena i prezimena.*/
var firstName = "Pero";
var lastName = "Perić";
var fullName = firstName + " " + lastName;
console.log(fullName);
/* 2. Razlomite ovu ternarnu operaciju na 3 
različite operacije!
// var x = z === 2? y : 5;*/
var z = 2; 
var y = 10; 

var condition = z === 2;

if (condition) {
  var x = y;
} else {
  var x = 5;
}

console.log("z = " + z);
console.log("y = " + y);
console.log("x = " + x);

/* 3. Napišite petlju koja će prolaziti kroz brojeve 
od 1 do 20. Za svaku će iteraciju provjeriti je li 
trenutni broj paran ili neparan, i console.log-ati 
rezultat (npr. "Broj 2 je paran").*/
for (var i = 1; i < 20; i++) {
  if (i % 2 === 0) {
    console.log("Broj " + i + " je paran");
  } else {
    console.log("Broj " + i + " je neparan");
  }
}
