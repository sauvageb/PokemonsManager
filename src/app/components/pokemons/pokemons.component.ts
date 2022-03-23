import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../../shared/models/pokemon";
import {PokemonService} from "../../services/pokemon.service";
import {faSort} from '@fortawesome/free-solid-svg-icons';

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
  easterEgg: boolean = false;
  faSort = faSort;

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.pokemonService.fetchAll()
      .subscribe({
        next: (data) => {
          this.pokemons = data;
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  onSearch() {
    this.easterEgg = this.searchedPokemon === 'C3PO';
    this.pokemons = this.pokemonService.search(this.searchedPokemon);
  }

  hideEasterEgg() {
    this.easterEgg = false;
    this.searchedPokemon = '';
    this.onSearch();
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
