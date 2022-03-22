import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../../shared/models/pokemon";
import {PokemonService} from "../../services/pokemon.service";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemons: Pokemon[] = [];

  selectedPokemon!: Pokemon;

  constructor(private pokemonService: PokemonService) {
  }


  ngOnInit(): void {
    this.pokemons = this.pokemonService.fetchAll();
  }


  onPokemonSelected(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  }


}
