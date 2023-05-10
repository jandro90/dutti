import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators'
import { Ships, ShipsResponse } from 'src/app/interfaces/ships.interface';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  url: string = 'https://swapi.dev/api/starships/'
  headerDict = {
    'Authorization': 'none',
    'Access-Control-Allow-Origin': '*'
  }
  requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.headerDict), 
  };
  
  constructor( private http: HttpClient ) {}

  getShips(): Observable<Ships[]>{
    // As I Understand is enough to load multiple pages as "the same time", so i think that is the result you expect
    const multipleHttpCalls = [
      this.http.get(`${this.url}`),
      this.http.get(`${this.url}?page=2`),
    ];

    return forkJoin(multipleHttpCalls).pipe( 
      map((data: ShipsResponse[]) => [...data[0]?.results, ...data[1]?.results])
    );
  }
}
