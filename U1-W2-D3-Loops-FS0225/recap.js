// OGGETTI

// questo è un blocco separato dal contesto principale
{
  // quello che scriviamo qui dentro è in un ambito separato rispetto al contesto principale (root context)
}

// creare oggetti con notazione letterale {}
// i dati verranno creati sottoforma di coppie chiave:valore
const person = {
  firstName: "Stefano",
  lastName: "Miceli",
  age: 35,
  teaching: true
};

// person = "ciao"; // Errore: assegnazione a costante non permessa.

// un oggetto lo possiamo manipolare nel tempo (anche a posteriori della sua creazione)
console.log(person.address);
person.address = "via dei bardi 22";
person.propertyToDelete = "something useless";
console.log(person.address);

// accedere ad una proprietà con la dot notation .
console.log(person.teaching); // leggo il valore associato alla proprietà teaching di person ==> true

// accedere ad una proprietà con la square brackets notation []
const propName = "teaching";
const propName2 = "last";
const propName3 = "Name";
console.log(person[propName]); // person["teaching"] // true
console.log(person.propName); // undefined
console.log(person[propName2 + propName3]); // person["lastName"] // "Miceli"

// cancellare una proprietà esistente
delete person.propertyToDelete;
delete person.age;
console.log(person);

// ARRAY

const animals = ["dog", "cat", "horse", "rabbit", "fish", "eagle"];
const extraAnimals = ["whale", "parrot", "giraffe", "wolf", "dolphin"];
// selezionare un elemento tramite il suo indice
const secondAnimal = animals[1]; // 1 è la seconda posizione perché gli array cominciano da 0
console.log(animals[0]); // abbiamo letto la prima posizione ed estratto il primo animale
console.log(secondAnimal);
console.log(animals.length); // lunghezza dell'array letta in modo dinamico

console.log(animals);
// eliminare l'ultima posizione
animals.pop();
animals.pop();
animals.pop();
console.log(animals);

console.log(animals[5]); // undefined // ultima posizione potenzialmente non sempre funzionante
console.log(animals[animals.length - 1]); // leggere l'ultima posizione dinamicamente

// concatenare due o più array
const combinedArrays = animals.concat(extraAnimals);

// aggiungere un elemento all'array
combinedArrays.push("swan", "lion", "buffalo", "squirrel");
console.log(combinedArrays);

// aggiungere all'inizio
// array.unshift("elemento da aggiungere")

// rimuovere il primo elemento in prima posizione
// array.shift()

// ordinare un array in ordine alfabetico
combinedArrays.sort();
console.log(combinedArrays);

// .slice() - ritorna una porzione dell'array definita da noi - ritorna un nuovo array con questa sezione di elementi
// slice ritrnando un nuovo array completamente NON MUTA l'originale
const slicedArray = combinedArrays.slice(2, 5);

console.log(slicedArray);
// .splice()
// questo metodo MUTA l'originale
// può essere usato per eliminare una posizione anche intermedia
// può funzionare anche solo come inserimento di elemento in posizione intermedia (o anche prima e ultima)

combinedArrays.splice(1, 1, "snake");
console.log(combinedArrays);
