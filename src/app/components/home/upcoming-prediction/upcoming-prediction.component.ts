import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CookieService } from 'ngx-cookie-service';
import { Tip } from 'src/app/models/tip';
import { Team } from 'src/app/models/team';

@Component({
  selector: 'app-upcoming-prediction',
  templateUrl: './upcoming-prediction.component.html',
  styleUrls: ['./upcoming-prediction.component.css']
})
export class UpcomingPredictionComponent implements OnInit {

  constructor(private apiService: ApiService, private cookieService: CookieService) { }

  tips: Tip[];
  upcomingGameTip: Tip;
  myTeam:Team;

  ngOnInit() {
    this.myTeam = JSON.parse(this.cookieService.get('my-team'));
    this.getTips();
  }

  getTips(): void{
    this.apiService.getTips()
    .subscribe(response => {
        let filtered = response['tips'].sort((a: Tip, b: Tip) => {
          return new Date (a.date).getTime() - new Date(b.date).getTime();
        });
        this.upcomingGameTip = filtered.find(tip => {
          return (tip.ateamid == this.myTeam.id || tip.hteamid == this.myTeam.id) && new Date(tip.date).getTime() > new Date().getTime()
        });
        this.tips = filtered.filter(tip => {
          if(tip.tipteamid == this.myTeam.id)
            return tip;
        });
        console.log("upcoming");
        console.log(this.upcomingGameTip);
        console.log("~upcoming~");
    });
  }
}
