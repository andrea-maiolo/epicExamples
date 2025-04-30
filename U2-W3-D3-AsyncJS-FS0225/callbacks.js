// una callback è la definizione di una funzione passata come argomento ad un'altra funzione (che la chiamerà internamente al momento opportuno)

const count = function () {
  setTimeout(() => console.log("sono passati 2 secondi"), 2000);
};

const countAndDone = function () {
  // count prevede l'avvio di un'operazione asincrona ==> NON BLOCCANTE
  count();

  // contenstualmente alla registrazione dell'operazione asincrona (che si svolgerà in un contesto parallelo)
  // si procede a leggere il resto del codice in questa funzione countAndDone...

  // questo è il motivo per cui vediamo SUBITO il console.log "FINITO", e solo dopo almeno 2s vedremo il console.log della funzione count
  console.log("FINITO");
};

// countAndDone();

// RISOLVIAMO IMPLEMENTANDO UNA CALLBACK
const countWithCallback = function (callback) {
  setTimeout(() => {
    console.log("sono passati 2 secondi");
    callback();
  }, 2000);
};

const handleThirdCount = () => alert("CONCLUSO");

const countAndDoneAsync = function () {
  countWithCallback(function () {
    console.log("DONE");
  });

  countWithCallback(() => console.log("FINITO"));

  countWithCallback(handleThirdCount);
};

// countAndDoneAsync();

// div.addEventListener("click", function(){})

const answer = time => console.log("📞 Pronto chi è?", time / 1000 + "s");
const grannysAnswer = time => console.log("📞 Pronto stella? Hai mangiato?", time / 1000 + "s");
const angryAnswer = time => console.log("📞 Ma chi diavolo è?!?!", time / 1000 + "s");

const phoneCall = callback => {
  const randTime = Math.floor(Math.random() * 4000);

  setTimeout(() => {
    callback(randTime); // answer(randTime), grannysAnswer(randTime), angryAnswer(randTime), ((randTime) => console.log("📞Who's this?"))()
  }, randTime);

  console.log("☎️ Drin drinnnn");
};

phoneCall(answer);
phoneCall(grannysAnswer);
phoneCall(angryAnswer);
phoneCall(time => console.log("📞 Who's this?", time / 1000 + "s"));
