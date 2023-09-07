var z = 2;
switch (z) {
  case 1:
    console.log("Broj 1!");

  //break;
  case 2:
    console.log("Broj 2!");
  // break;
  case 3:
    console.log("Broj 3!");
    break;
  case 4:
    console.log("Broj 4!");
    break;
  default:
    console.log("Čudan broj!");
    break;
}
/*Izvršava se kod do prvog "break"*/

/*primjer ispisa iste poruke za različite "case" grupe*/
var z = 2;
switch (z) {
  case 1:
  case 4:
    console.log("Broj 1 ili 4!");
    break;

  case 2:
  case 3:
    console.log("Broj 3 i manji!");
    break;
}
