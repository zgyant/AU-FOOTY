import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api.service';
import { Game } from 'src/app/models/game';
declare var $;
@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})
export class FixturesComponent implements OnInit {
  games: Game[];

  getFixtures(): void {
    this.apiService.getAllGamesAndResults()
      .subscribe(games => {
        this.games = games.games;
        console.log(this.games);
      });

  }
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getFixtures();
    $('#fixtureTable').DataTable();

  }
}
