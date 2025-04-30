const fetchCharacters = () => {
  // avviare una fetch produce già una richiesta HTTP di tipo GET
  fetch("https://api.disneyapi.dev/character", {
    // method: "GET", // il GET è implicito
    // headers: { Authorization: "Bearer 12ashy18habsjhdb123" }
  })
    //   a questo punto la promise è avviata, dobbiamo prepararci ai due possibili risultati (positivo e negativo)
    // con il then ci prepariamo per un eventuale risultato positivo
    .then(responseObj => {
      console.log(responseObj);
      if (responseObj.ok) {
        return responseObj.json();
      }
    })
    .then(charactersObj => {
      // da qui in poi, una volta ottenuto il dato, possiamo usarlo come abbiamo sempre fatto
      // es. ciclare un array e creare un elemento <li> per ogni elemento dell'array e inserirlo nel DOM
      console.log(charactersObj);
      console.log(charactersObj.data);

      const row = document.querySelector(".charactersGrid");
      charactersObj.data.forEach(char => {
        console.log(char.name);

        const col = document.createElement("div");
        col.className = "col-md-3";

        col.innerHTML = `<div class="card">
                            <img src=${char.imageUrl} class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${char.name}</h5>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>`;

        row.appendChild(col);
      });
    })
    //   con un catch ci prepariamo per un risultato negativo
    .catch(error => console.log(error));
};

// ripetiamo le medesime operazioni contattando un'API diversa
const fetchUsers = () => {
  fetch("https://randomuser.me/api/?results=5&gender=female")
    .then(resp => {
      if (resp.ok) {
        return resp.json();
      }
    })
    .then(userObj => {
      console.log(userObj);
      const row = document.querySelector(".userGrid");

      userObj.results.forEach(user => {
        const col = document.createElement("div");
        col.className = "col-md-3";

        const img = document.createElement("img");
        img.style.width = "100%";
        img.src = user.picture.large;

        const p = document.createElement("p");
        p.innerText = `${user.name.first} ${user.name.last}`;

        col.appendChild(img);
        col.appendChild(p);
        row.appendChild(col);
      });
    })
    .catch(error => console.log(error));
};

// questo è il punto in cui le due operazioni si avviano effettivamente (al caricamento della pagina)
window.onload = () => {
  fetchCharacters();
  fetchUsers();
};
