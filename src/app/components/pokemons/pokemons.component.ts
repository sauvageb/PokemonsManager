import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../../shared/models/pokemon";
import {PokemonService} from "../../services/pokemon.service";
import {faMagnifyingGlass, faSort} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  searchedPokemon!: string;

  pokemons: Pokemon[] = [];
  selectedPokemon!: Pokemon;

  sortValue = 'ASC';

  faMagnifyingGlass = faMagnifyingGlass;
  faSort = faSort;

  constructor(private pokemonService: PokemonService) {
  }


  ngOnInit(): void {
    this.pokemons = this.pokemonService.fetchAll();
  }

  onSearch() {
    this.pokemons = this.pokemonService.search(this.searchedPokemon);
  }


  onPokemonSelected(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  }

  isAscendingSort() {
    return this.sortValue === 'ASC';
  }

  changeSort() {
    if (this.isAscendingSort()) {
      this.sortValue = 'DESC';
    } else {
      this.sortValue = 'ASC';
    }
  }
}
