import {Component, OnInit} from '@angular/core';
import {Generation} from "../../shared/models/generation";
import {GenerationService} from "../../services/generation.service";

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent implements OnInit {

  generations: Generation[] = [];

  constructor(private generationService: GenerationService) {
  }

  ngOnInit(): void {
    this.generationService.fetchAll()
      .subscribe({
        next: data => {
          this.generations = data;
        },
        error: (error)=> {
          console.log(error)
        }
      });
  }

}
