// FUNZIONI
// una funzione è BLOCCO DI CODICE RIUTILIZZABILE

// PUO' ricevere dei valori in ingresso, anche detti PARAMETRI (input)
// PUO' avere un valore di ritorno, valore che diventerebbe disponibile all'esterno della funzione (output)

// 1) definiamo una funzione semplice SENZA INPUT e SENZA OUTPUT

// 1. MOMENTO DELLA DEFINIZIONE o dichiarazione della funzione
// useremo la parola chiave function + identificativo + () + {}
// ⚠️ Definire una funzione NON equivale ad averla eseguita

function bark() {
  console.log("BAU");
  console.log("BAU");
  console.log("BAU");
}

// a meno di non INVOCARE la funzione, queste istruzioni sono solamente definite e MAI ESEGUITE

// 2. INVOCAZIONE (o esecuzione) DELLA FUNZIONE
bark();

// Funzione VOID (non fruttifera) - senza valore di ritorno
// può servire semplicemente per eseguire delle istruzioni, senza produrre un valore in uscita (output)
// può servire anche per produrre un side-effect (effetto collaterale) al di fuori di sé stessa.
function sayMyName() {
  console.log("Heisenberg");
}

sayMyName();

// -----------------------------------------------

let num = 0;

function addOne() {
  // side effect: abbiamo modificato un valore di una variabile esterna alla funzione
  num++;
  // NON c'è un return, nessun output
  // la funzione si definisce quindi VOID
}

for (let i = 0; i < 100; i++) {
  addOne(); // invocazione ripetuta per 100 volte
}

console.log(num);

// -----------------------------------------------

// FUNZIONE FRUITFUL (fruttifera) - con valore di ritorno
// una funzione fruttifera è quella che avrà un valore di ritorno (output)

function sum() {
  const result = 10 + 50;
  return result;
}

console.log(sum());

// possiamo trattare l'invocazione della funzione come il valore che mi ritornerà la funzione stessa
// sum() === 60
const outputValue = sum() * 2;
console.log(outputValue);

// -----------------------------------------------

// PARAMETRI DI FUNZIONE (input)
// un parametro è un contenitore di valore (placeholder) che entra all'interno della funzione "da fuori"

function dynamicSum(number1, number2) {
  const result = number1 + number2;

  return result;
}

// sarà nel momento dell'INVOCAZIONE della funzione che i parametri ACQUISIRANNO un effettivo VALORE
dynamicSum(4, 8); // il risultato viene ritornato, ma non lo vedremo mai
console.log(dynamicSum(4, 8)); // dovremo quanto meno abbracciare l'invocazione della funzione in un console.log così da raccoglierlo e vederlo
// oppure salvo il suo valore ritornato nella variabile...
const output1 = dynamicSum(4, 8);
const output2 = dynamicSum(2, 8);
const output3 = dynamicSum(16, 4);
// e loggo la variabile risultante
console.log(output1, output2, output3);

function sayHi(name) {
  console.log("Ciao, " + name);
}

sayHi("Stefano");
sayHi("Matteo");
sayHi("Christian");
sayHi("Gianni");
sayHi("Renato");

function sayHiAgain(symbol, name) {
  //   console.log("Hello " + name + symbol + symbol + symbol);
  console.log("Hello " + name + symbol.repeat(5));
}

sayHiAgain("!", "Stefano");
sayHiAgain("*", "Martina");
sayHiAgain("=", "Giovanna");

function giveMeRandom(max) {
  const randomNum = Math.floor(Math.random() * max);
  return randomNum;
}

console.log(giveMeRandom(10));

// i parametri possono essere definiti anche con un valore di default, questo verrà applicato nel caso in cui,
// in una qualche esecuzione della funzione, non arrivi il valore per quel parametro, rimanendo così undefined
// se il valore rimane undefined il valore di default gli verrà applicato in automatico
function generateNumbList(limit, range = 4) {
  const arrOfNums = [];
  for (let i = 0; i < limit; i++) {
    const newNumb = giveMeRandom(range);
    arrOfNums.push(newNumb);
  }

  return arrOfNums;
}

// i valori passati tra parentesi si definiscono gli ARGOMENTI della funzione ==> diventano il valore dei PARAMETRI
const arrOfTens = generateNumbList(10, 50);
console.log(arrOfTens);

const arrOfTwos = generateNumbList(2, 10);
console.log(arrOfTwos);

const arrOfFive = generateNumbList(5); // non ho passato un secondo argomento, quindi range sarà undefined al momento dell'esecuzione,
// e prenderà il suo valore di default (4)
console.log(arrOfFive);
