// 1. Koja je vrijednost varijable trueFalse? Čemu služe dvostruki negacijski znakovi?

// 2., 3. i 4. Koju će vrijednost ispisati console.log? Zašto?
var x = "Lorem ipsum",
  y = 2345,
  z = "2345";
q = false;

var trueFalse = !!"false" == !!"true";
/*Usporedba vraća true. Negacija na stringu(truthy vrijednost) vraća true, 
bez obzira na sadržaj stringa, a negacija true vrijednosti je false. Obje strane su jednake.*/

// 2.
console.log(q || x || y || z);
//Ispisati će x vrijednost (Lorem ipsum31), jer je to prva truthy vrijednost.

// 3.
var num = 6;
num--;
console.log(num);
// 5, jer num-- === 6 - 1

// 4.
const price = 26.5;
const taxRate = 0.082;

let totalPrice = price + price * taxRate;
totalPrice.toFixed(2);

console.log("Total:", totalPrice.toFixed(2));
// 28.67 */

/*Varijabla trueFalse će imati vrijednost true, a dvostruki negacijski znakovi (!!) koriste 
se da biste pretvorili bilo koju vrijednost u njen ekvivalentni boolean (logički) izraz. U ovom slučaju,
 "false" će se pretvoriti u true jer je to non-empty string (string koji sadrži tekst), a isto tako će
  se "true" pretvoriti u true. Stoga će usporedba !!"false" == !!"true" biti true == true, što je true.

U izrazu q || x || y || z, operator logičkog "ili" (||) vraća prvu istinitu vrijednost ili posljednju
 vrijednost ako nijedna nije istinita. U ovom slučaju, q je false, x je non-empty string, y je broj
 različit od nule, a z je non-empty string. Kako je x istinita vrijednost (non-empty string), to će biti ispisano - Lorem ipsum31.

Varijabla num će prvo biti postavljena na 6, a zatim će joj biti umanjena za 1 pomoću operatora --.
 Dakle, ispisat će se broj 5.

U izrazu totalPrice.toFixed(2), metoda toFixed(2) se primjenjuje na vrijednost totalPrice kako bi se
 zaokružila na 2 decimalna mjesta. Međutim, rezultat toFixed metode neće biti spremljen nazad u 
 varijablu totalPrice. Stoga će ispisati originalnu vrijednost totalPrice, a to je 28.67 
 (u slučaju da proračunato totalPrice iznosi 26.5 + (26.5 * 0.082)).*/
