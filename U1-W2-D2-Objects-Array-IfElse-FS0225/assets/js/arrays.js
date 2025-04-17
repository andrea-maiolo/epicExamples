// ARRAY
// Gli array sono liste di elementi POSSIBILMENTE eterogenei

const students = ["Matteo", "Dario", "Giovanni", "Luca"];
const numbers = [50, 0.5, 100, 2, 10];
const booleans = [true, false, false, true];
const movies = [
  { title: "Superman", year: 2010 },
  { title: "Batman", year: 2009 },
  { title: "Wonder Woman", year: 2012 }
];
const coords = [
  [30.2, 10.2],
  [25.5, 48.01],
  [10.5, 15.4]
];

console.log(coords[0][0]);

// const mixedArr = [true, "stefano", 40, {}]; // AIUTO! array ingestibile, non createlo così.

const secondStudent = students[1]; // Dario
console.log(secondStudent);

const thirdNumb = numbers[2]; // 100
console.log(thirdNumb);

const secondMovie = movies[1]; // {title: 'Batman', year: 2009}
const secondMovieTitle = movies[1].title; // 'Batman'

console.log("movies length", movies.length);

// COME MODIFICARE UN ARRAY

console.log("students length", students.length);

// .push() - Aggiungere un elemento alla fine della lista
students.push("Asia");

// accedere al primo elemento ==> 0
// accedere all'utlimo elemento ==> array.length - 1

students.push("Daniele");
students.push("Alessandro");
console.log("students length", students.length);

console.log("last student", students[students.length - 1]);

// .unshift() - Aggiungere un elemento all'inizio della lista
students.unshift("Gianni");
console.log(students);

// .pop() - Rimuove l'ultimo elemento della lista
students.pop();
console.log(students);

// .shift() - Rimuove il primo elemento dalla lista
students.shift();
console.log(students);

// .slice() - Serve a creare un NUOVO ARRAY a partire da una porzione dell'originale, otterremo un array di potenzialmente minor elementi
const selectedStudents = students.slice(1, 4);
console.log(selectedStudents);
console.log(students);

const clonedStudents = students.slice(); // uno slice senza nessun parametro mi fornirà un nuovo array con tutti gli elementi del primo (superficialmente)
clonedStudents.pop();
console.log(clonedStudents);
console.log(students);

// .splice() - Serve a modificare l'array sul quale lo si utilizza
console.log(clonedStudents);
// clonedStudents.splice(1, 1); // eliminiamo Dario
clonedStudents.splice(1, 1, "Gianluca"); // eliminiamo Dario e inseriamo Gianluca al suo posto
console.log(clonedStudents);

// inserisco un elemento in terza posizione senza eliminare nessun elemento
console.log(clonedStudents);
clonedStudents.splice(2, 0, "Mauro", "Renato");
console.log(clonedStudents);
