// COSTRUTTO IF

// if è una parola riservata che attiva la valutazione di un dato, che se risultante positivo, farà scattare l'esecuzione del suo blocco
// in alternativa può (non obbligatoriamente) far scatenare un blocco alternativo

// if(condizione da valutare) {
//
// blocco di codice da eseguire se la condizione si verifica (diventa true)
//
// }

const person = {
  name: "Mario",
  age: 19,
  eyeColor: "brown"
};

// if (person.age >= 18 && (person.eyeColor === "blue" || person.eyeColor === "azure")) {
//   console.log("Benvenuto, ragazzo. Hai degli occhi azzurri bellissimi");
// } else if (person.age >= 18 && person.eyeColor === "green") {
//   console.log("Ciao, begli occhi verdi!");
// } else {
//   console.log("ritorna quando avrai degli occhi azzurri");
// }

if (person.age >= 18) {
  // cominciamo a valutare l'aspetto se l'età è giusta

  if (person.eyeColor === "blue" || person.eyeColor === "azure") {
    console.log("Benvenuto, ragazzo. Hai degli occhi azzurri bellissimi");
  } else if (person.eyeColor === "green") {
    console.log("Ciao, begli occhi verdi!");
  } else {
    console.log("ritorna quando avrai degli occhi azzurri");
  }
} else {
  // mandiamo via la persona se è minorenne
  console.log("torna quando compi 18 anni");
}

const num = 29;

let check = false;

if (num >= 50) {
  console.log("il numero è maggiore o uguale a 50");

  if (num < 100) {
    console.log("il numero è anche minore di 100");
  }
} else if (num >= 30) {
  console.log("il numero è 30 o maggiore, ma inferiore a 50");
} else {
  console.log("il numero è inferiore a 30");

  check = true;
}

if (check) {
  alert("abbiamo finito, non c'è altro da fare");
}
