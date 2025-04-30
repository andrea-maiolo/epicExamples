// costruisco l'oggetto avanzato per gestire i parametri a partire da window.location.search che è
// la sola stringa dinamica con i parametri presenti nella URL (conterrà dinamicamente l'id presente in quel momento)
const params = new URLSearchParams(window.location.search);
const id = params.get("appId"); // andiamo a prelevare il valore corrispondente alla chiave appId (da noi creata)

const URL = "https://striveschool-api.herokuapp.com/api/agenda/";

// facciamo una fetch a URL + id specifico => ci restituirà l'oggetto della singola risorsa
fetch(URL + id)
  .then(resp => resp.json())
  .then(appointment => {
    const container = document.getElementById("appointment-details");

    container.innerHTML = `
                    <h1>${appointment.name}</h1>
                    <p class="font-monospace">${new Date(appointment.time).toLocaleString()}</p>
                    <p class="lead">${appointment.description}</p>
                    <p class="fs-3 text-${appointment.price ? "primary" : "success"}">${appointment.price ? appointment.price + "€" : "gratis"}</p>

                    <button class="btn btn-warning" onclick="handlePageChange()">Modifica Risorsa</button>
    `;
  })
  .catch(error => console.log(error));

//   abbiamo utilizzato un metodo non convenzionale per far cambiare pagina (bastava un'ancora con un href)
const handlePageChange = function () {
  // questa funzione si attiva al click del bottone modifica generato nel codice qui sopra
  // l'utente verrà dirottato alla pagina backoffice con un id aggiuntivo nella URL (che servirà per la modifica della risorsa esistente)
  window.location.assign("./backoffice.html?appId=" + id);
};
