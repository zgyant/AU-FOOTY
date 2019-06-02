import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Ladder } from 'src/app/models/ladder';
import { Team } from 'src/app/models/team';
import { ApiService } from 'src/app/services/api.service';

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
      .subscribe(response => {
        this.ladder = response['ladder'].sort((a: Ladder, b: Ladder) => {
          return a.rank - b.rank
        });
    });
  }

  ngOnInit() {
    this.myTeam = JSON.parse(this.cookieService.get('my-team'));
    this.getLadder();
  }
}
