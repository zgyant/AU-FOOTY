import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Team } from 'src/app/models/team';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-choose-team',
  templateUrl: './choose-team.component.html',
  styleUrls: ['./choose-team.component.css']
})
export class ChooseTeamComponent implements OnInit {

  constructor(private apiService: ApiService, private cookieService: CookieService, private router: Router, private route: ActivatedRoute,
  ) { }

  teams: Team[];
  isTeamSelected: boolean;
  selectedTeam: Team;

  ngOnInit() {
    this.selectTeam();
  }
  selectTeam(): void{
    if(this.cookieService.check('my-team')){
      this.isTeamSelected = true;
      this.selectedTeam = JSON.parse(this.cookieService.get('my-team'));
    }else{
      this.isTeamSelected = false;
      this.apiService.getAllTeams().subscribe(
        teams => {this.teams = teams['teams']; console.log(teams)}
      );
    }
  }

  changeTeam():void{
    this.cookieService.delete('my-team');
    this.selectTeam();
  }
  onSelect(team: Team): void{
    this.cookieService.set('my-team', JSON.stringify(team));
    this.isTeamSelected = true;
    this.selectedTeam = team;
    //this.router.navigateByUrl(this.router.url, {skipLocationChange: true});
    location.reload();
  }

}
