//DZ:
// HTML rijeke.html-a treba promijeniti pomocu JS i HTML DOM API-ja tako da:
// 	- se na početak doda h1 element
// 	- ispod diva sa klasom "description" se umetne novi div sa klasom "info"
// 	- lista u footer elementu na kraju mora sadrzavati 5 praznih <li> elemenata - koristiti petlju!

var footer = document.getElementById("footer");
console.log(footer);
var description = document.querySelector(".description");
console.log(description);

var h1Element = document.createElement("h1");
h1Element.textContent = "Zadaća";
document.body.insertBefore(h1Element, document.body.firstChild);

var infoDiv = document.createElement("div");
infoDiv.className = "info";
infoDiv.textContent = "Novi div element";
description.parentNode.insertBefore(infoDiv, description.nextSibling);

var lista = document.createElement("ul");
for (var i = 0; i < 5; i++) {
  var liElement = document.createElement("li");
  lista.appendChild(liElement);
}
footer.appendChild(lista);
