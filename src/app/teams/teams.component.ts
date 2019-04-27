import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

    constructor(private http: HttpClient) {
    }

    ngOnInit() {




        const d=new Date();
        const year=d.getFullYear();
        console.log(year);

        //“As a fan, I want to see all the games and results so far this season for my team”
        const GET_URL = 'https://api.squiggle.com.au/?q=games;year='+year;

        //“As a fan, I want to see the prediction that my team will win their next game”
        //const GET_URL='https://api.squiggle.com.au/?q=tips;year='+year;

        //“As a fan, I want to see the head-to-head games and if available, results between my team and my
        // team’s rival <..> this season”
        //const GET_URL='https://api.squiggle.com.au/?q=games'
;

        //“As a fan, I want to see opponent and games details for the next 5 matches my team will play”
        //const GET_URL='https://api.squiggle.com.au/?q=tips;year='+year;


        this.http
            .get(GET_URL)
            .subscribe(data => {
                parseData(data);
            });



        function  parseData(data)
        {
            var games =new Array();
            $.each(data.games,function (i,obj) {
                //“As a fan, I want to see all the games and results so far this season for my team”

                // if(obj.ateamid==myTeamId||obj.hteamid==myTeamId)
                // {
                //     games.push(obj);
                // }

                //“As a fan, I want to see the prediction that my team will win their next game”
                var currentdate = new Date();

                const gameDate=new Date(obj.date);

               /* if(gameDate>currentdate)
                {
                    if(obj.date>datetime)
               {
                  if(obj.ateamid==myTeamId || obj.hteamid==myTeamId)
                  {
                   if(obj.tipteamid==myTeamId)
                   {
                       games.push(obj);
                   }
                  }
               }
                }*/

               //“As a fan, I want to see the head-to-head games and if available, results between my team and my
                // team’s rival <..> this season”

               /* if(obj.ateamid==myTeamId || obj.hteamid==myTeamd && (obj.ateamid==rivalTeamID || obj.hteamid==rivalTeamID))
                {
                    if(gameDate<currentdate)
                    {
                        game.push(obj);
                    }
                }*/

                //“As a fan, I want to see opponent and games details for the next 5 matches my team will play”

                /* if(gameDate>currentdate)
                {
                    if(obj.date>datetime)
               {
                  if(obj.ateamid==myTeamId || obj.hteamid==myTeamId)
                  {
                   if(obj.tipteamid==myTeamId)
                   {  if(game.length<=5)
                   {
                       games.push(obj);
                     }
                   }
                  }
               }
                }*/


                

            })
            return games;
        }
    }


}
