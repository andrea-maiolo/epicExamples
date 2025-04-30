// GESTIONE ID:
// se la pagina si avvia con un parametro appId nella URL allora dentro la variabile id qui sotto avremo una stringa, altrimenti avremo null
// sulla base di questo valore alcuni dei prossimi passaggi reagiranno diversamente
const params = new URLSearchParams(window.location.search);
const id = params.get("appId");

console.log("ID", id);

// variabili URL e method verranno create in maniera diversa a seconda della presenza o meno di un valore dentro la variabile id
// questo farà sì che il bottone del form agirà in maniera diversa a seconda della presenza o meno dell'id nella barra degli indirizzi
const URL = id ? "https://striveschool-api.herokuapp.com/api/agenda/" + id : "https://striveschool-api.herokuapp.com/api/agenda/";
const method = id ? "PUT" : "POST";

// prendiamo i nodi che ci serviranno in seguito
const form = document.getElementById("backoffice-form");
const delBtn = document.getElementById("delete-btn");

// gestiamo cosa succederà al caricamento iniziale della pagina
window.onload = function () {
  const subtitle = document.getElementById("subtitle");
  //  verifichiamo la presenza dell'id
  //  quando sarà presente faremo scatenare alcune cose che non capiteranno se l'id invece sarà null
  if (id) {
    // se siamo qui significa che nella URL è presente l'id come parametro
    subtitle.innerText = "— Modifica risorsa";

    // visualizziamo il bottone delete (solo in modalità modifica)
    delBtn.classList.remove("d-none");

    // chiediamo al server quali dati avesse la risorsa che stiamo cercando di modificare (quella con l'id presente nella URL)
    fetch(URL)
      .then(resp => {
        if (!resp.ok) {
          throw new Error("Errore nella fetch");
        }

        return resp.json();
      })
      .then(appointment => {
        // qui abbiamo ottenuto di nuovo le informazioni che ci servono: ovvero i dati dell'appuntamento
        // li applichiamo ai campi del form:
        // prendiamo il nodo del singolo campo per poi modificarne il value con i valori contenuti nell'oggetto appointment ricevuto dal server
        document.getElementById("name").value = appointment.name;
        document.getElementById("description").value = appointment.description;
        document.getElementById("price").value = appointment.price;
        document.getElementById("time").value = appointment.time.split(".")[0];
      })
      .catch(error => console.log(error));

    //  *** Fine dei processi automatici al caricamento della pagina con ID nella URL ***
  } else {
    // questo è tutto quello che avviene in alternativa alla presenza dell'id, ovvero modifichiamo solamente il testo del sottotitolo per scrivere "crea risorsa"
    // non verrà fatta la fetch in questo caso perché non occorre pre-popolare i campi se siamo in modalità creazione di nuova risorsa
    subtitle.innerText = "— Crea risorsa";
  }
};

// qui gestiamo l'invio del form
form.onsubmit = function (e) {
  // questa funzione si attiva solo quando l'utente clicca il botton submit
  e.preventDefault(); // evitiamo il refresh della pagina

  //   prendiamo i nodi dei campi input
  const nameInput = document.getElementById("name");
  const descriptionInput = document.getElementById("description");
  const priceInput = document.getElementById("price");
  const timeInput = document.getElementById("time");

  //  generiamo un nuovo oggetto con i valori dei vari campi input
  //  che invieremo al server convertito a stringa
  const newAppointment = {
    name: nameInput.value,
    description: descriptionInput.value,
    price: priceInput.value,
    time: timeInput.value
  };

  // la URL e il method dipenderanno da come si sono create queste due variabili nelle prime righe di questo file
  fetch(URL, {
    method: method,
    body: JSON.stringify(newAppointment), // conversione a stringa dell'oggetto precedentemente creato
    headers: {
      "Content-Type": "application/json"
      //   Authorization: "Bearer [tuo token]"
    }
  })
    .then(resp => {
      console.log(resp);
      if (!resp.ok) {
        throw new Error("Errore nella fetch");
      }
      return resp.json();
    })
    .then(createdAppointment => {
      // qui abbiamo ottenuto l'oggetto in risposta dal server
      // verifichiamo se la pagina è in modalità creazione o modifica (esattamente come abbiamo fatto più sopra)
      if (id) {
        //  saremo qui se siamo in modalità modifica (e non vogliamo resettare il form ad ogni invio)
        alert("hai modificato l'appuntamento " + createdAppointment.name);
      } else {
        // saremo qui se siamo in modalità creazione
        alert("appuntamento con id " + createdAppointment._id + " creato correttamente");
        // qui invece puliamo i campi per permettere l'inserimento da subito di nuovi dati
        form.reset();
      }
    })
    .catch(error => console.log(error));

  console.log("SUBMIT", newAppointment);
};

// qui gestiamo il click del bottone delete
delBtn.onclick = function () {
  // sarebbe meglio chiedere conferma all'utente per effettuare un'operazione così distruttiva (modale bootstrap o confirm() di JS)
  fetch(URL, { method: "DELETE" })
    .then(resp => {
      if (resp.ok) {
        alert("hai correttamente eliminato la risorsa");
        // una volta chiuso l'alert l'utente verrà dirottato in homepage
        // N.B. se vuoi sostituire questo alert con un alert di bootstrap dovrai usare un timeout per ritardare il cambio pagina,
        // o l'utente non avrà tempo di leggere l'avviso prima che questa cambi
        window.location.assign("./index.html");
      }
    })
    .catch(error => console.log(error));
};
