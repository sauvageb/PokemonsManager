import {Injectable} from '@angular/core';
import {Pokemon} from "../shared/models/pokemon";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private static BASE_API_URL = "http://localhost:3000";

  pokemons: Pokemon[] = [];

  constructor(private http: HttpClient) {
  }

  fetchAll(): Observable<Pokemon[]> {
    return this.http
      .get<Pokemon[]>(`${PokemonService.BASE_API_URL}/pokemons`)
      .pipe(
        map(pokemons => {
          this.pokemons = pokemons;
          return pokemons;
        }))
  }

  search(pokemonName: string): Pokemon[] {
    if (pokemonName) {
      const regex = new RegExp(pokemonName, 'gi');
      return this.pokemons.filter(p => p.name.match(regex));
    } else {
      return this.pokemons;
    }
  }


}
