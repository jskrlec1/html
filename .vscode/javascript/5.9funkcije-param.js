var ime = "Dinko";

function ispisImena(x) {
  console.log(x);
}
ispisImena(ime); //vrijednost "ime" se kopira na vrijednost "x"

var broj = 5;
function ispisBroja(x) {
  x += 1;
  return x;
}
console.log(ispisBroja(broj));
console.log(ispisBroja(ime));
