// Questo è un file JavaScript esterno!
// questo foglio è collegato tramite il tag <script> nell'html tramite anche l'attributo src nel quale inseriremo il percorso a questo file.

// Ottimo per mantenere ordinato l'HTML e non appesantirlo di elementi non suoi (come neanche il tag <style> andrebbe tenuto nel <head>)
// sarà anche possibile applicare più di un file JS per uno stesso HTML

// console.log produce una direttiva di output che genera la visualizzazione del dato in console
console.log("CIAO SONO UN FILE JS ESTERNO!");

// alert produce la creazione di un pop-up BLOCCANTE nella pagina. Solo dopo averlo chiuso riprenderà l'esecuzione delle successive righe di codice
// window.alert("SONO UN AVVISO GENERICO");
console.log("mi visualizzerai dopo aver chiuso l'avviso");

console.log("_____________________________________");
// La professione dello sviluppatore software si basa sulla RISOLUZIONE DI PROBLEMI.
// I problemi si risolvono tramite PROCESSI LOGICI, e tramite la creazione di ALGORITMI.
// Un algoritmo è una sequenza FINITA di passaggi che portano da un problema alla sua risoluzione; e anzi, dato lo STESSO problema,
// lo STESSO algoritmo porterà alla STESSA RISOLUZIONE.

("Stefano");

// VARIABILE
// una variabile è un contenitore per un valore.
// serve a memorizzare un dato, spesso ricavato in un processo intermedio, in modo da poterlo poi utilizzare in un momento
// successivo del nostro algoritmo.

let myVariable; // undefined
// abbiamo in questo modo DEFINITO una variabile VUOTA. L'abbiamo chiamata myVariable
// e nasce senza un valore. Potremo decidere di inserirne uno a posteriori

// per assegnare un valore ad un contenitore vuoto o meno lo possiamo fare utilizzando
// l'operatore di assegnazione =

console.log(myVariable); // leggo il valore ==> undefined

myVariable = "flour"; // scrivo/sovrascrivo un valore

console.log(myVariable); // leggo il valore ==> "flour"

// variabile creata e assegnata nello stesso momento (più comune)
let anotherVariable = "pasta";
let myNumber = 100;
// console.log(myNumber);

let fakeNumb = "100";
// console.log(fakeNumb);

myNumber = 5;
// console.log(myNumber);
// myNumber = undefined; // azzero il valore portandolo alla condizione iniziale

let addition = 10;
console.log("ADDITION prima della riassegnazione:", addition);

addition = addition + myNumber;
// semplificando possiamo scriverla così:
// addition += myNumber
console.log("ADDITION DOPO l'operazione:", addition);

console.log("_____________________________________");

// TIPI DI VALORI PRIMITIVI
// string --> "farina", "Stefano", "frase di senso compiuto divisa da spazi"
// number --> 5, 10, 55, 0, 0.15, -12, NaN
// boolean --> true, false
// undefined --> assenza di valore generico (tipicamente il valore assegnato in automatico ad una variabile vuota)
// null --> indica l'assenza di valore valontaria (tipiacamente assegnata dallo sviluppatore)

// TIPI DI DATI STRUTTURALI (coming soon...)
// Array --> liste di valori
// Object --> modelli di entità più complesse
// Function --> pacchetto di istruzioni ripetibili

// possiamo chiedere a JavaScript di dirci qual è il tipo di dato contenuto in una variabile con l'operatore typeof
console.log(typeof fakeNumb);
console.log(typeof myNumber);

// in presenza di un'operazione di somma, tra un numero e una stringa, JS cercherà sempre di convertire il numero a stringa
// facendo poi un'operazione di CONCATENZATIONE tra stringhe.
let strangeSum = fakeNumb + myNumber;
console.log(strangeSum);

// CONCATENAZIONE TRA STRINGHE - unire due stringhe in una nuova unica stringa
let word1 = "Ciao";
let word2 = "Epicode";
let word3 = "Bellissimi";

let combinedWords = word1 + " " + word3 + " " + word2 + "rs!";

console.log(combinedWords);

let numb1 = 10;
let numb2 = 30;
let numb3 = 2;

console.log(numb1 - numb3);
console.log(numb2 / numb3);
console.log(numb1 * numb3);

// l'operatore % (modulo) ci ritorna indietro il resto di una divisione
console.log(17 % 3); // 2 ==> il resto di 17 / 3
console.log(12 % 2); // 0 ==> possiamo dire che il numero sia pari

// COSTANTI
const EPICODE_URL = "https://www.epicode.com";
const PI = 3.14;

// EPICODE_URL = "epicode.com";  ❌ una costante non è previsto che venga riassegnata
// PI = 50; ❌ una costante non è previsto che venga riassegnata ad un nuovo valore (se lo devi fare, dichiarala con let!)

// anche le let non posso ridefinirle ma SOLO RIASSEGNARLE
combinedWords = "altra parola"; // ✅ posso riassegnare una variabile a posteriori
// let combinedWords = "nuova" + " " + "parola"; ❌ non posso RIDEFINIRLA (con la keyword let)

// valori booleani - servono principalmente per creare un fulcro attorno al quale far
// prendere al programma una direzione o l'altra a seconda del valore ispezionato
let areYouDrunk = true;
let isUserAdult = true;
let hasUserDrivingLicense = false;

// COMPARAZIONI

// uguaglianza: ==, ===
//
// disuguaglianza: !=, !==

console.log("18 è uguale a '18'?", 18 === "18"); // false
console.log("18 è debolmente uguale a '18'?", 18 == "18"); // true ❌ sconsigliato, utilizza sempre l'uguaglianza e disuguaglianza stretta

console.log("18 è pari?", 18 % 2 === 0); // comparazione per uguaglianza stretta ==> se true significa che 18 è pari
console.log("7 è pari?", 7 % 2 === 0); // comparazione per uguaglianza stretta ==> se true significa che 7 è pari ==> sarà false perché 7 è dispari
console.log("stefano" !== "marco");
console.log("stefano" !== "stefano");
console.log("stefano" === "stefano");

// maggiore >
// maggiore o uguale >=
// minore <
// minore o uguale <=

console.log(numb1 > numb2);
console.log(numb1 > numb3);
console.log(numb3 >= 2);

const anyNumb = 15;

// AND - && (tutti i risultati devono essere true per ricevere true)
// OR - || (un solo risultato deve essere true per ricevere true)
// NOT - ! (inverte il valore booleano)

console.log("maggiore di 5 e minore di 20", anyNumb > 5 && anyNumb < 20);
//                                              true    &&     true    ==>  true

console.log("maggiore di 5 e minore di 20 e diverso da 15", anyNumb > 5 && anyNumb < 20 && anyNumb !== 15);
//                                                              true    &&     true     &&        false    ==>  false

const user1 = "Giovanni";
console.log(user1 === "stefano" || areYouDrunk === true);
//                  false       ||            true         ==> true

// abbiamo creato un NOR - nessuno dei valori descritti è accettabile (ci restituirebbe !(true))
console.log(!(user1 === "Marco" || user1 === "Antonio" || user1 === "Giovanni"));

//               !( false     !!         false       ||           true        ==> true) ==> false

// OPERATORE TERNARIO - serve a decidere quale tra due valori verrà assegnato ad una variabile

// sintassi:
// CONDIZIONE ? valore in caso true : valore in caso false

const age = 17;

// con il ternario possiamo far sì che il valore di una variabile non sia determinato a priori ma sia il programma a decidere,
// in base a dei valori forniti e comparati nelle modalità più disparate, in base alle esigenze:
const canUserEnter = age >= 18 ? "Yes" : "No";
console.log(canUserEnter); // No

const canUserOrGiovanniEnter = age >= 18 || user1 === "Giovanni" ? "Yes" : "No";
console.log(canUserOrGiovanniEnter); // Yes

const canUserAndGiovanniEnter = age >= 18 && user1 === "Giovanni" ? "Yes" : "No";
console.log(canUserAndGiovanniEnter); // No
