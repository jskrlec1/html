// 1.
var x = "John Doe";
function vratiNesto(name) {
  var x = name;
  function f() {
    return x;
  }
  return f;
}
var y = vratiNesto("Jane Doe");
var z = vratiNesto()();
/* 1. Pratite kod u scripts.js. Koje su vrijednosti y i z 
varijabli na kraju programa?
//1. y je postala funkcija f, a z je undefined.
// 2. Od funkcije u prvom zadatku stvorite samopozivajuću
 anonimnu funkciju koja prima parametar "name".
  Kreirajte globanu varijablu koju ta funkcija koristi
   i zadajte joj vrijednost.*/
var ime = "John Doe";

(function (ime) {
  var rezPrva = vratiNesto(ime);
  var rezTotal = rezPrva();
  console.log(rezTotal);
})(ime);
