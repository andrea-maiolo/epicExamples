// DATATYPES
// string - insieme di caratteri racchiusi da apici (o virgolette) - "" '' `` (win: alt + 96) (mac: opt + 9)
// number - valori numerici SENZA APICI, quindi 35 e non "35"
// boolean - true / false
// undefined - rappresenta l'assenza di valore o la non esistenza di una variabile
// null - l'assenza intenzionale di valore

// -----------
// symbol
// bigInt

// VARIABILI

// evitare a tutti i costi l'utilizzo di var
// in questo primo esempio, aver ridefinito la variabile firstname in un contesto separato, non ha aiutato in termini di sovrascrittura della variabile
// la quale si è sovrascritta anche nell'ambito esterno

// var firstname = "Stefano";

// {
//   var firstname = "Giovanni";
//   console.log(firstname);
// }

// console.log(firstname);

// in questo modo invece definire una varibile con let in un ambito di blocco separato, la farà esistere solamente all'interno di quel blocco
// non andrà ad intaccare il valore della variabile esterna con lo stesso nome
// questo perché let & const hanno un ambito (scope) di blocco

let firstname = "Stefano";

{
  let firstname = "Giovanni";
  console.log(firstname);
}

console.log(firstname);

let fullName = "Stefano\nMiceli";
console.log(fullName);

// TEMPLATE LITERALS
let multiLineStr = `Stefano
Miceli
è il vostro 
insegnante`;
console.log(multiLineStr);

let name = "Stefano";
let surname = "Miceli";
let age = 35;

const concatStr = "Ciao ragazzi, il mio nome completo è " + name + " " + surname + ", e ho " + age + " anni.";
console.log(concatStr);

// il vantaggio dei template literals è la possibilità di interpolare valori dinamici (variabili) direttamente all'interno della
// creazione della stringa stessa creata con `` backticks
const templateStr = `Ciao ragazzi, il mio nome completo è ${name} ${surname}, e ho ${age} anni.`;
console.log(templateStr);

// da ricordarsi che JavaScript in alcune occasioni apporta delle conversioni automatiche

const fakeNum = "64";
const fakeSum = fakeNum + 10;
console.log(fakeSum);

// modalità di conversione di caratteri numerici da tipo stringa a tipo numero
const goodSum = parseInt(fakeNum) + 10; // parseFloat() per numeri decimali
console.log(goodSum);

// conversione esplicita di numero in stringa
const newNum = 50;
const concatenatedNums = age.toString() + newNum.toString();
console.log(concatenatedNums);

const wrongMult = "a35" * 2; // NaN - il tipo di NaN è sempre numerico
const wrongMult2 = undefined * 2; // NaN - il tipo di NaN è sempre numerico

console.log(wrongMult);
console.log(wrongMult2);

// in questo modo utilizzando il doppio controllo sulla categoria numero in primis,
// e verificando che l'elemento NON SIA NaN, abbiamo una buona certezza di credere di aver a che fare con un numero effettivo

// il ternario funziona attraverso la valutazione di una condizione (anche composta con && , || ) e se validata, fornisce il primo valore, altrimenti fornisce il secondo
// uno o l'altro valore a questo punto si inserirà all'interno della variabile

// condizione ? valore ritornato se condizione true : valore ritornato se condizione false
const isGoodNum = typeof wrongMult === "number" && !isNaN(wrongMult) ? "l'elemento è valido" : "l'elemento non è valido";
console.log(isGoodNum);
const isGoodNum2 = typeof newNum === "number" && !isNaN(newNum) ? "l'elemento è valido" : "l'elemento non è valido";
console.log(isGoodNum2);

// OPERATORI LOGICI

// ! (NOT) - ribalta il risultato booleano
// !true => false
// !false => true

// concatenare con && (AND)
// ci restituisce true solo quando tutte le operazioni hanno dato true

// true && true => true
// true && false => false
// false && false => false

// concatenare con || (OR)
// lo utilizziamo quando vogliamo trovare corrispondenza di uno tra i valori ammissimili
// true || false  => true
// true || true  => true
// false || false => false

// il prompt è un pop-up BLOCCANTE, che tramite un messaggio si aspetterà un valore inserito dall'utente nel browser
// questo valore prenderà posto nella variabile.
// questo ci rende le variabili un pochino più dinamiche.
const userName = prompt("Come ti chiami?");
const userAge = prompt("Quanti anni hai?");
const eyeColor = prompt("Scrivi il colore dei tuoi occhi");

// const isThePersonIWant =
//   (eyeColor === "blue" || eyeColor === "brown" || eyeColor === "black") && name === "Stefano"
//     ? "il tuo colore degli occhi è bellissimo"
//     : "non mi piace il colore dei tuoi occhi";

// ottimizziamo la sintassi (refactoring)

const hasCorrectEyeColor = eyeColor === "blue" || eyeColor === "brown" || eyeColor === "black"; // es. eyeColor = "blue" ==> true // eyeColow = "green" ==> false

const isThePersonIWant = hasCorrectEyeColor && userName === "Marcolino" && parseInt(userAge) >= 18 ? "Sei proprio la persona che voglio" : "No, swipe left";

console.log(isThePersonIWant);

// OPERATORI DI COMPARAZIONE
// > >= < <=
