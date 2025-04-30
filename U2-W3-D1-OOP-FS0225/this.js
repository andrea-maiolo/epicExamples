const person = {
  name: "Gianni",
  surname: "Morandi",
  skills: ["HTML", "CSS", "JS"],
  sayMyName: function () {
    // il this ci fornisce un riferimento DINAMICO di quello che è l'oggetto di appartenenza,
    // per poterci riferire tranquillamente ai valori riportati all'esterno della funzione, ma sempre dentro all'oggetto
    console.log("OUTER THIS", this);

    console.log("Ciao sono " + this.name + " " + this.surname);

    // const innerFunction = function () {
    //  in questo contesto si è perso il corretto valore di this
    //  perché questa funzione si esegue in un contesto separato
    //  sarebbe il caso di ridefinirla come arrow function
    //  console.log("INNER THIS", this);
    // };

    // innerFunction();

    this.skills.forEach(skill => {
      // avendo usato l'arrow function come funzione interna, abbiamo raccolto il valore del this dal contesto esterno (quindi quello corretto)
      // da questo livello in poi se usiamo arrow functions ci daranno indietro sempre il valore corretto del this
      console.log("Sono " + this.name + " " + this.surname + " e sono specializzato in " + skill);
    });
  }
};

person.sayMyName();

const person2 = {
  name: "Gianni",
  surname: "Boncompagni",
  //   il metodo va creato con una funzione classica, questo esempio vi dà problemi sul riferimento del this (vedi esempio precedente per versione corretta)
  sayMyName: () => {
    // l'arrow function non è indicata per un uso come metodo di un oggetto
    // prende il valore del this dal contesto più esterno a dove viene definita
    // è come se stessimo saltando fuori dall'oggetto di appartenenza
    console.log(this);

    console.log("Ciao sono " + this.name + " " + this.surname);
  }
};

person2.sayMyName();

// mentre una variabile qualsiasi sarebbe statica nel suo valore nel tempo, ci possiamo avvalere di una keyword dinamica che
// conterrà sempre il giusto riferimento dell'oggetto di appartenenza se la funzione è stata creata con keyword function

// la variabile person potrebbe cambiare nel tempo, potrebbe non essere disponibile sempre ecc..
// potremmo volerci riferire ad un'altra variabile di un oggetto simile che sia nato dalla clonazione di questo (quindi avrebbe un nome diverso)
// con il THIS risolviamo questi problemi, perché acquisirà come valore il riferimento all'oggetto di appartenenza in automatico.

// una funzione non associata a nessun metodo di oggetto non vi darà un valore this utilizzabile
const anyFunc = function () {
  console.log(this);
};
