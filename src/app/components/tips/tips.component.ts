import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { CookieService } from 'ngx-cookie-service';
import { Team } from 'src/app/models/team';
import { Tip } from 'src/app/models/tip';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {

  constructor(private apiService: ApiService, private cookieService: CookieService) { }

  tips: Tip[];
  myTeam:Team;

  getTips(): void{
    this.apiService.getTips()
    .subscribe(
      response => {
        let filtered = response['tips'];
        this.tips = filtered.filter(tip => {
          return tip.tipteamid == this.myTeam.id;
        })
    });
  }

  ngOnInit() {
    this.myTeam = JSON.parse(this.cookieService.get('my-team'));
    this.getTips();
  }

}
