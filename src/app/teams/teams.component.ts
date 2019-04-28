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
        var myLat;
        var myLong;
        const myAddress;
        const d=new Date();
        const year=d.getFullYear();
        var previousDistance=10000;



        // console.log(year);

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

        // “As a fan, I want to see the games that are playing at the closest stadium to my current
        // location”
        //const GET_URL='https://api.squiggle.com.au/?q=games'

        this.http
            .get(GET_URL)
            .subscribe(data => {
                parseData(data);
            });



        function  parseData(data)
        {
            var objRequired;
            var games =new Array();

            $.each(data.games,function (i,obj) {
                var gLat;
                var gLong;
                $.ajax({
                    url:"https://maps.googleapis.com/maps/api/geocode/json?address="+obj.venue+"&country=Australia&key=AIzaSyD5sNcTWrCpuDoXUOTh5w_cNKtHH_rToN0",
                    success:function(gdata) {
                        gLat = gdata.results[0].geometry.location.lat;
                        gLong = gdata.results[0].geometry.location.lng;
                        var dis = getDistanceFromLatLonInKm(myLat, myLong, gLat, gLong);
                        if (dis < previousDistance) {
                             //objRequired = obj;
                            games[0]=obj;
                            previousDistance=dis;
                        }
                    }
                });

                // this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+myAddress+'&key=AIzaSyD5sNcTWrCpuDoXUOTh5w_cNKtHH_rToN0').
                // subscribe(gdata=>{
                //         console.log(gdata);
                //         //gData(gdata);
                //     }
                // );

                this.myAddress=obj.venue;
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


            //“As a fan, I want to see the games that are playing at the closest stadium to my current location”

                //my google api key: AIzaSyD5sNcTWrCpuDoXUOTh5w_cNKtHH_rToN0


                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(showPosition);
                    } else {
                       console.log("Geolocation is not supported by this browser.");
                    }


                function showPosition(position,gLat,gLong) {
                     myLat=position.coords.latitude;
                     myLong=position.coords.longitude;
                    }



            });

            console.log(games);
            function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
                var R = 6371; // Radius of the earth in km
                var dLat = deg2rad(lat2-lat1);  // deg2rad below
                var dLon = deg2rad(lon2-lon1);
                var a =
                    Math.sin(dLat/2) * Math.sin(dLat/2) +
                    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                    Math.sin(dLon/2) * Math.sin(dLon/2)
                ;
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
                var d = R * c; // Distance in km
                // console.log(d);

                return d;
            }

            function deg2rad(deg) {
                return deg * (Math.PI/180);
            }
            return games;
        }

    }


}
