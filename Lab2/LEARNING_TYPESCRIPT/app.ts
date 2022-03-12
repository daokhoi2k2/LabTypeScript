interface Ipoke {
  id: number;
  name: string;
  types: [type];
}

interface type {
    type: {
        name: string
    }
}

const container = document.getElementById("container");

function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

const getPoke = async (amount: number) => {
  let res: any = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${amount}`);
  res = await res.json();

  const result = res.results.map((poke) => {
    const infoPoke = fetch(poke.url).then((res) => {
      return res.json();
    });
    return infoPoke;
  });

  // Dùng Promise.all sẽ có kết quả nhanh hơn dùng async await trong loop
  let data = await Promise.all(result);
  data = shuffle(data);
  const html = data
    .map((pokemon: Ipoke) => {
      return ` 
        <div class="pkm-card">${pokemon.name}
            <img class="pkm-images" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png"/>
            <div class="type">Type: ${pokemon.types[0].type.name}</div>
        </div>
        `;
    })
    .join("");
  container.innerHTML = html;
};

getPoke(20);
