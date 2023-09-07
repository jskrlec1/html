var rows = prompt("How many rows for your multiplication table?");
var cols = prompt("How many columns for your multiplication table?");

if (rows == "" || rows == null) rows = 10;
if (cols == "" || cols == null) cols = 10;

createTable(rows, cols);

/*Create table
  @author John Doe
*/

function createTable(rows, cols) {
  var j = 1;
  var vrati = "<table border='1' width='500' cellspacing='0' cellpadding='5'>";

  for (i = 1; i <= rows; i++) {
    vrati = vrati + "<tr>";
    while (j <= cols) {
      vrati = vrati + "<td>" + i * j + "</td>";
      j = j + 1;
    }
    vrati = vrati + "</tr>";
    j = 1;
  }

  vrati = vrati + "</table>";
  document.write(vrati);
}

/*

*/
