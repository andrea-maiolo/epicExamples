// TASKS:

// ✅ 1) Capire quante celle generare per il mese corrente (dovrà funzionare per OGNI mese, non solo tarato sul mese attuale)

// ✅ 2) Con il numero di giorni ricavato dobbiamo generare il giusto numero di celle corrispondenti

// ✅ 3) Il giorno corrente dovrebbe "illuminarsi" (lo coloriamo di viola)

// ✅ 4) Visualizziamo il nome del mese nell'h1 (sempre in modo dinamico)

// ✅ 5) Rendere cliccabili le celle per poter salvare gli appuntamenti in quel dato giorno, e visualizza quella cliccata con una selezione(bordo attorno)
// ✅ 5b) riporta il numero del giorno nel "meetingDay" (in basso a sinistra) ad ogni click

// ___________________________________________________________________________________________

// ✅ 6) Salvare l'appuntamento con l'ora e il testo dell'appuntamento per il giorno selezionato
//    6b) (lo salveremo in un array che ci rappresenta il calendario e la singola cella)

// ✅ 7) devo poter selezionare altri giorni e inserire appuntamenti anche per loro
// ✅ 7b) e visualizzare gli appuntamenti del giorno cliccato appena dopo il click

// ✅ 8) la cella di un giorno con appuntamenti dovrebbe avere un feedback visivo che faccia capire la presenza di appuntamenti per quel giorno

// ------------------------------------------------------------------------------------------------

// 6) creiamo la struttura del calendario
const appointments = [];

/* 
dal for loop che ci genera le celle, possiamo pushare un array vuoto per creare la seguente struttura:
[
  [],[],[],[],[],[],[],
  [],[],[],[],[],[],[],
  [],[],[],[],[],[],[],
  [],[],[],[],[],[],[],
  [],[],[]
]

*/

const now = new Date();

// 1) questa funzione restituisce in modo dinamico il numero totale di giorni in questo mese
const daysInThisMonth = function () {
  const getYear = now.getFullYear();
  const getMonth = now.getMonth();
  // const getDate = now.getDate();

  // console.log("YEAR", getYear);
  // console.log("MONTH 0 based", getMonth);
  // console.log("DAY OF THE MONTH", getDate);

  // abbiamo creato una data corrispondente all'ultimo giorno del mese successivo (getMonth + 1),
  // l'ultimo 0 ci rappresenta l'essere tornati indietro di un giorno rispetto al 1 Aprile ==> 31 Marzo
  const lastDayDate = new Date(getYear, getMonth + 1, 0);
  // console.log("LAST DAY DATE", lastDayDate);
  const lastDayOfThisMonth = lastDayDate.getDate();
  // console.log("LAST DAY NUMBER", lastDayOfThisMonth);

  return lastDayOfThisMonth; // 31 (alla data attuale)

  // return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate()
};

const changeDayNumber = function (num) {
  // prendo lo span del numero di giorno
  const dayNumberSpan = document.getElementById("newMeetingDay");
  // e gli modifico il testo col numero ricevuto come parametro (vedi momento dell'esecuzione di changeDayNumber)
  dayNumberSpan.innerText = num;
  // si aggiunge anche una classe allo span per renderlo più gradevole graficamente
  dayNumberSpan.classList.add("hasDay");
};

const unselectPreviousDay = function () {
  // funzione chiamata dentro all'onclick della singola cella dentro a createDays
  const previouslySelectedDay = document.querySelector(".selected");

  if (previouslySelectedDay) {
    // se finiamo qui, verosimilmente dal secondo click in poi, rimuoveremo la classe all'elemento trovato
    previouslySelectedDay.classList.remove("selected");
  }
};

const createDays = function (numOfDays) {
  const calendar = document.getElementById("calendar");
  // 2) INIZIO CREAZIONE
  for (let i = 0; i < numOfDays; i++) {
    // 6b)per numOfDays di volte staremo pushando un nuovo array (che mi rapprenta la singola cella del calendario)
    appointments.push([]);

    const dayCellDiv = document.createElement("div"); // creo un nuovo div vuoto per ogni ciclo
    dayCellDiv.classList.add("day"); // gli assegno la classe che lo farà effettivamente visualizzare come una cella e non un blocco qualunque

    const dayCellH3 = document.createElement("h3");
    dayCellH3.innerText = i + 1; // uso la i per il numero progressivo che avrà, 0, 1, 2, 3, 4, ecc...

    // 5a) rendo cliccabili le celle, per potergli mettere il bordo
    dayCellDiv.onclick = function (event) {
      // ogni volta che clicco su una cella, attiviamo la ricerca di un precedente elemento selezionato
      // non verrà trovato al primo click in assoluto, ma dal secondo in poi, disattiveremo la classe sul precedente...
      unselectPreviousDay();
      // prima di applicarla al nuovo elemento, quello cliccato
      event.currentTarget.classList.add("selected");

      // 5b) cambiamo il numero del day number in basso a sinistra
      changeDayNumber(i + 1);

      // 7b) gestisco la visualizzazione degli appuntamenti per ogni cella cliccata
      showAppointments(i);
    };

    // 3) ILLUMINO IL GIORNO CORRENTE
    const today = now.getDate(); // il numero del giorno di oggi (27 alla data attuale)
    if (i + 1 === today) {
      dayCellH3.classList.add("color-epic");
    }

    // 2) FINE CREAZIONE
    dayCellDiv.appendChild(dayCellH3); // inserisco l'h3 col testo nel div del giorno
    calendar.appendChild(dayCellDiv); // inserisco la cella nel calendario (e da questo momento diventerà visibile nella pagina)
  }
};

const showAppointments = function (index) {
  const appointmentsContainer = document.getElementById("appointments");
  // uso l'index ricevuto per andare a prendermi l'array del giorno selezionato dall'array appointments
  // ricevo quindi l'array del giorno con i suoi appuntamenti, oppure vuoto
  const appointmentsOnSelectedDay = appointments[index];

  // prendo la lista dove inserire i nuovi <li>
  const ul = document.getElementById("appointmentsList");
  ul.innerHTML = ""; // svuotiamo la lista per evitare ripetizioni PRIMA di ciclare con il forEach

  // se il giorno contiene degli appuntamenti
  if (appointmentsOnSelectedDay.length > 0) {
    // allora li cicliamo e generiamo tanti <li> quante sono le stringhe presenti in quell'array
    appointmentsOnSelectedDay.forEach(appointmentStr => {
      const li = document.createElement("li");
      li.innerText = appointmentStr; // inserisco la stringa trovata nell'array nell'li appena generato

      ul.appendChild(li);
    });
    // e rendiamo la sezione visibile
    appointmentsContainer.style.display = "block";
  } else {
    // altrimenti la sezione viene nascosta, nel caso in cui l'array di appuntamenti sia vuoto
    appointmentsContainer.style.display = "none";
  }
};

// 6 & 7) questa funzione è agganciata all'onsubmit del form (vedi in fondo a questo file)
const saveMeeting = function (e) {
  // obbligatorio farlo SEMPRE quando si ha a che fare con la funzione associata al submit di un form
  e.preventDefault();

  // prendiamo il riferimento agli input
  const meetingTime = document.getElementById("newMeetingTime");
  const meetingName = document.getElementById("newMeetingName");

  // usiamo i dati degli input per creare la stringa di appuntamento
  const meetingText = meetingTime.value + " — " + meetingName.value;

  // prendiamo lo span del meeting day
  const dayNumberSpan = document.getElementById("newMeetingDay");

  // valutiamo se il meeting day contiene ancora "Click on a Day", allora l'utente non ha mai cliccato una cella, e gli verrà mostrato un alert,
  if (dayNumberSpan.innerText !== "Click on a Day") {
    // se invece il testo non è quello saremo qui dentro
    // convertiamo la stringa di numero in numero, e poi col -1 in un valore di indice corrispondente alla posizione di quel giorno
    // nell'array appointments

    // 7) se seleziono un altro giorno
    const dayIndex = parseInt(dayNumberSpan.innerText) - 1;
    console.log("DAY INDEX", dayIndex);

    // 6b) sfruttiamo il numero contenuto in basso a sinistra (trasformato in indice)
    // per selezionare una delle celle interne al nostro array, e aggiungere la stringa ricavata dagli input
    appointments[dayIndex].push(meetingText);

    // svuotiamo i campi per accettare nuovi appuntamenti
    meetingTime.value = "";
    meetingName.value = "";

    // uso showAppointments per visualizzare l'appuntamento appena creato sotto al form di inserimento
    showAppointments(dayIndex); // qui dentro regoliamo la visualizzazione della sezione e la creazione di nuovi <li>

    // 8) dopo la creazione dell'appuntamento, valuto se aggiungere il puntino alla cella che dà un feedback visivo sulla presenza
    // di appuntamenti per quella giornata

    // avverrà solo dopo il primo inserimento, quando l'array length è 1
    // le altre volte salteremo questo passaggio
    if (appointments[dayIndex].length === 1) {
      const selectedCell = document.querySelector(".selected");
      const dot = document.createElement("span");
      dot.classList.add("dot");
      selectedCell.appendChild(dot);
    }
  } else {
    alert("Devi prima cliccare un giorno nel calendario");
  }
};

// 4) Cambio il nome del mese con questa funzione in modo dinamico
const monthNames = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];

const printCurrentMonthInH1 = function () {
  const h1 = document.querySelector("h1");
  const monthIndex = now.getMonth(); // 2 (alla data attuale)
  const monthName = monthNames[monthIndex];

  h1.innerText = monthName;
};

// window.onload = function () {
// il metodo onload si scatena dopo che tutte le risorse della pagina si sono caricate (più lento di un DOMContentLoaded)
// const numberOfDays = daysInThisMonth();
// createDays(numberOfDays);
// };

// 👇👇👇👇 PUNTO DI INIZIO nella costruzione del nostro calendario
window.addEventListener("DOMContentLoaded", function () {
  // se siamo qui dentro la pagina ha finito di caricarsi
  printCurrentMonthInH1();

  const numberOfDays = daysInThisMonth();
  createDays(numberOfDays);

  const form = document.querySelector("form");
  form.onsubmit = saveMeeting;
});
