import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons = [
    {
      id: 1,
      name: 'Bulbizarre',
      category: 'graine',
      types: ['plante', 'poison'],
      size: 0.7,
      weight: 6.9,
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    },
    {
      id: 2,
      name: 'Herbizarre',
      category: 'graine',
      types: ['plante', 'poison'],
      size: 1,
      weight: 13,
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
    },
    {
      id: 3,
      name: 'Florizarre',
      category: 'graine',
      types: ['plante', 'poison'],
      size: 2,
      weight: 100,
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'
    },
    {
      id: 4,
      name: 'Salamèche',
      category: 'lézard',
      types: ['feu'],
      size: 0.6,
      weight: 8.5,
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
    },
    {
      id: 5,
      name: 'Reptincel',
      category: 'flamme',
      types: ['feu'],
      size: 1.1,
      weight: 19,
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png'
    },
    {
      id: 6,
      name: 'Dracaufeu',
      category: 'flamme',
      types: ['feu', 'vol'],
      size: 1.7,
      weight: 90.5,
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'
    },
  ];

  constructor() {
  }

  fetchAll() {
    return this.pokemons;
  }


}
