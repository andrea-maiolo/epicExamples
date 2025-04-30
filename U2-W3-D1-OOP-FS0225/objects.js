// JavaScript ha la particolarità di permetterci di creare oggetti con la cosiddetta NOTAZIONE LETTERALE,
// ovvero le {} come VALORE di VARIABILE

const obj = {}; // abbiamo creato il RIFERIMENTO (reference) in memoria di un elemento di tipo oggetto (vuoto)

// quando abbiamo a che fare con elementi che non sono PRIMITIVE questi si salveranno in memoria solo come REFERENCE.
// Avremo quindi solo l'indirizzo di quella entità all'interno della variabile, che ci punterà all'elemento vero e proprio se utilizzata.

// All'interno dell'oggetto possiamo anche assegnare come valori associati ad una proprietà tutti i tipi sia primitivi che non:
// string, number, boolean, null, undefined,

// ma anche:

// oggetti, array, funzioni (metodi)

console.log(obj.newProp);

// aver dichiarato l'oggetto come costante NON impedisce di modificare/aggiungere nuovi valori associati a delle nuove proprietà
// la const impedisce solo di sovrascrivere l'oggetto con altro oggetto o altra entità
obj.newProp = "new value";

// obj = null // non sarà possibile
console.log(obj.newProp);

const dog = {
  breed: "Jack Russel",
  age: 3,
  bark: function () {
    return "BAU";
  }
};

// Accedere a proprietà di oggetto (dot notation .)
console.log(dog.breed);
console.log(dog.age);

console.log(dog.bark()); // "BAU"

console.log("PRE DELETE", dog.age);
// eliminare una proprietà
delete dog.age; // da questo momento la poprietà age non esiste più su dog
console.log("POST DELETE", dog.age);

// ogni oggetto che creiamo, riceve in automatico, tramite un sistema prototipale, delle abilità e proprietà di default
// come per esempio hasOwnProperty, toString... ecc
console.log(dog);
console.log(dog.hasOwnProperty("eta"));
console.log(dog.toString());

const templateStr = `il mio animale è di tipo ${dog}`;
console.log(templateStr);

// document.body.innerHTML += "Il mio animale è " + dog; // "Il mio animale è [object Object]"
// document.body.innerHTML += "Il mio animale è " + JSON.stringify(dog); // possiamo stringhifizzarlo e avere una rappresentazione più fedele dell'oggetto
// posto che avrebbe comunque più senso estrarre i dati corretti da visualizzare nella stringa...
// document.body.innerHTML = document.body.innerHTML + "Il mio animale è un " + dog.breed;
document.body.innerHTML += "Il mio animale è un " + dog.breed;

// tutti i metodi pre-associati ai nostri elementi, derivano da un'ereditarietà derivante dal costruttore che li ha generati

// andiamo ad indagare la catena prototipale dei nostri elementi
console.log(dog.__proto__); // Object
console.log(dog.__proto__.__proto__); // null

const num = 5;
console.log(num.__proto__); // Number
console.log(num.__proto__.__proto__); // Object
console.log(num.__proto__.__proto__.__proto__); // null

const str = "hello";
console.log(str.__proto__); // String
console.log(str.__proto__.__proto__); // Object
console.log(str.__proto__.__proto__.__proto__); // null

const arr = [];
console.log(arr.__proto__); // Array
console.log(arr.__proto__.__proto__); // Object
console.log(arr.__proto__.__proto__.__proto__); // null

console.log(typeof arr); // il typeof risponde object anche nel caso di un array

// dovrei usare il metodo statico Array.isArray() ==> risponde true / false
console.log(Array.isArray(arr) ? "hai un array" : "quell'elemento non è un array");

// arr.from(); il metodo from essendo un metodo statico, va usato sul costruttore Array direttamente

console.log(Array.from("Hello World"));

const cat = {
  name: "felix",
  "fur-type": "long and very fluffly",
  "date.of.adoption": "01/01/2024",
  "number of years": 1,
  last_name: "the cat",
  ancestors: { mom: "Dasy", dad: "Lucifer" }
};

// console.log(cat.fur-type); // in questo caso interpreta il - come sottrazione, NON SI PUO' FARE

// SQUARE BRACKETS NOTATION - quando abbiamo a che fare con proprietà definite con caratteri speciali
console.log(cat["fur-type"]);
console.log(cat["number of years"]);
console.log(cat["date.of.adoption"]);

// con la SQUARE BRACKETS NOTATION possiamo anche andare a valutare valori dinamici
const propertyName = "fur-type";

const property1 = "fur";
const property2 = "type";

// le quadre ci permettono di valutare anche valori dinamici
console.log("Dynamic", cat[propertyName]); // cat["fur-type"] ==> "long and very fluffly"
// console.log("Dynamic", cat.propertyName); // undefined

// ...o espressioni
console.log("Dynamic", cat[property1 + "-" + property2]); // cat["fur-type"] ==> "long and very fluffly"
console.log("Dynamic", cat[property1.concat("-").concat(property2)]); // cat["fur-type"] ==> "long and very fluffly"

const validProperties = Object.keys(cat); // ['name', 'fur-type', 'date.of.adoption', 'number of years', 'last_name']
console.log(validProperties);

console.log(cat[validProperties[1]]); // cat["fur-type"]
console.log(cat[validProperties.at(-1)]); // cat['last_name']

// metodi di clonazione degli oggetti

const object1 = {
  bobby: "somestring",
  lee: 42
};

const object2 = {};

for (const [first, second] of Object.entries(object1)) {
  console.log("first", first);
  console.log("second", second);

  object2[first] = second;
}

console.log(object2);

// clonare oggetti con metodi specifici:

// Object.assign() - clonazione superficiale di oggetto

const cat1 = cat; // SBAGLIATO. non abbiamo clonato l'oggetto, ma abbiamo semplicemente creato una nuova etichetta per accedere allo stesso oggetto cat
// ATTENZIONE che modificare cat1 farà modificare anche cat, di conseguenza i dati che troverà il codice successivo saranno modificati

const cat2 = Object.assign({}, cat);
cat2.name = "garfield";
cat2.last_name = "red";

cat2.ancestors = Object.assign({}, cat.ancestors);
cat2.ancestors.mom = "Bella";
cat2.ancestors.dad = "Tony";

console.log(cat2);
console.log(cat);

// Spread operator - clonazione superficiale con sintassi abbreviata

const cat3 = { ...cat, ancestors: { ...cat.ancestors } };

cat3.name = "bobby";
cat3.last_name = "lee";

// cat3.ancestors = { ...cat.ancestors };
cat3.ancestors.mom = "Lara";
cat3.ancestors.dad = "Luca";

console.log(cat3);
console.log(cat);

// CLONAZIONE PROFONDA - structuredClone()
const cat4 = structuredClone(cat);
cat4.name = "Speedy";
cat4.last_name = "Gonzales";

cat4.ancestors.mom = "Senora";
cat4.ancestors.dad = "Senor";

console.log(cat4);
console.log(cat);
