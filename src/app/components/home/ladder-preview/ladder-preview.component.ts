import { Component, OnInit } from '@angular/core';
import { Ladder } from 'src/app/models/ladder';
import { Team } from 'src/app/models/team';
import { ApiService } from 'src/app/api.service';
import { CookieService } from 'ngx-cookie-service';
import { filter } from 'rxjs/operators';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-ladder-preview',
  templateUrl: './ladder-preview.component.html',
  styleUrls: ['./ladder-preview.component.css']
})
export class LadderPreviewComponent implements OnInit {

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
