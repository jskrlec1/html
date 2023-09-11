var footer = document.getElementById("footer");
console.log(footer);
var description = document.querySelector(".description");
console.log(description);

var d = document.createElement("div"); //kreirati novi element
footer.appendChild(d); //dodijeliti novi element postojećem
description.parentNode.removeChild(
  description
); /*brisanje elementa. parentNode -
 postavljam se na parent element elemnta koji želim obrisati*/
