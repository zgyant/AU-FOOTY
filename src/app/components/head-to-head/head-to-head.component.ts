import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {Game} from '../../models/game';
import {Team} from '../../models/team';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-head-to-head',
  templateUrl: './head-to-head.component.html',
  styleUrls: ['./head-to-head.component.css']
})
export class HeadToHeadComponent implements OnInit {
    gamesFil: Game[];
    myTeam: Team;
    myTeamR: Team;
    getHeadtoHead(): void {
        this.apiService.getAllHeadtoHead()
            .subscribe(games => {this.parseData(games)});
    }
      parseData(games) {
          var allData=new Array();
        var currentdate = new Date();
        var self=this;
         $.each(games.games,function (i,obj) {
              const gameDate=new Date(obj.date);
              if((obj.ateamid==self.myTeam.id || obj.hteamid==self.myTeam.id) &&
                  (obj.ateamid==self.myTeamR.id || obj.hteamid==self.myTeamR.id))
              {
                  if(gameDate<currentdate)
                  {
                      pushTo(obj);
                  }
              }
          });
        function pushTo(data)
          {
            allData.push(data);
              allData.sort(function (a, b) {
                  return b.date.localeCompare(a.date);
              });
            self.gamesFil=allData;

          }
    }

  constructor(private apiService: ApiService,private cookieService: CookieService, private router: Router) {

  }

  ngOnInit() {
      this.getHeadtoHead();
      this.myTeam = JSON.parse(this.cookieService.get('my-team'));
      if(this.cookieService.get('my-rteam'))
      {
          this.myTeamR = JSON.parse(this.cookieService.get('my-rteam'));
      }else {}
  }
}
