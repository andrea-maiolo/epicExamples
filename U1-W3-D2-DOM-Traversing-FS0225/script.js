// con la DOM Manipulation noi potremo ALTRERARE il contenuto della pagina GIA' precedentemente creata
// potremo quindi INSERIRE/MODIFICARE/ELIMINARE qualsiasi cosa renderizzata al suo interno!
// potremo anche fare modifiche nel tempo a partire da un'interazione con il nostro utente
// (es. il click su un elemento che produce la visualizzazione di un popuo di conferma)

// ⚠️IMPORTANTE:
// Il processo si compone di DUE FASI:

// 1) SELEZIONE dell'elemento (DOM Traversing) - prima seleziono l'elemento che mi interessa modificare
// 2) MANIPOLAZIONE dell'elemento (DOM Manipulation) - poi lo modifico effettivamente per: contenuto, stile, presenza o meno nella pagina

// per selezionare i nostri elementi faremo SEMPRE riferimento ai metodi che il browser ci mette a disposizione.
// tipicamente si parte dal nostro primo nodo del DOM che è: document.

// il document ci rappresenta l'intera pagina.
// dentro di sé ha contenute le informazioni che lo riguardano così come quelle che riguardano i suoi figli.

// _____ METODI DI SELEZIONE ______________________________________________

// 1) SELEZIONE PER ID

const menu = document.getElementById("menu"); // <ul id="menu"> {children} </ul>
// siamo partiti da document, e gli abbiamo chiesto di reperire il riferimento all'elemento con id "menu"
console.log(menu); // il console.log mi mostra l'elemento con rappresentazione a tag
console.dir(menu); // il console.dir mi mostra l'elemento con rappresentazione a "directory" (cartella), posso ispezionare le proprietà del nodo

const secondSection = document.getElementById("second-section"); // <section id="second-section"></section>

// SELEZIONE PER CLASSE

const subtitleCollection = document.getElementsByClassName("subtitle"); // HTMLCollection [p.subtitle]
// // collezione con 1 solo elemento, perché di p.subtitle ne avevamo solo 1 nella pagina
console.log(subtitleCollection);
console.log(subtitleCollection.innerText); // undefined, la collection non ha proprietà innerText
console.log(subtitleCollection[0].innerText); // il testo della p, selezionata con [0]

const subtitle = document.getElementsByClassName("subtitle")[0]; // sapendo di avere un solo elemento con quella classe,
// posso andare già a selezionare la prima posizione per salvarla direttamente nella variabile
console.log(subtitle);
console.log(subtitle.innerText);

const sectionDescription = document.getElementsByClassName("section-description"); // HTMLCollection  [p.section-description, p.section-description, p.section-description]
console.log(sectionDescription); // gli elementi sono ancora incapsulati dentro una collection, e non sono manipolabili (ancora)

for (let i = 0; i < sectionDescription.length; i++) {
  console.log(sectionDescription[i]); // accediamo al singolo elemento della collezione
  //   solo qui dentro potremmo manipolare i singoli p raccolti dal DOM
}

// SELEZIONE PER TAG (element name)

const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
const lists = document.getElementsByTagName("ul");
console.log(lists);

// volendo usare il forEach, o tutti i metodi più avanzati di ES6, potremmo convertire l'HTMLCollection in un vero array per poter fare quello che vogliamo
// convertiamo l'HTMLCollection prima di usare il forEach
// Array.from(lists).forEach(ul => console.log(ul));
const listsArr = Array.from(lists);

listsArr.forEach(ul => console.log(ul));

// const body = document.getElementsByTagName("body")[0]; // non è il modo più efficiente
// console.log(body);
console.dir(document);
console.log(document.body);

// SELEZIONARE TRAMITE SELETTORI CSS

// querySelector - seleziono un singolo elemento tramite selettore CSS (in caso di classi o tag verrà selezionato il primo trovato)

const menuQS = document.querySelector("#menu"); // nel caso di id consiglio ancora il metodo getElementById che è più performante

const body = document.querySelector("body"); // document.body è comunque più conveniente
console.log(body);

const subtitleQS = document.querySelector(".subtitle");
// nelle situazioni in cui sappiamo di avere una singola classe usata nel documento, conviene sicuramente usare il querySelector,
// senza dover selezionare una prima posizione della HTMLCollection
console.log(subtitleQS);

const firstSectionDescription = document.querySelector(".section-description"); // RICORDARSI IL . per le classi e # per gli id!!!
console.log(firstSectionDescription); // mi ha tornato la prima section-decription che ha trovato

// const secondSectionDescription = document.querySelector("section:nth-of-type(2) .section-description");
const secondSectionDescription = document.querySelector("#second-section .section-description");
console.log(secondSectionDescription); // abbiamo selezionato un elemento sfruttando il selettore CSS più avanzato

// querySelectorAll - lo usiamo per selezionare tutte le occorrenze di una classe o di un tag (non un id)

const sectionDescriptionQSA = document.querySelectorAll(".section-description");
console.log(sectionDescriptionQSA); // NodeList [p.section-description, p.section-description, p.section-description]

// la NodeList contiene anche il metodo forEach e soltanto quello
// (vale sempre il discorso della conversione ad array con Array.from() per usare gli altri metodi degli array)

sectionDescriptionQSA.forEach(p => console.log(p));

// selezione da punto di partenza diverso da document
const secondSectionUL = secondSection.querySelector("ul");
// siamo partiti dalla seconda sezione e abbiamo cercato la prima ul al suo interno
// sempre un metodo di selezione che va da un punto più esterno a quello più interno

// RISALIRE I NODI DEL DOM
// .parentNode
// .closest(CSS selector)

// .parentNode
// lo possiamo utilizzare più volte, ogni volta saliremo di un livello incontrando il nodo del genitore successivo
console.log(secondSectionUL.parentNode); // section
console.log(secondSectionUL.parentNode.parentNode); // main
console.log(secondSectionUL.parentNode.parentNode.parentNode); // body

//.closest(CSS selector)
// console.log(secondSectionUL.closest("main"));
console.log(secondSectionUL.closest(".main-element"));

// ________ MANIPOLARE GLI ELEMENTI ____________________

const thirdSectionDescription = document.querySelector("#third-section p");
console.log(thirdSectionDescription);

// cambiamo il testo a questo pragrafo
// thirdSectionDescription.innerText = "Lorem Ipsum MODIFIED"
thirdSectionDescription.innerHTML = "<strong>Lorem Ipsum</strong> MODIFIED";

// modifichiamo lo stile applicando un inline style (come se lo mettessimo nel tag html)
thirdSectionDescription.style.backgroundColor = "red";
// thirdSectionDescription.style = "color: red; background-color: black; border: 2px solid coral";

// cambiamo stile applicando una classe
// secondSectionDescription.className = "bigAndBold"; // se lo scrivo così sto sovrascrivendo qualsiasi classe pre-esistente sull'elemento
// usiamo questo metodo solo se siamo sicuri che l'elemento non abbia già altre classi (per evitare di sovrascriverle)

// il metodo migliore in questo caso:
// aggiungere una classe tramite classList.add()
secondSectionDescription.classList.add("bigAndBold"); // questo metodo preserva anche la classe pre-esistente e ne aggiunge una al suo fianco

const main = document.querySelector("main"); // seleziono main per rimuovere una delle due classi che ha: <main class="main-element toBeRemoved">
// rimuovere una classe tramite classList.remove()
main.classList.remove("toBeRemoved"); // rimuove una classe preservando le altre <main class="main-element">

// aggiungere un id
main.id = "boss";

// aggiungere un attributo CUSTOM (quindi non quelli già previsti es: href, src, class, id)
main.setAttribute("my-custom-attribute", "Whatever");

// leggere attributo
console.log(main.getAttribute("my-custom-attribute"));

// rimuovere attributo
// main.removeAttribute("nome attributo")

// cambiamo testo ad un elemento con un timer
setTimeout(() => {
  thirdSectionDescription.innerText = "MODIFICATO DOPO 5secondi";
  thirdSectionDescription.style.backgroundColor = "aquamarine";
}, 5000);
setTimeout(() => {
  thirdSectionDescription.innerText = "MODIFICATO DOPO 7secondi";
  thirdSectionDescription.style.backgroundColor = "palevioletred";
}, 7000);

// cambiare la visibilità di un elemento
// per rimuovere un elemento dalla pagina
// .remove() - distrugge l'elemento, lo rimuove completamente dalla pagina

const toDestroy = document.getElementById("toDestroy"); // seleziono l'elemento interessato

// rendo l'elemento invisibile (ma rimane nel DOM)
toDestroy.style.display = "none";

setTimeout(() => {
  // lo riporto a visibile con display block dopo 2sec
  toDestroy.style.display = "block";
}, 2000);

// questo invece lo distruggerebbe proprio
setTimeout(() => {
  // lo distruggo con .remove() dopo 5sec
  toDestroy.remove();
}, 5000);

// CREARE NUOVI ELEMENTI

// creare un nuovo elemento in memoria (non sarà ancora presente nella pagina)
const newDiv = document.createElement("div");
// modifico i connotati di questo div
// so che non ha classi precedenti, quindi posso usare .className per aggiungerne
newDiv.className = "my-new-div";
newDiv.id = "new-div";
newDiv.style.backgroundColor = "aqua";

// newDiv.innerHTML = "<span>new content</span>";
const newSpan = document.createElement("span");
newSpan.innerText = "blah blah blah";

// genitore.appendChild(nodoDelFiglio)
newDiv.appendChild(newSpan); // così facendo abbiamo inserito newSpan dentro a newDiv
console.log(newDiv);

// dopo averlo manipolato scelgo dove inserirlo
// lo inseriremo come ultimo elemento di main (main esiste nella pagina, questo farà esistere anche newDiv)
main.appendChild(newDiv); // questa operazione farà finalmente esistere l'elemento nella pagina

// creiamo una nuova immagine dentro l'elemento con id image-container

const imageContainer = document.getElementById("image-container");
// creo quindi l'elemento immagine in memoria
const image = document.createElement("img");

image.src =
  "https://images.unsplash.com/photo-1742293603913-a61164108169?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
image.alt = "seaside";
image.width = "300";
console.log(image);
// dopo aver manipolato in memoria l'elemento lo andiamo ad inserire in un contenitore presente nella pagina

imageContainer.appendChild(image); // questo è il momento in cui l'immagine comincia ad esistere

// creo un link e lo inserisco nel footer
const footer = document.querySelector("footer");

const anchor = document.createElement("a");
anchor.innerText = "click me";
anchor.href = "https://epicode.com";
anchor.target = "_blank";
footer.appendChild(anchor);
