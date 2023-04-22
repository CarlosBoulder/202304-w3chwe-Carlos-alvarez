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
