import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Pokemon} from "../../shared/models/pokemon";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {

  @Input()
  pokemon?: Pokemon;

  @Output()
  onPokemonSelected = new EventEmitter<Pokemon>();

  constructor() {
  }

  selectPokemon() {
    this.onPokemonSelected.emit(this.pokemon);
  }
}
