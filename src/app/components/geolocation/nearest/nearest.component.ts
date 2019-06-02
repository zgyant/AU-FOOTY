import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { HttpClient } from '@angular/common/http';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-nearest',
  templateUrl: './nearest.component.html',
  styleUrls: ['./nearest.component.css']
})
export class NearestComponent implements OnInit {

  constructor(private http: HttpClient, private apiService: ApiService) {}

  nearestGames: Game[];

  ngOnInit() {
    this.apiService.getAllGamesAndResults().subscribe(data => {this.parseData(data);});
  }

  parseData(data)
  {
    var myLat;
    var myLong;
    var previousDistance=10000;

    var games = new Array();

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        this.ngOnInit();
    } else {
      console.log("Geolocation is not supported by this browser.");
    }

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
              games[0] = obj;
              previousDistance = dis;
          }
        }
      });
      this.myAddress = obj.venue;
    });

    console.log(games);
    this.nearestGames = games;

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
    function showPosition(position) {
      myLat=position.coords.latitude;
      myLong=position.coords.longitude;
    }
    function deg2rad(deg) {
        return deg * (Math.PI/180);
    }
    return games;
  }

}
