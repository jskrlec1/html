var naslov = document.getElementById("crveni");
naslov.style.color = "red";

//https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp

const element = document.getElementById("test");
const cssObj = window.getComputedStyle(element, null);
console.log(cssObj);
var bgColor = cssObj.getPropertyValue("background-color");
console.log(bgColor);
element.className = "containerElement containerElement--left";
//dodijeljivanje klase elementu
console.log(element.classList);
//klasa u obliku liste
element.classList.add("hide");
//dodavanje nove klase u listu
console.log(element.classList);
element.classList.remove("hide");
//brisanje klase s elementa
console.log(element.classList);

