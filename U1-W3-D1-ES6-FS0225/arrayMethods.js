// FOREACH
// forEach non è altro che un altro modo di ciclare un array
// non ha nessun valore di ritorno, lo possiamo utilizzare solo per accedere all'elemento dell'array per farne quello che vogliamo

const fruits = ["apple", "pear", "kiwi", "ananas", "orange", "grapes"];

console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
  const fruit = fruits[i];
}

// il metodo mi chiede una funzione per descrivere le operazioni da svolgere
// fruits.forEach(function (fruit) {
//   console.log("FRUIT", fruit);
// });

let fruitsCombined = "";

fruits.forEach((fruit, i) => {
  // per ogni esecuzione di questa funzione, fruit mi rappresenterà un elemento sempre diverso (in posizione diversa dell'array)
  console.log("FRUIT " + i, fruit);

  fruitsCombined += fruit;
});

console.log(fruitsCombined);

// MAP
// ha lo scopo di MODIFICARE gli elementi di un array e ritornarli in un nuovo array (senza alterare l'originale)
// ritorna lo stesso numero di elementi di partenza

// quello che ritorna la funzione del map, sarà il nuovo elemento che prenderà posto nel nuovo array
const mappedFruits = fruits.map(fruit => fruit.toUpperCase() + "!");
console.log(mappedFruits);
const generateLis = fruits.map(fruit => `<li>${fruit}</li>`);
console.log(generateLis);

const people = [
  { name: "Stefano", kudos: 1000 },
  { name: "Davide", kudos: 3000 },
  { name: "Paolo", kudos: 20 },
  { name: "Mauro", kudos: 1 },
  { name: "Valeria", kudos: 500 }
];

const peopleNames = people.map(obj => obj.name);

const peopleNames2 = [];
people.forEach(obj => peopleNames2.push(obj.name));

console.log("PEOPLE", peopleNames);
console.log("PEOPLE2", peopleNames2);

// FILTER
// ha lo scopo di ridurre potenzialmente una collezione, con solo elementi che passano una condizione, e ritornare un array con questi elementi.
// il filter ritorna solo gli elementi che ritornano true dalla funzione, quindi potenzialmente un numero inferiore di elementi,
// se non proprio un array vuoto con 0 elementi

// il filter vuole che sia ritornato o true o false dalla funzione
const filteredElements = fruits.filter(fruit => fruit.length >= 5);
console.log(filteredElements);

const filteredPeople = people.filter(obj => obj.kudos >= 100);
console.log(filteredPeople);
const filteredPeopleLower = people.filter(obj => obj.kudos < 100);
console.log(filteredPeopleLower);

// REDUCE
// il reduce serve sempre a ciclare un array, e ridurne i valori in UN SINGOLO VALORE DI RITORNO

// array.reduce((accumulatore, elementoCorrente) => [operazione da svolgere], [valore iniziale di partenza] )
const numArr = [14, 0, 140, 2, 55];
console.log(numArr);

const reduced = numArr.reduce((accumulator, currentValue) => {
  console.log("ACCUMULATOR", accumulator);
  console.log("CURRENT VALUE", currentValue);

  return accumulator + currentValue;
  // il valore dopo la virgola è il secondo argomento del reduce e rappresenta un "initialValue" ovvero il valore iniziale del nostro accumulator
  // che quindi sarà 0 al primo giro e non più 14 (il primo elemento dell'array)
}, 0);

console.log(reduced);

const reducedPeople = people.reduce((accumulator, currentValue) => {
  console.log("ACCUMULATOR", accumulator);
  console.log("CURRENT VALUE", currentValue.kudos);

  return accumulator + currentValue.kudos;
  // il valore dopo la virgola è il secondo argomento del reduce e rappresenta un "initialValue" ovvero il valore iniziale del nostro accumulator
}, 0);

console.log(reducedPeople);

const reducedNames = peopleNames.reduce((accumulator, currentValue) => {
  return accumulator + " " + currentValue;
}, "");

console.log(reducedNames);

// const reducedNamesIntoArray = people.reduce((accumulator, currentValue) => {
//   console.log("ACC", accumulator);
//   console.log("CURR", currentValue);
//   return accumulator.concat(currentValue.name);
// }, []);

// const reducedNamesIntoArray = people.reduce((accumulator, currentValue) => {
//   console.log("ACC", accumulator);
//   console.log("CURR", currentValue);
//   return [...accumulator, currentValue.name];
// }, []);
const reducedNamesIntoArray = people.reduce((accumulator, currentValue) => [...accumulator, currentValue.name], []);

console.log(reducedNamesIntoArray);
