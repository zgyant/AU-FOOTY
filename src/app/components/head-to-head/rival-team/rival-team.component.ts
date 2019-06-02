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

    constructor(private apiService: ApiService, private cookieService: CookieService) { }

    teamsRival: Team[];
    isRivalTeamSelected: boolean;
    selectedRivalTeam: Team;

    ngOnInit() {
        this.selectTeam();
    }
    selectTeam(): void{
        if(this.cookieService.check('my-rteam')){
            this.isRivalTeamSelected = true;
            this.selectedRivalTeam = JSON.parse(this.cookieService.get('my-rteam'));
        }else{
            this.isRivalTeamSelected = false;
            this.apiService.getAllTeams().subscribe(
                teamsRival => {this.teamsRival = teamsRival['teams']; console.log(teamsRival)}
            );
        }
    }

    changeTeam():void{
        this.cookieService.delete('my-rteam');
        this.selectTeam();
    }
    onSelect(teamR: Team): void{
        this.cookieService.set('my-rteam', JSON.stringify(teamR));
        this.isRivalTeamSelected = true;
        this.selectedRivalTeam = teamR;
        location.reload();
    }
}
