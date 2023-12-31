function udaljenostKoordinata(x1, y1, x2, y2) {
  var dx = x2 - x1;
  var dy = y2 - y1;
  console.log(Math.sqrt(dx * dx + dy * dy));
}

udaljenostKoordinata(1, 1, 3, 4);

//1.
function myFunc(a, b) {
  if (!b) {
    b = 1;
  }
  return a + b;
}

console.log(myFunc(1, 5));

//2.
function myFunc(a, b) {
  b = b || 1;
  return a + b;
}

console.log(myFunc(1, 7));

//3.
//samo ES6
function myFunc(a, b = 1) {
  return a + b;
}

console.log(myFunc(1, 9));
