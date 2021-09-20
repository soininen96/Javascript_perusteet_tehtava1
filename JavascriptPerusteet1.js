//Javascript -perusteet, teht 1

let input = require("readline-sync");
console.log("Anna sana, niin kerron onko se palindromi.");
let sana = input.question("Sana:");

if (onkoPalindromi(sana) == true) {
  console.log("Sana on palindromi.");
} else console.log("Sana ei ole palindromi");

function onkoPalindromi(str) {
  let palindromi = true;

  str = str.replace(/\s+/g, "");
  str = str.toUpperCase();

  for (let i = 0; i < str.length / 2; i++) {
    if (str.charAt(i) != str.charAt(str.length - 1 - i)) {
      palindromi = false;
    }
  }
  if (palindromi == true) {
    return true;
  } else return false;
}
