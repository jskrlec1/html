/*1. Napišite while petlju koja
 će ispisivati brojeve od 3 do 20, 
 osim onih djeljivih sa 9.*/
//varijanta 1
var count = 3;

while (count < 20) {
  if (count % 9 > 0) {
    console.log(count);
  }
  count++;
}
//varijanta 2
var count = 3;

while (count < 20) {
  count++;
  if (count % 9 == 0) {
    continue;
  }
  console.log(count);
}
/*modulo % - ostatak pri dijeljenju
9:4=2
2x4=8
ostatak=1 */
/* continue; /*preskače daljnje izvođenje koda i pokreće 
slijedeću iteraciju*/
// break; prekida izvođenje petlje WHILE
