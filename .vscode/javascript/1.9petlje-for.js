for (var index = 0; index < 10; index++) {
  console.log(index);
  //index - može biti bilo koje slovo ili riječ
}

// for (var i = 0; i < 10; i++) {
//   console.log(index);
// }

var varOne = 0;
for (i = 0; i < 4; i++) {
  for (j = 0; j < 4; j++) {
    varOne++;
  }
}
console.log(varOne);

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i);

// 2. Koja je vrijednost isprintana u konzoli?
var varOne = 0;
for (i = 0; i < 4; i++) {
  for (j = 0; j < 4; j++) {
    varOne++;
    console.log("i=" + i + " j=" + j + " varOne=" + varOne);
  }
}
console.log(varOne);
