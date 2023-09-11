// 1. Kreiraj objekt koji reprezentira neki specifični auto, sa bar 8 svojstava, od kojih su 3 funkcije (npr. ubrzaj, zakoci itd.), a jedna je također objekt. Probajte referencirati druge vrijednosti objekta u funkcijama. Svaka funkcija mora primati argumente i vracati neku vrijednost.

// 2. Pozovite funkcije svog objekta sa argumentima i ispisite rezultat.
// 2. Sa petljom pristupi svim brojivim svojstvima tvog auto objekta i ispiši vrijednosti u konzoli zajedno sa njihovim imenima (kljucevima) (npr. ime: Ivan)
// 3. Ispiši u konzoli razumljivu rečenicu koja uključuje bar 2 svojstva tvog objekta.
// 4. Pretvori svoj objekt u JSON string.
// Kreiranje objekta koji predstavlja auto

// 1. Kreiranje objekta za auto
var auto = {
  marka: "Toyota",
  model: "Camry",
  godinaProizvodnje: 2022,
  trenutnaBrzina: 0,

  ubrzaj: function (ubrzanje) {
    this.trenutnaBrzina += ubrzanje;
    return this.trenutnaBrzina;
  },

  zakoci: function (smanjenje) {
    this.trenutnaBrzina -= smanjenje;
    return this.trenutnaBrzina;
  },

  informacije: {
    boja: "Siva",
    brojVrata: 4,
  },
};

var novaBrzina = auto.ubrzaj(50);
console.log("Nova brzina automobila: " + novaBrzina);

var smanjenaBrzina = auto.zakoci(20);
console.log("Smanjena brzina automobila: " + smanjenaBrzina);

for (var svojstvo in auto) {
  if (auto.hasOwnProperty(svojstvo)) {
    console.log(svojstvo + ": " + auto[svojstvo]);
  }
}

console.log(
  "Auto marke " +
    auto.marka +
    " i modela " +
    auto.model +
    " je proizveden " +
    auto.godinaProizvodnje +
    "."
);
