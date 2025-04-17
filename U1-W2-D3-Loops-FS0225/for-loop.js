// CICLO FOR
// si utilizza in genere per eseguire un blocco di codice un numero FINITO di volte
// ed è tipicamente utilizzato in combinaione con gli array per attraversarli da parte a parte

// sintassi:

// for(definizione contatore; condizione da valutare; incremento del contatore) {
//
//      codice da eseguire n volte
//
// }

for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log("----------------------------------------");

for (let i = 9; i >= 0; i--) {
  console.log(i);
}

console.log("----------------------------------------");

// sfruttiamo l'automatismo fornito dal loop per automatizzare un processo di inserimento di nuovi dati in un array inizialmente vuoto
const myArr = [];

// inutile farlo manualmente
// myArr.push(0);
// myArr.push(1);
// myArr.push(2);
// myArr.push(3);

// facciamoglielo fare al for loop dandogli come limite 100 (numero di iterazioni)
for (let i = 0; i < 100; i++) {
  myArr.push(i + 1);
}
console.log(myArr);

console.log("FINITO");

const animals = ["dog", "cat", "horse", "rabbit", "fish", "eagle"];

// anche in questo caso ha più senso automatizzare il nostro spostamento all'interno dell'array
// console.log(animals[0]);
// console.log(animals[1]);
// console.log(animals[2]);
// console.log(animals[3]);
// console.log(animals[4]);
console.log("LENGTH prima del pop", animals.length);
animals.pop();
animals.pop();
animals.pop();
console.log("LENGTH dopo il pop", animals.length);

for (let i = 0; i < animals.length; i++) {
  const animal = animals[i];

  //   console.log(animals[i]);
  console.log(animal);
  //   i due console log sono equivalenti
}
console.log("----------------------------------------");

const animals2 = ["whale", "parrot", "giraffe", "wolf", "dolphin"];

const selectedAnimals = [];

// for (let i = 0; i < animals2.length; i++) {
//   const animal = animals2[i];

//   if (animal.charAt(0) === "w") {
//     continue;
//   }

//   console.log(animal);
//   selectedAnimals.push(animal);
// }

for (let i = 0; i < animals2.length; i++) {
  const animal = animals2[i];

  //   if (animal.charAt(0) !== "w") {
  //     console.log(animal);
  //     selectedAnimals.push(animal);
  //   }
  if (!animal.startsWith("w")) {
    console.log(animal);
    selectedAnimals.push(animal);
  }
}
console.log(selectedAnimals);

for (let i = 0; i < animals2.length; i++) {
  const animal = animals2[i];
  if (animal === "giraffe") {
    break;
  }

  console.log(animal);
}

console.log("----------------------------------------");

// gestione di array di oggetti

const arrOfPeople = [
  { name: "Stefano", height: 180 },
  { name: "Ivan", height: 190 },
  { name: "Christian", height: 160 },
  { name: "Nicholae", height: 170 }
];

const arrOfPeopleNames = [];
let sumOfAllHeights = 0;

for (let i = 0; i < arrOfPeople.length; i++) {
  // ricorda che questo blocco di codice si ripete un numero arrOfPeople.length di volte
  const person = arrOfPeople[i]; // creo una variabile che mi rappresenti il singolo oggetto dell'array in questa iterazione
  // ad ogni cambio di valore di i, person acquisirà un valore diverso, in iterazioni diverse

  // console.log(arrOfPeople[i].name)
  // arrOfPeople[i] mi posiziona sull'elemento,
  // arrOfPeople[i].name mi prende la proprietà name dall'oggetto dell'elemento

  // semplificando potremmo scriverlo così:
  console.log(person.name); // visualizzo i nomi in console, uno dopo l'altro
  arrOfPeopleNames.push(person.name); // inserisco i nomi, uno dopo l'altro, in un nuovo array esterno

  // possiamo sfruttare il loop anche per le operazioni più disparate,
  // qui ad esempio decidiamo di sommare il valore di tutte le height dei nostri person in una variabile esterna
  //   sumOfAllHeights = sumOfAllHeights + person.height
  sumOfAllHeights += person.height;
}

console.log(arrOfPeopleNames); // dopo il for loop posso ammirare il mio lavoro, trovando l'array con tutti i nomi all'interno
console.log("La somma delle altezze è", sumOfAllHeights);
