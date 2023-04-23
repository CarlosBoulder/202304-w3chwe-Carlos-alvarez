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

export interface Ability {
  ability: {
    name: string;
  };
}
export interface PokemonInfoStructure {
  id: number;
  name: string;
  base_experience: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  weight: number;
  height: number;
  abilities: Ability[];
}
