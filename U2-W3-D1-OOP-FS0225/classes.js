// abbiamo visto che JS è un linguaggio di programmazione orientato agli oggetti
// la differenza principale, tuttavia, con altri linguaggi di programmazione più classici
// come Java, C#, C++ è che JS si basa sul concetto di PROTOTIPO, mentre gli altri si
// basano sul concetto di CLASSE

// grazie alle classi, gli altri linguaggi permettono di estendere le funzionalità
// di una struttura principale creando delle "sottovarianti", delle "sottoclassi"

// let obj = {}
// in JS è possibile creare un oggetto direttamente con le {} senza avere il costruttore,
// mentre in tutti i classici linguaggi OOP questo non è possibile: è necessario avere
// PRIMA la classe, e poi se ne deriva l'istanza (l'oggetto)

// negli altri linguaggi non è possibile modificare uno "stampino" dopo la sua creazione
// mentre in JS come abbiamo visto ieri è possibile agire sui prototipi

// con il passare del tempo e l'introduzione di ES6 anche JS ha cominciato a permettere
// a suoi sviluppatori di utilizzare il concetto di "classe", uniformando gli approcci
// con altri linguaggi più blasonati e rendendo più facile la transizione a sviluppatori
// provenienti da questi linguaggi.

class Person {
  constructor(_name, _surname, _address, _email, _skills = []) {
    this.name = _name;
    this.surname = _surname;
    this.address = _address;
    this.email = _email;
    this.skills = _skills;
  }

  // i metodi delle classi vengono creati dentro al contesto della classe, ma fuori dal costruttore

  // si creano senza particolari keyword, ma come fossero delle definizioni di funzioni classiche

  showName() {
    return "Ciao a tutti mi chiamo " + this.name + " " + this.surname + "!";
  }
}

const valentinoRossi = new Person("Valentino", "Rossi", "via dei platani 33", "vale@rossi.it", ["GP Winner", "Super Bike Rider", "World Champion"]);

console.log(valentinoRossi);
console.log(valentinoRossi.showName());

// EREDITARIETA' delle classi

class Developer extends Person {
  constructor(_name, _surname, _address, _email, _specialty, _skills = [], _languages = []) {
    // devo far arrivare le proprietà name, surname, age, email, skills alla classe Person
    // Person è definita la SUPERCLASSE di Developer
    super(_name, _surname, _address, _email, _skills);
    // qui sotto invece gestiamo le nuove proprietà specifiche per Developer
    this.specialty = _specialty;
    this.languages = _languages;
  }

  showFullDescription() {
    // posso trattare il metodo come una qualunque altra funzione, quindi poter fare diverse operazioni prima di ritornare un valore
    // this.languages.forEach(lang => console.log(lang));

    // super mi permette di chiamare metodi della superclasse (o istanza principale in questo caso)
    // andando a comporre un messaggio più specifico sulla base di quello precedente
    return super.showName() + " sono specializzato in " + this.specialty;
  }

  // METODI e PROPRIETÀ STATICI nelle classi
  // un metodo o una proprietà statici all'interno di una classe sono dei metodi
  // e delle proprietà NON accessibili dalle ISTANZE della classe, ma solamente
  // all'interno della classe stessa.

  // anteponendo la keyword "static" rendiamo un metodo o una proprietà statici
  static showLanguagesStatic(instance) {
    // nel caso del metodo statico, questo si aggancerà al costruttore e non alle istanze.
    // Il costruttore non ha dei dati di per sé. E' il modello di un oggetto, ma non ha già dei dati associati.
    // Per questo motivo il metodo ci richiede uno o più dati come parametri.
    // In questo caso abbiamo passato l'oggetto come parametro instance e poi letto la sua proprietà languages,
    // ma avremmo anche potuto passare più di una istanza e confrontarle per produrre un risultato
    instance.languages.forEach(lang => {
      console.log("lang", lang);
    });
  }

  showLanguagesInstance() {
    // questo invece è un metodo normale che troviamo già sulle singole istanze
    // partendo dall'istanza il metodo può accedere al suo oggetto tramite la keyword this
    this.languages.forEach(lang => console.log("lang", lang));
  }
}

const stefanoDev = new Developer(
  "stefano",
  "miceli",
  "via delle rogge 55",
  "stefano@miceli.it",
  "React",
  ["Educator", "Graphic designer", "Photographer"],
  ["HTML", "CSS", "JavaScript", "TypeScript"]
);

console.log(stefanoDev);
console.log(stefanoDev.showFullDescription());
console.log(stefanoDev.showName());

// il metodo normale si propaga alle sue istanze, mentre quello statico no
// dovremo quindi ricercarlo sull'ISTANZA per poterlo utilizzare
stefanoDev.showLanguagesInstance();

// per trovare showLanguagesStatic devo cercarlo all'interno della classe principale! NON nelle istanze
// stefanoDev.showLanguagesStatic(); // error
Developer.showLanguagesStatic(stefanoDev);
