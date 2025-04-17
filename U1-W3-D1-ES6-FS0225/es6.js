// SPREAD OPERATOR (quello dei 3 puntini)

const car = {
  brand: "ford",
  model: "focus",
  color: "silver"
};

const car2 = {
  licensePlate: "AB198DC",
  dateOfLicense: "24/03/24",
  brand: "suzuki"
};

const car3 = Object.assign({}, car, car2, { brand: "maserati" });
console.log(car3);

// con lo spread lo possiamo scrivere così
const car4 = { ...car, ...car2, brand: "ferrari", dateOfLicense: "24/03/25" };
console.log(car4);

// spread nell'ambito array

const nums = [56, 20, 10];
const otherNums = [0, 140, 2, 55];

console.log(nums.concat(otherNums));

// alternativa con spread
const numsCombined = [...nums, 100, 101, 102, ...otherNums];
console.log(numsCombined);

const arrOfCharacters = [..."Epicode"]; // esattamente come fare "Epicode".split("")
console.log("spread con caratteri", arrOfCharacters);

// REST PARAMTERS (quello dei 3 puntini DENTRO I PARAMETRI)
// serve a raccogliere tutti i parametri AGGIUNTIVI rispetto quelli già specificati

const anyFunc = function (param1, param2, ...rest) {
  let str = param1 + " " + param2;
  //   console.log(param1);
  //   console.log(param2);
  console.log("REST", rest);

  // rest saranno tutti quei parametri aggiuntivi, di numero indefinito, raccolti in forma di array
  // di conseguenza possiamo accedere alle singole posizioni o ciclare l'array

  for (let i = 0; i < rest.length; i++) {
    const extraParam = rest[i];
    str += " " + extraParam;
  }

  return str;
};

console.log(anyFunc("ciao", "ragazzi", "siamo", "in", "classe", "!"));

console.log("_____OBJECT_DESTRUCTURING_________________________________________________________________________");
// DESTRUCTURING - semplifico un dato in variabili singole

const person = {
  name: "Stefano",
  lastName: "Miceli",
  age: 35,
  teaching: true,
  userLocation: {
    area: {
      state: "IT",
      region: "FVG",
      address: "via delle rose 3"
    }
  }
};

// const name = person.name;
// const surname = person.surname;

// la sintassi prevede
// const {nomeProprietà} = fonte

const {
  name,
  lastName,
  userLocation: {
    area: { state, region, address }
  }
} = person;

const { userLocation } = person; // ri-destrutturiamo per avere accesso a userLocation

// da qui in poi avremo delle variabili con lo stesso nome della proprietà da usare direttamente
console.log(name);
console.log(lastName);
console.log(userLocation);
console.log(state);
console.log(region);
console.log(address);

// destructuring di parametro
console.log("_____FUNCTION PARAMS_________________________________________________________________________");

// const getPersonData = function (obj) {
//   const { name, lastName, userLocation } = obj;

//   console.log(name);
//   console.log(lastName);
//   console.log(userLocation);
// };
const getPersonData = function ({ name, lastName, userLocation, age, teaching }) {
  // in questo modo, SAPENDO DI RICEVERE UN OGGETTO NEL PARAMETRO DELLA FUNZIONE,
  // posso destrutturarne le proprietà in singoli parametri da utilizzare direttamente
  console.log(name);
  console.log(lastName);
  console.log(userLocation);
  console.log(age);
  console.log(teaching);
};

// sto inviando person (oggetto) come argomento della funzione
getPersonData(person);

console.log("_____ARRAY_DESTRUCTURING_________________________________________________________________________");
// DESTRUCTURING DI ARRAY
// const [nomePos1, nomePos2, ...] = fonte

const letters = ["a", "b", "c", "d", "e", "f"];

// const second = letters[1];
// const last = letters[letters.length - 1];

const [first, second, third, , , sixth] = letters;
// saltiamo la quinta e creiamo variabili dedicate per le altre posizioni

console.log(first);
console.log(third);
console.log(sixth);
