// CICLI
// sono strutture in grado di RIPETERE un blocco di codice n volte, fin tanto che una condizione rimane vera

// WHILE
// il while ci permette di eseguire un blocco di codice per un numero INDEFINITO di volte
// lo useremo quando non sappiamo a priori quante volte dovrà ripetersi quel blocco per raggiungere il risultato sperato.

// while(condizione da verificare) {
//      codice da eseguire (una o più volte)
// }

// innazitutto andiamo ad utilizzarlo in modo da conoscere il numero di esecuzioni che farà

let counter = 0;
while (counter <= 100) {
  console.log("numero", counter);

  // counter = counter + 1;
  // counter += 1;
  counter++;
}

console.log("FINITO");

let num = 100;
while (num < 100) {
  // qui dentro non entreremo nemmeno la prima volta, perché la condizione viene valutata PRIMA di eseguire il codice
  console.log("WHILE ESEGUITO");
}

do {
  // questo blocco si eseguirà ALMENO UNA VOLTA a prescindere dalla condizione
  console.log("DO...WHILE ESEGUITO");
} while (num < 100);

// ESEMPIO DI UTILIZZO DI WHILE PER UN NUMERO INDEFINITO DI ITERAZIONI

const animals = ["dog", "cat", "horse", "rabbit", "giraffe", "wolf", "dolphin"];
console.log(animals);

while (animals.length > 0) {
  animals.pop();
}
console.log(animals);

// inventiamoci un sistema, in stile bilancia, che permetta di aggiungere del carico, fino a raggiungere 1000kg

// questa variabili ci rappresenta il peso aggiunto sulla bilancia
let weight = 0;

let iterationCount = 0;

while (weight < 1000) {
  // qui chiedo all'utente di aggiungere del peso (arriva in forma di stringa)
  const userInput = prompt("quanto peso stai aggiungendo?");
  // converto il peso da stringa a numero e lo salvo nella variabile addedWeight
  const addedWeight = parseInt(userInput);
  console.log("peso aggiunto", addedWeight);

  // aggiungo il peso alla variabile weight
  weight += addedWeight;
  console.log("peso totale", weight);

  iterationCount++;
}

console.log("la bilancia segna", weight);
console.log("ci sono volute", iterationCount, "pesate");
