var description = document.querySelector(".description");
var content = description.innerHTML;
console.log(content);

description.innerHTML = "Ima <span>4 rijeke</span>";
//description.textContent = "Ima <span>4 rijeke</span>";
//description.innerText = "Ima <span>4 rijeke</span>";

var image = document.querySelector("img");

image.src = "/slike/orange.png";
console.log(image.getAttribute("width"));
//dohvaćanje vrijednosti atributa 30
image.setAttribute("height", 40);
//postavljanje vrijednosti atributa height na 40
image.removeAttribute("height");
//uklanjanje atributa height
var ul = document.querySelector("ul");
ul.dataset.index = 2;

/*https://www.w3schools.com/jsref/prop_win_pagexoffset.asp
https://www.w3schools.com/jsref/prop_element_offsettop.asp
https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
https://developer.mozilla.org/en-US/docs/Web/API/Document/prepend
https://developer.mozilla.org/en-US/docs/Web/API/Element/className
https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode*/