import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { Team } from 'src/app/models/team';
import { ApiService } from 'src/app/services/api.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-fixtures-preview',
  templateUrl: './fixtures-preview.component.html',
  styleUrls: ['./fixtures-preview.component.css']
})
export class FixturesPreviewComponent implements OnInit {

	games: Game[];
	myTeam: Team;

	getNextFixtures(): void {
    this.apiService.getNextFixtures()
      .subscribe(response => {
        this.games = response['games'].filter(game => {
          return game.ateamid == this.myTeam.id || game.hteamid == this.myTeam.id;
        });
      });
  }

  constructor(private apiService: ApiService, private cookieService: CookieService) { }

  ngOnInit() {
    this.getNextFixtures();
    this.myTeam = JSON.parse(this.cookieService.get('my-team'));
  }
}
