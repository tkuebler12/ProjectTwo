//Adding cards element

async function newPokemonCard(event) {
  const pokemon_name = document.querySelector("#pokemon_name").value.trim();
  if (!pokemon_name) return;
  console.log(pokemon_name);
  // const pokemon_image = document.querySelector('#pokemon_image').value;
  // const pokemon_description = document.querySelector('#pokemon_description').value;
  async function getCards() {
    const response = await fetch(`/api/pokemon/${pokemon_name}`);
    const cards = response.json();
    return cards;
  }
  getCards().then((cards) => {
    let container = document.getElementById("image-container");
    console.log(container);
    for (let i = 0; i < cards.length; i++) {
      console.log(cards[i]);
      let img = document.createElement("img");
      img.setAttribute("src", cards[i].images);
      container.appendChild(img);

      // let container = document.getElementById("image-container");
      // console.log(container);
    //   let row = document.createElement("div");
    //   row.setAttribute("class", "row");
    //   console.log(row);
    //   container.appendChild(row);
    //   let col = document.createElement("div");
    //   col.setAttribute("class", "col s12 m6");
    //   row.appendChild(col);
    //   let card = document.createElement("div");
    //   col.setAttribute("class", "card");
    //   col.appendChild(card);
    }
  });

  //console.log(cards);
  // if (response.ok) {
  //     const cards = response.json();
  // } else {
  //     alert("Error!");
  // }
}

document.querySelector("#search-btn").addEventListener("click", newPokemonCard);
