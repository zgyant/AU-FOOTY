import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { CookieService } from 'ngx-cookie-service';
import { Team } from 'src/app/models/team';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})
export class FixturesComponent implements OnInit {
  games: Game[];
  myTeam: Team;
  rounds: number[] = [];

  allGames: Game[];
  myGames: Game[];

  getFixtures(): void {
    this.apiService.getAllGamesAndResults()
      .subscribe(response => {
        this.allGames = response['games'];
        this.games = this.allGames.filter((game: Game) => {
          if(!this.rounds.find(n => n === game.round)){
            this.rounds.push(game.round);
            this.rounds.sort((a,b)=>{ return b-a; });
          }
          return game.ateamid == this.myTeam.id || game.hteamid == this.myTeam.id;
        });
        this.games.sort((a:Game, b:Game) => {return new Date(b.date).getTime() - new Date(a.date).getTime() })
      });
  }
  changeRound(e):void{
    let round = e.target.value;
    if (round > 0){
      this.games = this.allGames.filter((game: Game) => {
        return game.round == round;
      });
    }else{
      this.getFixtures();
    }
  }

  constructor(private apiService: ApiService, private cookieService: CookieService) { }

  ngOnInit() {
    this.getFixtures();
    this.myTeam = JSON.parse(this.cookieService.get('my-team'));
  }
}
