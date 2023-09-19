// 1. Dodajte Dog funkciji varijablu "name" koja se postavlja pri kreiranju objekta i označava ime psa. Defaultna vrijednost imena psa je "Rex".

function Dog(name) {
  this.name = name || "Rex";
  this.bark = function () {
    return "Wuf Wuf";
  };
}

// 2. Kreirajte objekt iz Dog funkcije.
var pas = new Dog("Džeki");

// 3. Dodajte Dog funkciji metodu koja vraća postavljeno ime psa. Pozovite ju iz novostvorenog objekta i ispisite rezultat.
Dog.prototype.getName = function () {
  return this.name;
};

var dogName = pas.getName();
console.log("Ime psa je: " + dogName);
