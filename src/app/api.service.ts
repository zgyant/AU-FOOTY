import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, filter, catchError } from "rxjs/operators";
import {Game} from './models/game'
import { Team } from './models/team';
import { Tip } from './models/tip';
import { Ladder } from './models/ladder';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_ROOT = "https://api.squiggle.com.au/";

  currentYear = new Date().getFullYear();
  myTeam: Team;
  currentRound=11;

  constructor(private http: HttpClient) { }

  onInit(){
  }

  getLadder(): Observable<Ladder[]>{
    let url = this.API_ROOT+"?q=ladder;source=1";
    return this.http.get<Ladder[]>(url).pipe(
      catchError(this.handleError('getLadder', []))
    )
  };

  getAllTeams(): Observable<Team[]>{
    let url = this.API_ROOT + "?q=teams;";
    return this.http.get<Team[]>(url).pipe(
      catchError(this.handleError('getAllTeams', []))
    )
  }

  getTips(): Observable<Tip[]> {
    let url = this.API_ROOT + "?q=tips;year=" + this.currentYear;
    return this.http.get<Tip[]>(url).pipe(
      catchError(this.handleError('getTips', []))
    )
  }

  getAllGamesAndResults(): Observable<Game[]> {
    const url = this.API_ROOT + "?q=games;source=1;year=" + this.currentYear;
    return this.http.get<Game[]>(url).pipe(
      map(response => response),
      catchError(this.handleError('getAllGamesAndResults', []))
      );
  }

 getNextFixtures(): Observable<Game[]> {
    const url = this.API_ROOT + "?q=games;year=" + this.currentYear+";round="+this.currentRound+";complete=0;source=1;";
    return this.http.get<Game[]>(url).pipe(
      map(response => response),
      catchError(this.handleError('getNextFixtures', []))
      );
  }


  getAllHeadtoHead():Observable<Game[]>
  {
     const url=this.API_ROOT + "?q=games";
     return this.http.get<Game[]>(url) .pipe(
         map(response => response),
         catchError(this.handleError('getAllHeadtoHead', []))
     );

  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console for debug
      return of (result as T);
    };
  }
}
