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
