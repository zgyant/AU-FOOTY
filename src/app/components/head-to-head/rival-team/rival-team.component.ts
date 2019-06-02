import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-rival-team',
  templateUrl: './rival-team.component.html',
  styleUrls: ['./rival-team.component.css']
})
export class RivalTeamComponent implements OnInit {
    constructor(private apiService: ApiService, private cookieService: CookieService, private router: Router, private route: ActivatedRoute,
    ) { }
    teams: Team[];
    isTeamSelected: boolean;
    selectedTeamRival: Team;


  ngOnInit() {
      this.selectTeam();
  }
    selectTeam(): void{
        if(this.cookieService.check('my-rteam')){
            this.isTeamSelected = true;
            this.selectedTeamRival = JSON.parse(this.cookieService.get('my-rteam'));
        }else{
            this.isTeamSelected = false;
            this.apiService.getAllTeams().subscribe(
                teams => {this.teams = teams['teams'];
                console.log(teams)
                }
            );
        }
    }

    changeTeam():void{
        this.cookieService.delete('my-rteam');
        this.selectTeam();
    }
    onSelect(team: Team): void{
        this.cookieService.set('my-rteam', JSON.stringify(team));
        this.isTeamSelected = true;
        this.selectedTeamRival = team;
        //this.router.navigateByUrl(this.router.url, {skipLocationChange: true});
        location.reload();
    }


}
