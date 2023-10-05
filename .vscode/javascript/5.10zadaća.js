// Zada 1
// Napišite JavaScript funkciju koja prihvaća cjelobrojnu vrijednost kao argument te vraća poruku da li se radi o parnom ili neparnom broju.
// Pretpostavite da će argument uvijek biti cjelobrojna vrijednost.

function provjeriParnostBroja(broj) {
  if (broj % 2 === 0) {
    return "Broj " + broj + " je paran.";
  } else {
    return "Broj " + broj + " je neparan.";
  }
}

var broj = 7;
var rezultat = provjeriParnostBroja(broj);
console.log(rezultat);

// Zad2:
// Napišite JavaScript funkciju koja prihvaća zadani niz kao argument i
//pronalazi najdužu riječ unutar niza. Vratite tu riječ iz funkcije i spremite u varijablu čiju ćete vrijednost ispisati u konzoli.

var rijeci = [
  "quickest",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];

function najduzaRijec(rijeciNiz) {
  var najduza = "";
  for (var i = 0; i < rijeciNiz.length; i++) {
    if (rijeciNiz[i].length > najduza.length) {
      najduza = rijeciNiz[i];
    }
  }
  return najduza;
}

var najduzaRijecIzNiza = najduzaRijec(rijeci);
console.log("Najduža riječ u nizu je: " + najduzaRijecIzNiza);

// Zad3: isto kao 2 samo najkraću riječ
var rijeci = [
  "quickest",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];

function najkracaRijec(rijeciNiz) {
  var najkraca = rijeciNiz[0];

  for (var i = 1; i < rijeciNiz.length; i++) {
    if (rijeciNiz[i].length < najkraca.length) {
      najkraca = rijeciNiz[i];
    }
  }
  return najkraca;
}

var najkracaRijecIzNiza = najkracaRijec(rijeci);
console.log("Najkraća riječ u nizu je: " + najkracaRijecIzNiza);

//Zad 4
// Koristeći JavaScript dohvatite HTML element preko njegova ID-a "zaglavlje"
//te mu dodajte novi podelement tipa <h1> s tekstom "Naslov" (novi element biti će posljednji podelement svog roditelja).

var zaglavljeElement = document.getElementById("zaglavlje");

var h1Element = document.createElement("h1");

h1Element.textContent = "Naslov";

zaglavljeElement.appendChild(h1Element);

//ZAd 5:
// Koristeći JavaScript dohvatite HTML element preko njegova ID-a "zaglavlje" te ga uklonite iz HTML stabla.

var zaglavljeElement = document.getElementById("zaglavlje");

if (zaglavljeElement) {
  zaglavljeElement.parentNode.removeChild(zaglavljeElement);
}

//Zad6:
//Koristeći JavaScript dohvatite HTML element preko njegova ID-a "zaglavlje" te mu postavite sljedeću pozadinsku boju: "#ddd".

var zaglavljeElement = document.getElementById("zaglavlje");

if (zaglavljeElement) {
  zaglavljeElement.style.backgroundColor = "#ddd";
}
