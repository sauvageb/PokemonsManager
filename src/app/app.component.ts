import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Pokemons Manager';

  constructor() {
  }

  ngOnInit(): void {
    console.log('AppComponent On init');
  }

  ngOnDestroy(): void {
    console.log('AppComponent On Destroy');
  }


}
