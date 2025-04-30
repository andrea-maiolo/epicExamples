// Funzione costruttrice
// sono funzioni particolari da definire per convenzione in PascalCase (tutte le prime lettere maiuscole)
// serve ad indicare un utilizzo preciso e particolare di queste funzioni, che andranno utilizzate attivandole con la keyword new

// hanno lo scopo di costruire OGGETTI in serie, rispettando tutti le stesse caratteristiche

// vanno create sempre con la keyword function, perché le arrow non hanno questa possibilità
const Person = function () {
  this.name = "";
  this.surname = "";
  this.address = "";
  this.email = "";
};

const person1 = new Person();
console.log(person1);

person1.name = "Mario";
person1.surname = "Rossi";
console.log(person1);

const DynamicPerson = function (_name, _surname, _address, _email, _method = function () {}, _skills = []) {
  this.name = _name;
  this.surname = _surname;
  this.address = _address;
  this.email = _email;
  this.method = _method;
  this.skills = _skills;
};

const methodFunc = function () {
  console.log("ciao il mio nome è " + this.name);
};

const person2 = new DynamicPerson("Giuseppe", "Verdi", "via delle viole 45", "giuseppe@verdi.it", methodFunc, ["singing", "presenting", "opera"]);
const person3 = new DynamicPerson("Valentino", "Rossi", "via dei platani 33", "vale@rossi.it", methodFunc);
console.log(person2);
console.log(person3);

DynamicPerson.prototype.sayHello = function () {
  console.log("hello there, I'm " + this.name + " " + this.surname);
};

person2.method();
person3.method();

person2.sayHello();
person3.sayHello();
