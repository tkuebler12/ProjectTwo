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
      let div = document.createElement("div");
      let img = document.createElement("img");
      let button = document.createElement("button");
      button.setAttribute("class", "btn waves-effect waves-light");
      button.setAttribute("id", "save-card");
      button.setAttribute("data-id", cards[i].id);
      button.textContent = "Save";
      div.appendChild(img);
      div.appendChild(button);
      img.setAttribute("src", cards[i].images);
      container.appendChild(div);
    }
    document.querySelectorAll("#save-card").forEach((element) => {
      element.addEventListener("click", saveCard);
    });
  });
}

async function saveCard(event) {
  const response = await fetch('/api/pokemon/save/'+event.target.getAttribute("data-id"), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (response.ok) event.target.textContent="Saved";
}

document.querySelector("#search-btn").addEventListener("click", newPokemonCard);

