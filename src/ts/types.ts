export interface ComponentStructure {
  element: Element;
  renderHtml: () => void;
}

export interface PokemonDetailStructure {
  name: string;
  url: string;
}

export interface PokemonsDataStructure {
  count?: number;
  results: PokemonDetailStructure[];
}

export interface PokemonInfoStructure {
  id: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  weight: number;
  height: number;
}
