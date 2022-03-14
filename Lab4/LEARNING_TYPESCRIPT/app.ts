interface Ipoke {
  id: number;
  name: string;
  types: [type];
}

interface type {
  type: {
    name: string;
  };
}

abstract class PokeDex {
  abstract pokeList: Ipoke[];
  protected abstract  shuffle: (array: Ipoke[]) => Ipoke[];
  protected abstract getPoke: (amount: number) => Promise<Ipoke[]>;
  abstract renderPoke: (data: Ipoke[]) => void;
}

class PokeApp extends PokeDex {
  public pokeList: Ipoke[];

  constructor() {
    super();
  }

  protected shuffle = (array: Ipoke[]) => {
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
  };

  protected getPoke = async (amount: number) => {
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
    return data;
  };

  public renderPoke = (data: Ipoke[]): void => {
    const container = document.getElementById("container");
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

  public initApp = async (amount: number) => {
    const data = await this.getPoke(amount);
    this.shuffle(data);
    this.renderPoke(data);
  }
}

const app = new PokeApp();
app.initApp(20);