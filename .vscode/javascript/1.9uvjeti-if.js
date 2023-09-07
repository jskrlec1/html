var x = 5;

if (x > 4) {
  console.log(x);
}

var x = 5;

if (x > 4) {
  console.log("Broj je veći od 4 i iznosi: " + x);
}

var x = 5;

if (x > 4) {
  console.log("Broj je veći od 4 i iznosi: " + x);
} else {
  console.log("Broj je " + x + " je manji od 4");
}

var x = 11;
var y = "Marko";

if (y === "Marko") {
  console.log("Bok " + y);
} else if (y === "Dinko") {
  console.log("Baj" + y);
} else if (y === "Martina") {
  console.log("Ćao" + y);
} else {
  console.log("Bok novi" + y);
}

/*Ispisati različitu poruku ovisno koji broj upišemo,
  jednoznamenkasti, dvoznamenkasti, troznamenkasti.
// Broj X je jednoznamenkast; Broj X je dvoznamenkast; 
Broj X je troznamenkast, Broj X je veći od 999*/

var x = "100";

if (x >= 0 && x <= 9) {
  console.log("Bok " + x);
} else if (x >= 10 && x <= 99) {
  console.log("Baj " + x);
} else if (x >= 100 && x <= 999) {
  console.log("Ćao " + x);
} else if (x >= 1000 && x <= 9999) {
  console.log("Bok novi " + x);
}
