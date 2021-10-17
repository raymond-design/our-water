import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { StatsComponent } from './pages/stats/stats.component';
import { NewsComponent } from './pages/news/news.component';
import { FactsComponent } from './pages/facts/facts.component';
import { FooterComponent } from './components/footer/footer.component';

import { MapModule } from './pages/map/map.module';
import { HttpClientModule } from '@angular/common/http';
import { ComparisonMapComponent } from './components/comparison-map/comparison-map.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    StatsComponent,
    NewsComponent,
    FactsComponent,
    FooterComponent,
    ComparisonMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MapModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
