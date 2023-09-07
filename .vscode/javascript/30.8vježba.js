var x = "Lorem ipsum",
  y = 2345,
  z = "2345";
(q = false), w;

x += "3" + 1;
var baaa = "b" + "a" + +"a" + "a";

// 1. Nađite varijable u listi koje su iste po vrijednosti.
// 2. Koja je vrijednost varijable x na kraju programa? Koji je to tip podatka?
// 3. Koja je vrijednost varijable baaa? Objasnite!
// 4. Provjerite tip podatka varijable w.
/* 1.Varijable koje imaju istu vrijednost su: y i z (oba sadrže broj 2345).
2.Vrijednost varijable x će biti "Lorem ipsum31". Tip podatka varijable x će ostati string.
3.Vrijednost varijable baaa će biti "baNaNa":
"b" + "a" će rezultirati "ba".
+"a" će biti NaN (Not-a-Number) jer se pokušava pretvoriti "a" u broj, ali "a" nije validan broj.
Zatim će se "a" dodati na "ba", pa će rezultat biti "baNaN".
Na kraju se "a" doda na "baNaN", rezultirajući "baNaNa".
4.Varijabla w je deklarisana, ali nije joj dodijeljena nikakva vrijednost. Njena vrijednost će biti undefined, a tip podatka će biti "undefined".*/