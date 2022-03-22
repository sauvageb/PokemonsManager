import {Pipe, PipeTransform} from '@angular/core';
import {Pokemon} from "../models/pokemon";

@Pipe({
  name: 'sortByPokedex'
})
export class PokedexPipe implements PipeTransform {

  transform(values: Pokemon[], order: string): Pokemon[] {
    if (order === 'DESC') {
      return values.sort((a: Pokemon, b: Pokemon) => b.id - a.id);
    } else {
      return values.sort((a: Pokemon, b: Pokemon) => a.id - b.id);
    }
  }

}
