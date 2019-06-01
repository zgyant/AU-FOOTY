import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { LadderPreviewComponent } from './components/home/ladder-preview/ladder-preview.component';
import { TipsPreviewComponent } from './components/home/tips-preview/tips-preview.component';
import { FixturesComponent } from './components/fixtures/fixtures.component';
import { LadderComponent } from './components/ladder/ladder.component';
import { TipsComponent } from './components/tips/tips.component';
import { FixturesPreviewComponent } from './components/home/fixtures-preview/fixtures-preview.component';
import { HomeComponent } from './components/home/home/home.component';
import { NearestComponent } from './components/geolocation/nearest/nearest.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { HeadToHeadComponent } from './components/head-to-head/head-to-head.component';
import { UpcomingPredictionComponent } from './components/home/upcoming-prediction/upcoming-prediction.component';
import { TeamsComponent } from './teams/teams.component';
import { ChooseTeamComponent } from "./components/home/choose-team/choose-team.component";
import { CookieService } from "ngx-cookie-service";
import * as $ from 'jquery';
import 'datatables.net';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    CarouselComponent,
    BannerComponent,
    LadderPreviewComponent,
    TipsPreviewComponent,
    FixturesComponent,
    LadderComponent,
    TipsComponent,
    FixturesPreviewComponent,
    HomeComponent,
    NearestComponent,
    HeaderComponent,
    FixturesComponent,
    TipsComponent,
    DashboardComponent,
    HeadToHeadComponent,
    UpcomingPredictionComponent,
    TeamsComponent,
    ChooseTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: '', component: DashboardComponent},
      {path: 'fixtures', component: FixturesComponent},
      {path: 'ladder', component: LadderComponent},
      {path: 'tips', component: TipsComponent},
      {path: 'head2head', component: HeadToHeadComponent},
      {path: 'teams', component: TeamsComponent},
    ]),
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
