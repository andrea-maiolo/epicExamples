const phrase = "I think Ruth's dog is cuter than your dog!";

// con il metodo split siamo in grado di spezzettare una stringa usando dei caratteri come "punto di taglio"
// qui sotto per esempio abbiamo deciso di apportare il taglio su tutti i caratteri di spazio
const words = phrase.split(" ");
// da questo momento abbiamo generato un ARRAY di singole parole che potremmo anche ciclare

for (let i = 0; i < words.length; i++) {
  // ciclarle con un for ci dà la possibilità di avere accesso, una per una, alle singole parole
  const word = words[i];
  console.log(word);
  // volendo potrei manipolare la singola parola prima di usarla in qualche modo
}

// il metodo per ricostruire una stringa da un array è .join(), che ricomporrà le parole in un'unica stringa, concatenandole con il simbolo proposto.
// nel nostro caso verranno concatenate con il carattere di spazio tra di loro
console.log(words.join(" "));
