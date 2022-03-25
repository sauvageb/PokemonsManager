import {PokedexPipe} from './pokedex.pipe';
import {Pokemon} from "../models/pokemon";

describe('PokedexPipe', () => {

  let pokemonsASC: Pokemon[];
  let pokemonsDESC: Pokemon[];

  beforeEach(() => {
    pokemonsASC = [
      {
        "id": 1,
        "name": "Bulbizarre",
        "category": "graine",
        "types": [
          "plante",
          "poison"
        ],
        "size": 0.7,
        "weight": 6.9,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
      },
      {
        "id": 2,
        "name": "Herbizarre",
        "category": "graine",
        "types": [
          "plante",
          "poison"
        ],
        "size": 1,
        "weight": 13,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
      },
    ];
    pokemonsDESC = [
      {
        "id": 2,
        "name": "Herbizarre",
        "category": "graine",
        "types": [
          "plante",
          "poison"
        ],
        "size": 1,
        "weight": 13,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
      }, {
        "id": 1,
        "name": "Bulbizarre",
        "category": "graine",
        "types": [
          "plante",
          "poison"
        ],
        "size": 0.7,
        "weight": 6.9,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
      }];
  })

  it('create an instance', () => {
    const pipe = new PokedexPipe();
    expect(pipe).toBeTruthy();
  });

  it('PokedexPipe sort by DESC', () => {
    // GIVEN
    const pipe = new PokedexPipe();
    // WHEN
    let results = pipe.transform(pokemonsASC, 'DESC');
    // THEN
    expect(results).toEqual(jasmine.arrayWithExactContents(pokemonsDESC));
  });

  it('PokedexPipe sort by ASC', () => {
    // GIVEN
    const pipe = new PokedexPipe();
    // WHEN
    let results = pipe.transform(pokemonsDESC, 'ASC');
    // THEN
    expect(results).toEqual(jasmine.arrayWithExactContents(pokemonsASC));
  });

  it('PokedexPipe with empty array', () => {
    // GIVEN
    const pipe = new PokedexPipe();
    const pokemons: Pokemon[] = [];

    // WHEN
    let results = pipe.transform(pokemons, 'ASC');
    // THEN
    expect(results.length).toBe(0);
  });

});
