import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api.service';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})
export class FixturesComponent implements OnInit {
  games: Game[];

  getFixtures() : void{
    this.apiService.getAllGamesAndResults()
      .subscribe(games => {this.games = games.games});
  }
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getFixtures();
  }
}
