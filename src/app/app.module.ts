import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { LadderPreviewComponent } from './components/home/ladder-preview/ladder-preview.component';
import { TipsPreviewComponent } from './components/home/tips-preview/tips-preview.component';
import { FixturesComponent } from './components/fixtures/fixtures.component';
import { LadderComponent } from './components/ladder/ladder.component';
import { TipsComponent } from './components/tips/tips.component';
import { FixturesPreviewComponent } from './components/home/fixtures-preview/fixtures-preview.component';
import { HomeComponent } from './components/home/home/home.component';
import { NearestComponent } from './components/geolocation/nearest/nearest.component';
import { HeadToHeadComponent } from './components/head-to-head/head-to-head.component';
import { UpcomingPredictionComponent } from './components/home/upcoming-prediction/upcoming-prediction.component';
import { TeamsComponent } from './teams/teams.component';
import { ChooseTeamComponent } from "./components/home/choose-team/choose-team.component";
import { CookieService } from "ngx-cookie-service";
import * as $ from 'jquery';
import 'datatables.net';
import { RivalTeamComponent } from './components/head-to-head/rival-team/rival-team.component';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BannerComponent,
    LadderPreviewComponent,
    TipsPreviewComponent,
    FixturesComponent,
    LadderComponent,
    TipsComponent,
    FixturesPreviewComponent,
    HomeComponent,
    NearestComponent,
    FixturesComponent,
    TipsComponent,
    HeadToHeadComponent,
    UpcomingPredictionComponent,
    TeamsComponent,
    ChooseTeamComponent,
    RivalTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'fixtures', component: FixturesComponent},
      {path: 'ladder', component: LadderComponent},
      {path: 'tips', component: TipsComponent},
      {path: 'head2head', component: HeadToHeadComponent},
      {path: 'teams', component: TeamsComponent},
    ]),
    HttpClientModule
  ],
  providers: [CookieService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
