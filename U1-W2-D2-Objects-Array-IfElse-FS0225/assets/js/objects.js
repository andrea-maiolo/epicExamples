// OGGETTI

/*
    Un Oggetto in JavaScript è una struttura che ci consente di modellare entità del mondo reale.
    Ovvero in tutte quelle situazioni in cui non ci bastano stringhe, numeri, booleani, ecc..
    Avemo quindi bisogno di aggregare più informazioni dentro un'unica variabile/costante.

    L'oggetto è una struttura delimitata da GRAFFE con all'interno coppie CHIAVE - VALORE separate da VIRGOLE

    Useremo gli oggetti quando dovremo descrivere entità più complesse di un singolo valore.

    Creare variabili separate per nome, cognome, età, regione, ecc. non ha più senso, se queste si riferiscono alla stessa persona/entità
*/

const teacher = {
  name: "Stefano",
  surname: "Miceli",
  age: 35,
  hasWebcam: true,
  location: {
    "zip-code": 33100,
    region: "FVG",
    country: "Italy",
    coordinates: {
      lat: 49.728,
      lon: 25.272
    }
  },
  "e-mail": "stefano@epicode.it",
  "is Live Now": true,
  toBeDeleted: "cancellami"
};

console.log(teacher); // Object

// DOT NOTATION
console.log(teacher.name); // String ==> "Stefano"
console.log(teacher.surname); // String ==> "Miceli"
console.log(teacher.age); // Number ==> 35

console.log(teacher.location.coordinates.lat);
console.log(teacher.location.coordinates.lon);

// SQUARE BRACKETS NOTATION
console.log(teacher["age"]); // sconsigliato, usa la dot notation al posto delle quadre
console.log(teacher["location"]["coordinates"]["lat"]); // sconsigliato, usa la dot notation al posto delle quadre
console.log(teacher["location"]["coordinates"]["lon"]); // sconsigliato, usa la dot notation al posto delle quadre

// console.log(teacher.e - mail); // non possiamo mai accedere ad una proprietà "e-mail" tramite la dot notation
// ci tocca ricorrere alla square brackets notation
console.log(teacher["e-mail"]); // "stefano@epicode.it"
console.log(teacher["is Live Now"]); // true
console.log(teacher.location["zip-code"]); // 33100
// console.log(teacher.location.zip - code); // ERROR
// la square brackets ha anche un superpotere!
// poter valutare valori dinamici (varibili) o espressioni al suo interno

console.log(teacher["e" + "-" + "mail"]); // teacher["e-mail"] // "stefano@epicode.it"

const propertyToLookUpFor = "hasWebcam";
console.log(teacher[propertyToLookUpFor]); // teacher["hasWebcam"] // true

// AGGIUNGERE UN VALORE PROGRAMMATICAMENTE
console.log(teacher);

console.log(teacher.height); // undefined
// da questo momento l'oggetto teacher acquisirà una coppia chiave:valore per height
teacher.height = 180;
console.log(teacher.height); // 180

// inseriamo la temperatura dentro la location di teacher

console.log(teacher.location.temp); // undefined
teacher.location.temp = 12;
console.log(teacher.location.temp); // 12

// ELIMINARE UNA PROPRIETA'
console.log(teacher.toBeDeleted); // "cancellami"
delete teacher.toBeDeleted;
console.log(teacher.toBeDeleted); // undefined

// CLONAZIONE DI OGGETTI

const num1 = 10;
const num2 = 5;
// nel caso di primitive, i valori si copiano in maniera letterale
let num3 = num1;
num3 = num3 + 2;

console.log("num1 dopo modifica", num1);
console.log("num3", num3);

const firstTeacherCoordinates = teacher.location.coordinates;
// NON HO CLONATO COORDINATES, ho semplicemente creato un nuovo riferimento che punta alla stessa area di memoria dell'oggetto coordinates originale

const cat = {
  name: "fluffyball",
  age: 2,
  furColor: "orange"
};
// quando abbiamo a che fare con riferimenti più complessi (oggetti, array, funzioni) che non siano primitive, quando cerchiamo di clonarli
// dovremo usare dei diversi accorgimenti per fare la clonazione effettiva, altrimenti staremmo semplicemente creando una nuova etichetta che
// punterà allo stesso riferimento originario
const cat2 = cat; // cat2 in realtà è sempre cat

// cat2.name = "Geronimo"; // fare questo modificherà il nome di cat
// console.log(cat);
// console.log(cat2);

// Metodo 1) clonazione superficiale (shallow copy)
// il vantaggio di questo metodo è che si possono mettere insieme le proprietà-valore di più oggetti all'interno di un unico
// Object.assign({}, fonte1, fonte2, fonte3);

const cat3 = Object.assign({}, cat);
cat3.name = "Garfield";

console.log(cat);
console.log(cat3);

// Metodo 2) clonazione profonda (deep copy)

const teacher2 = structuredClone(teacher);

teacher2.location.region = "Tuscany";
teacher2.name = "Riccardo";
teacher2.surname = "Gulin";
console.log(teacher);
console.log(teacher2);
