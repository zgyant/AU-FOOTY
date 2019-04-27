import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LadderComponent } from './ladder/ladder.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import { FixturesComponent } from './fixtures/fixtures.component';
import { TipsComponent } from './tips/tips.component';
import { TeamsComponent } from './teams/teams.component';

import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    LadderComponent,
    DashboardComponent,
    HeaderComponent,
    NavbarComponent,
    FixturesComponent,
    TipsComponent,
    TeamsComponent
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
    AppRoutingModule, RouterModule.forRoot([
          {path: '', component: DashboardComponent},
        {path: 'ladder', component: LadderComponent},
          {path: 'fixtures', component: FixturesComponent},
          {path: 'tips', component: TipsComponent},
          {path: 'teams', component: TeamsComponent},
          ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
