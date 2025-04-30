// Una Promise è una struttura che permette di gestire codice asincrono.
const myPromise = () =>
  new Promise((resolve, reject) => {
    // in questo esempio abbiamo creato una promise con due valori di tempo random
    // non sapremo mai quale tra i due avrà un valore in ms inferiore
    // ma in ogni caso il codice saprà regolarsi in autonomia

    // la prima funzione che si eseguirà (tra resove e reject) determinerà lo status finale della Promise
    // e di conseguenza determinerà quale tra then e catch verranno eseguiti all'esterno
    // in caso positivo (resolve()) verrà attivato il metodo esterno .then()
    // in caso negativo (reject()) verrà attivato il metodo esterno .catch()
    const randTime = Math.floor(Math.random() * 4000);
    const randTime2 = Math.floor(Math.random() * 4000);

    setTimeout(() => resolve("RISOLTA"), randTime);
    setTimeout(() => reject("RIFIUTATA"), randTime2);
  });

// la promise viene avviata in questo punto, questo è il momento in cui cercherà di risolversi ed è il momento in cui i timer partiranno
// in base a quale timer scadrà per primo avremo l'esecuzione di then o catch e console.log corrispondente

// nel parametro delle callback interne ci possiamo aspettare il valore che era passato all'interno delle funzioni resolve (per il then) e reject (per il catch)
myPromise()
  .then(successMessage => console.log("PROMISE RISOLTA CON VALORE: ", successMessage))
  .catch(errorMessage => console.log("PROMISE RIFIUTATA CON VALORE:", errorMessage));
