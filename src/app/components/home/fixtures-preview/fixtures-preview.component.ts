import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../api.service';
import { Game } from 'src/app/models/game';
import { CookieService } from 'ngx-cookie-service';
import { Team } from 'src/app/models/team';

@Component({
  selector: 'app-fixtures-preview',
  templateUrl: './fixtures-preview.component.html',
  styleUrls: ['./fixtures-preview.component.css']
})
export class FixturesPreviewComponent implements OnInit {

	games: Game[];
	myTeam= Team;

	getNextFixtures(): void {
    this.apiService.getNextFixtures()
      .subscribe(response => {
        this.games = response['games'];
      });
  }

  constructor(private apiService: ApiService, private cookieService: CookieService) { }

  ngOnInit() {
    this.getNextFixtures();
    this.myTeam = JSON.parse(this.cookieService.get('my-team'));
  }
}
