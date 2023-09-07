/* 1. DZ proučiti razliku između FOR OF i FOR IN
   2.poigrati se sa https://www.javascripttutorial.net/
javascript-multidimensional-array/ */
//3. FUNKCIJE
// 1. Napišite JavaScript funkciju koja prihvaća zadani niz kao parametar i pronalazi najdužu riječ unutar niza.
// 2. Vratite tu riječ iz funkcije i spremite u varijablu.
// 3. Ispišite varijablu u konzoli.
var words = ["brown", "fox", "quickest", "jumps", "over", "the", "lazy", "dog"];

function najdužaRiječ(niz) {
  let najduža = "";

  for (let i = 0; i < niz.length; i++) {
    if (niz[i].length > najduža.length) {
      najduža = niz[i];
    }
  }

  return najduža;
}
var najdužaRiječIzNiza = najdužaRiječ(words);
console.log("Najduža riječ iz niza je:", najdužaRiječIzNiza);
