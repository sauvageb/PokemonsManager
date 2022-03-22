import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../../shared/models/pokemon";
import {PokemonService} from "../../services/pokemon.service";

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


  constructor(private pokemonService: PokemonService) {
  }


  ngOnInit(): void {
    this.pokemons = this.pokemonService.fetchAll();
  }

  onSearch() {
    console.log(this.searchedPokemon);
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
