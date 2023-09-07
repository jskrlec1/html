//1. Napišite program koji će ispisati sve brojeve između 0 i 30 djeljive sa 7

for (var br = 1; br < 30; br++) {
  if (br % 7 === 0) console.log("Broj " + br + " je dijeljiv sa 7");
}

//2. Napišite program koji će zbrojiti sve brojeve između 0 i 100 dijeljive sa 3

var zbroj = 0;

for (var broj = 0; broj <= 100; broj++) {
  if (broj % 3 === 0) {
    zbroj += broj;
  }
}
console.log("Zbroj brojeva između 0 i 100 djeljivih sa 3 je: " + zbroj);

