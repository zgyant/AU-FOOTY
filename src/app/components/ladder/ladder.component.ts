import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { CookieService } from 'ngx-cookie-service';
import { Ladder } from 'src/app/models/ladder';
import { Team } from 'src/app/models/team';

@Component({
  selector: 'app-ladder',
  templateUrl: './ladder.component.html',
  styleUrls: ['./ladder.component.css']
})
export class LadderComponent implements OnInit {


  constructor(private apiService: ApiService, private cookieService: CookieService) { }

  ladder: Ladder[];
  myTeam: Team;

  getLadder(): void{
    this.apiService.getLadder()
      .subscribe(response => {this.ladder = response['ladder'];});
  }

  ngOnInit() {
    this.myTeam = JSON.parse(this.cookieService.get('my-team'));
    this.getLadder();
  }

}
