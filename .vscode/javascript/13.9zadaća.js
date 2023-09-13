// Stil elemenata treba promijeniti pomocu JS i HTML DOM API-ja tako da:

// 	- umjesto circle buleta na elementima liste prikažu redne brojke
var listaElemenata = document.querySelectorAll("li");
for (var i = 0; i < listaElemenata.length; i++) {
  listaElemenata[i].style.listStyleType = "decimal";
}

// 	- div sa klasom info treba dobiti klasu koja će ga sakriti (dodajte u stylesheet)
var infoDiv = document.querySelector(".info");
infoDiv.classList.add("sakrij");

// 	- saznajte margin-left izračunati stil koji je primijenjen na body elementu
var bodyElement = document.body;
var stilBodyElementa = window.getComputedStyle(bodyElement);
var marginLeftVrijednost = stilBodyElementa.getPropertyValue("margin-left");
console.log("margin-left na body elementu: " + marginLeftVrijednost);
//lijeva margina je 8px
