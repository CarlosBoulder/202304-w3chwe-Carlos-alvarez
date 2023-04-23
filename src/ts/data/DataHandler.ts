import { type PokemonInfoStructure } from "../types";

class DataHandler {
  private readonly url: string;

  constructor(urlRequest: string) {
    this.url = urlRequest;
  }

  async getPokemonDetails(): Promise<PokemonInfoStructure> {
    const response = await fetch(this.url);
    const pokemonInfoResult = (await response.json()) as PokemonInfoStructure;
    return pokemonInfoResult;
  }
}

export default DataHandler;
