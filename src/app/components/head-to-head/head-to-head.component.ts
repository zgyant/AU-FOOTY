import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../../api.service';
import { CookieService } from 'ngx-cookie-service';
import {Game} from '../../models/game';
import {Team} from '../../models/team';
import { Router } from '@angular/router';

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

        var myTeamId=14;
        var rivalTeamID=1;
        var currentdate = new Date();
        var self=this;
         $.each(games.games,function (i,obj) {
              const gameDate=new Date(obj.date);

              console.log(self.myTeam.id);
              if((obj.ateamid==self.myTeam.id || obj.hteamid==self.myTeam.id) && (obj.ateamid==self.myTeamR.id || obj.hteamid==self.myTeamR.id))
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
            self.gamesFil=allData;
          }
    }

  constructor(private apiService: ApiService,private cookieService: CookieService, private router: Router) {

  }

  ngOnInit() {
      this.getHeadtoHead();
      this.myTeam = JSON.parse(this.cookieService.get('my-team'));
      this.myTeamR = JSON.parse(this.cookieService.get('my-rteam'));

  }

}
