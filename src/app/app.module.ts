import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
    NearestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'fixtures', component: FixturesComponent},
      {path: 'ladder', component: LadderComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
