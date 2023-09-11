// U ovoj vježbi koristit ćemo se lodash bibliotekom. Prvi korak je da instalirate lodash paket na lokalno računalo.

// Korisnik na našoj stranici kreira password. Želimo osigurati da:
// 	1. Je svaki znak u passwordu različit od drugih / jedinstven
// 	2. Su svi znakovi brojke
// 	3. Password nema više od 10 znakova

// Vaš je zadatak:
// 	1. Napisati funkciju koja provjerava da li su svi znakovi jedinstveni (naputak: pogledajte lodash metode nad nizovima)
// 	2. Napisati funkciju koja provjerava da li su svi znakovi brojke
// 	3. Napisati funkciju koja uzima password i skraćuje ju na 10 znakova, ako je broj znakova veći od 10

var _ = require("lodash");

var dobro = "1234567890";
var lose = "1123456";

var jedinstveniZnakovi = function (password) {
  var uniqueChars = _.uniq(password.split(""));

  var jedinstveni = uniqueChars.length === password.length;

  return jedinstveni;
};

console.log(jedinstveniZnakovi(dobro));
console.log(jedinstveniZnakovi(lose));

var sviBrojevi = function (password) {
  var suSviBrojevi = _.every(password, function (znak) {
    return _.isNumber(parseInt(znak, 10));
  });

  return suSviBrojevi;
};

console.log(sviBrojevi(dobro));
console.log(sviBrojevi(lose));

var predugacakPassword = "12345678901234567890";

var skratiPassword = function (password) {
  var skraceniPassword = _.truncate(password, { length: 10 });

  return skraceniPassword;
};
jedinstveniZnakovi(dobro);
jedinstveniZnakovi(lose);
console.log(skratiPassword(predugacakPassword));
