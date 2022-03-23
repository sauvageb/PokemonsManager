import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Generation} from "../shared/models/generation";

@Injectable({
  providedIn: 'root'
})
export class GenerationService {

  private static BASE_API_URL = "http://localhost:3000";

  constructor(private http: HttpClient) {
  }

  fetchAll(): Observable<Generation[]> {
    return this.http.get<Generation[]>(`${GenerationService.BASE_API_URL}/generations`);
  }

}
