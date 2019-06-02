import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-nearest',
  templateUrl: './nearest.component.html',
  styleUrls: ['./nearest.component.css']
})
export class NearestComponent implements OnInit {

  constructor(private apiService: ApiService) {}

    myLat: number;
    myLong: number;
    myAddress: string;
    year: number = new Date().getFullYear();
    previousDistance: number = 10000;

    deg2rad(deg) {
      return deg * (Math.PI/180);
    }

    showPosition(position) {
      console.log(position);
      this.myLat = position.coords.latitude;
      this.myLong = position.coords.longitude;
    }

    getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
      var R = 6371; // Radius of the earth in km
      var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
      var dLon = this.deg2rad(lon2-lon1);
      var a =
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
          Math.sin(dLon/2) * Math.sin(dLon/2)
      ;
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      var d = R * c; // Distance in km
      // console.log(d);
      return d;
    }

    parseData(data)
    {
      // var objRequired;
      var games = new Array();
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
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
                  var dis = this.getDistanceFromLatLonInKm(this.myLat, this.myLong, gLat, gLong);
                  if (dis < this.previousDistance) {
                       //objRequired = obj;
                      games[0] = obj;
                      this.previousDistance = dis;
                  }
              }
          });
          this.myAddress = obj.venue;
          var currentdate = new Date();
          const gameDate = new Date(obj.date);
      });
      console.log(games);
      return games;
    }

  ngOnInit() {
    this.apiService.getNextFixtures().subscribe(data => {this.parseData(data);});
  }
}
