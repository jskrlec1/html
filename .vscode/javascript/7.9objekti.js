var cat = {};
var dog = {
  breed: "Golden retriever",
  bark: function () {
    return "Wuf Wuf";
  },
  hasToy: false,
};

console.log(cat);
console.log(dog.breed);
console.log(dog.bark);
console.log(dog.bark());

dog.breed = "Pekinezer";
console.log(dog.breed);
/*D.Z. za pročitati https://medium.com/@shrijan00003/
javascript-object-properties-writable-enumerable-
configurable-eced27378256*/

var igracka = dog["has Toy"];
console.log(igracka);

cat.color = "grey";
cat.size = 30;
console.log(cat);

//delete dog.bark;

var ispisObjekta = JSON.stringify(dog);
//pretvaranje u JSON objekt
console.log(dog);
console.log(ispisObjekta);