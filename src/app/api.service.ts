import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, filter, catchError } from "rxjs/operators";
import {Game} from './models/game';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_ROOT = "https://api.squiggle.com.au/";
  API_ROOT_HTH ='https://api.squiggle.com.au/?q=games';
  currentYear = new Date().getFullYear();

  constructor(private http: HttpClient) { }

  onInit(){
    // this.currentYear = ;
  }

  getAllGamesAndResults(): Observable<Game[]> {
    const url = this.API_ROOT + "?q=games;year=" + this.currentYear;
    return this.http.get<Game[]>(url)
      .pipe(
        map(response => response),
        catchError(this.handleError('getAllGamesAndResults', []))
      );
  }

  getAllHeadtoHead():Observable<Game[]>
  {
     const url=this.API_ROOT_HTH;
     return this.http.get<Game[]>(url) .pipe(
         map(response => response),
         catchError(this.handleError('getAllGamesAndResults', []))
     );

  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console for debug
      return of (result as T);
    };
  }
}
