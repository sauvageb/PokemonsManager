import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent implements OnInit {

  generations: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.generations = [
      "Géneration I",
      "Géneration II",
      "Géneration II",
      "Géneration IV",
      "Géneration V",
      "Géneration VI",
      "Géneration VII",
    ];
  }

}
