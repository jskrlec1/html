//Deklarirajte varijable y i z te im dodijelite proizvoljne vrijednosti. Nakon toga razlomite ovu ternarnu operaciju na 3 različite operacije (upotrebom grananja). Ispišite dobivenu vrijednost varijable x.
var x = z === 2 ? y : 5;

var y = 10;
var z = 2;

var x;

if (z === 2) {
  x = y;
} else {
  x = 5;
}

console.log(x);
