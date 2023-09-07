/*ukoliko uvjet nije zadovoljen "while se ne izvršava
niti jednom*/
var count = 15;

while (count < 10) {
  console.log(count);
  count++;
}

//do while se izvrši makar jednom
do {
  console.log(count);
  count++;
} while (count < 10);
