const URL = "https://striveschool-api.herokuapp.com/api/agenda/";

const isLoading = boolean => {
  const spinner = document.querySelector(".spinner-border");

  if (boolean) {
    // togli d-none dalla classe per renderlo visibile
    spinner.classList.remove("d-none");
  } else {
    // aggiungi d-none come classe per renderlo invisibile
    spinner.classList.add("d-none");
  }
};

const generateAlert = message => {
  const container = document.getElementById("main-container");

  const alert = document.createElement("div");
  alert.className = "alert alert-danger";
  alert.role = "alert";

  alert.innerText = message;

  container.appendChild(alert);
};

const getAppointments = () => {
  // avvio il loader di caricamento
  isLoading(true);

  fetch(URL)
    .then(resp => {
      console.log(resp);
      //   condizione di guardia: se dovessimo entrare in questo if il throw ci farebbe saltare sia il return successivo, sia il prossimo then.
      if (!resp.ok) {
        // possiamo gestire gli errori in maniera più precisa, tenendo conto dello status code presente nella resp
        if (resp.status === 404) {
          throw new Error("Risorsa non trovata");
        } else if (resp.status >= 500) {
          throw new Error("Errore lato server");
        }
        // se nessuno degli altri if ha trovato riscontro allora lanceremo questo errore
        throw new Error("Errore nella fetch");
      }

      // questo return non verrà mai eseguito in caso di resp.ok === false
      // perché i precedenti throw hanno fermato l'esecuzione del codice e JS sarà saltato direttamente nel catch
      return resp.json();
    })
    .then(appointments => {
      // otteniamo l'array come parametro appointments
      // qui dentro ci saremo nel momento esatto in cui avremo ricevuto il dato,
      // è il punto giusto per fare tutta la DOM Manipulation che serve

      // isLoading(false); // l'abbiamo spostato nel finally più in basso

      // prendiamo il riferimento della lista nel quale inserire i nuovi elementi
      const ul = document.getElementById("appointment-list");

      // cicliamo appointments per generare tanti elementi "li" nella pagina quanti sono gli oggetti contenuti nell'array
      appointments.forEach(app => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between";
        // qui dentro stiamo creando il link che porterà alla pagina dettaglio con un id sempre diverso per ogni elemento creato
        li.innerHTML = `<span>${app.name}</span> <a href="./details.html?appId=${app._id}">VEDI DETTAGLI</a>`;
        ul.appendChild(li);
      });
    })
    .catch(error => {
      console.log(error);
      //   isLoading(false);

      // in caso di errore generiamo un avviso rosso nella pagina
      generateAlert(error.message);
    })
    .finally(() => {
      // il finally si attiva sia in caso di risoluzione positiva della promise, sia negativa
      isLoading(false);
    });
};

window.onload = function () {
  // questa funzione parte al caricamento della pagina (è il principio di tutto il processo)
  getAppointments();
};
