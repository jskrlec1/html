/*FUNKCIJA KAO VARIJABLA
function vratiNesto(x) {
  return x;
}
var y = vratiNesto;
console.log(y("Hello world"));
*/

function vratiNesto(x) {
    var y = x(1);
    return ;
}

function vratiMene(z) {
    return z / 2;
}
var y = vratiNesto(vratiMene);
console.log(y);
// 0.5