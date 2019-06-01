import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../../api.service';
import {Game} from '../../models/game';

@Component({
  selector: 'app-head-to-head',
  templateUrl: './head-to-head.component.html',
  styleUrls: ['./head-to-head.component.css']
})
export class HeadToHeadComponent implements OnInit {
    gamesFil: Game[];

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

              if((obj.ateamid==myTeamId || obj.hteamid==myTeamId) && (obj.ateamid==rivalTeamID || obj.hteamid==rivalTeamID))
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
              console.log(self.gamesFil);

          }
    }

  constructor(private apiService: ApiService) {

  }

  ngOnInit() {
      this.getHeadtoHead();
  }

}
