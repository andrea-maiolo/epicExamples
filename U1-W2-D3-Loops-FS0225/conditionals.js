// CONDIZIONALI IF/ELSE
const num = 4;

// if (num <= 10) {
//   console.log("il numero è minore di 10");
// }

// if (num > 5 && num < 10) {
//   console.log("il numero è compreso tra 5 e 10");
// }

// se vogliamo evitare che si scatenino entrambe in contemporanea:

if (num >= 10) {
  console.log("il numero è maggiore di 10");
} else if (num > 5 && num < 10) {
  console.log("il numero è compreso tra 5 e 10");
} else {
  console.log("il numero è più picolo di 5");
}

const data = {
  message: ""
};

const fruit = "litches";

// if (fruit === "apple") {
//   data.message = "una mela al giorno toglie il medico di torno";
// } else if (fruit === "banana") {
//   data.message = "ne vanno pazzi gli scimpanzè";
// } else if (fruit === "papaya") {
//   data.message = "zuccherino e sbarazzino";
// } else {
//   window.alert("questo frutto neanche lo contemplavo");
// }

// CONDIZIONALE SWITCH

// switch(valore da valutare) {
//  case <valore cercato>:
//     codice da eseguire in caso di corrispondenza
//  break;
//  case <valore cercato2>:
//      codice da eseguire in caso di corrispondenza
//  break;
//  case <valore cercato3>:
//      codice da eseguire in caso di corrispondenza
//  break;
//  default:
//      codice eseguito in caso "else" cioè quando nessun case ha trovato corrispondenza
// }

switch (fruit) {
  case "apple":
    data.message = "una mela al giorno toglie il medico di torno";
    break;
  case "banana":
    data.message = "ne vanno pazzi gli scimpanzè";
    break;
  case "mango":
    console.log("siamo entrati in mango");
  // in caso di mango darò lo stesso messaggio che avrei dato per papaya
  // volutamente non metto un break per passare ad eseguire il case successivo
  case "papaya":
    data.message = "zuccherino e sbarazzino";
    break;
  default:
    window.alert("questo frutto neanche lo contemplavo");
}

// console.log("DATA OBJECT" + data);
// console.log(`DATA OBJECT ${data}`);
console.log("DATA OBJECT", data); // modalità migliore per visualizzare un oggetto con relativa etichetta

// se il messaggio è vuoto NON visualizzare il console.log

if (data.message !== "") {
  // console.log("IL FRUTTO SELEZIONATO E'", fruit, "IL CONTENUTO DEL MESSAGGIO E':", data.message);
  // console.log("IL FRUTTO SELEZIONATO E' " + fruit + " IL CONTENUTO DEL MESSAGGIO E': " + data.message);
  console.log(`IL FRUTTO SELEZIONATO E' ${fruit} IL CONTENUTO DEL MESSAGGIO E': ${data.message}`);
}

// SWITCH E OPERATORI LOGICI
// in questo caso cercheremo corrispondenza diretta con un true o con un false posizionato tra le parentesi dello switch
// e nei singoli case JS valuterà le comparazioni singolarmente, a questo punto JS entrerà nel PRIMO case che si sarà risolto a true
// avremo quindi corrispondenza tra il true nelle parentesi tonde con il true del case.

switch (true) {
  case num > 10:
    console.log("il numero è maggiore di 10");
    break;
  case num > 5 && num < 10:
    console.log("il numero è compreso tra 5 e 10");
    break;
  case num > 0 && num <= 5:
    console.log("il numero è maggiore di 0 e minore di 5");
    break;

  default:
    console.log("numero fuori range");
}
