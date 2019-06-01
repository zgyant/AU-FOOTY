import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api.service';
import { Game } from 'src/app/models/game';
import { CookieService } from 'ngx-cookie-service';
import { Team } from 'src/app/models/team';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})
export class FixturesComponent implements OnInit {
  games: Game[];
  myTeam: Team;

  getFixtures(): void {
    this.apiService.getAllGamesAndResults()
      .subscribe(response => {
        let filtered = response['games'];
        this.games = filtered.filter(game => {
          return game.ateamid == this.myTeam.id || game.hteamid == this.myTeam.id;
        })
      });
  }
  constructor(private apiService: ApiService, private cookieService: CookieService) { }

  ngOnInit() {
    this.getFixtures();
    this.myTeam = JSON.parse(this.cookieService.get('my-team'));
  }
}
