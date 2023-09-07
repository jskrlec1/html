// Koristeći metode rada nad stringovima iz zadanog stringa:
//   1. Spremite duljinu stringa u varijablu.
//   2. Izdvojite riječ 'sit' u zasebnu varijablu.
//   3. Zamijenite riječ 'amet' sa riječi 'elit'.
//   4. Konkatenirajte u novu varijablu zadani string sa stringom 'consectetur adipiscing elit', sa zarezom izmedu.
//   5. Konvertirajte sve riječi u orginalnom stringu u velika slova
//   6. Maknite počenu prazninu u stringu
//   7. Nađite slovo na poziciji 12

var text = " Lorem ipsum dolor sit amet";

// 1. Spremite duljinu stringa u varijablu.
var text;
console.log("Duljina stringa:", length);

// 2. Izdvojite riječ 'sit' u zasebnu varijablu.
var extractedWord = text.slice(18, 22);
console.log("Izdvojena riječ:", extractedWord);

// 3. Zamijenite riječ 'amet' sa riječi 'elit'.
var replacedText = text.replace("amet", "elit");
console.log("Zamijenjen tekst:", replacedText);

// 4. Konkatenirajte u novu varijablu zadani string sa stringom 'consectetur adipiscing elit', sa zarezom izmedju.
var concatenatedText = text + ", consectetur adipiscing elit";
console.log("Konkatenirani tekst:", concatenatedText);

// 5. Konvertirajte sve riječi u orginalnom stringu u velika slova.
var uppercaseText = text.toUpperCase();
console.log("Tekst velikim slovima:", uppercaseText);

// 6. Maknite početnu prazninu u stringu.
var trimmedText = text.trim();
console.log("Tekst bez početne praznine:", trimmedText);

// 7. Nađite slovo na poziciji 12.
var text;
console.log(text.charAt(12));
