// 2. HTML index.html-a treba promijeniti pomocu JS i HTML DOM API-ja tako da:
// 	- h1 element sadrži tekst "Karlovac"
// 	- span u description div-u je zamijenjen h3 elementom sa tekstom "5 rijeka"
// 	- div s klasom "info" sadrži text "Peta rijeka je piva."
// 	- lista u footer elementu izlistava svih 5 karlovačkih rijeka u li elementima

document.querySelector("h1").textContent = "Karlovac";

var descriptionDiv = document.querySelector(".description");
var spanElement = descriptionDiv.querySelector("span");
var h3Element = document.createElement("h3");
h3Element.textContent = "5 rijeka";
descriptionDiv.replaceChild(h3Element, spanElement);

document.querySelector(".info").textContent = "Peta rijeka je piva.";

var ulElement = document.querySelector("#footer ul");

var karlovackeRijeke = ["Kupa", "Korana", "Mrežnica", "Dobra", "Una"];

karlovackeRijeke.forEach(function (rijeka) {
  var liElement = document.createElement("li");
  liElement.textContent = rijeka;
  ulElement.appendChild(liElement);
});

// 3. Imate zadane vrijednosti:
// 	- pageOffsetY elementa je 1300px
// 	- scrollTop je 200px
// 	- visina korisničkog ekrana je 730px
// 	- visina elementa je 300px

// 	Da li je element vidljiv na ekranu?
// 	U slučaju da nije, koliko mu piksela fali i u kojem smjeru?
//= odgovor je ne, 370px fali!