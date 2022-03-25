import {TestBed} from '@angular/core/testing';

import {GenerationService} from './generation.service';
import {HttpClientModule} from "@angular/common/http";

describe('GenerationService', () => {
  let service: GenerationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
    });
    service = TestBed.inject(GenerationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
