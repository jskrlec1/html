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

var igracka = dog["has Toy"];
console.log(igracka);

cat.color = "grey";
cat.size = 30;
console.log(cat);
var ispisObjekta = JSON.stringify(dog);
//pretvaranje u JSON objekt
console.log();
console.log(ispisObjekta);
console.log(dog.propertyIsEnumerable(["has toy"]));
