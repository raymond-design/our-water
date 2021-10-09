import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { MapComponent } from './pages/map/map.component';
import { StatsComponent } from './pages/stats/stats.component';
import { NewsComponent } from './pages/news/news.component';
import { FactsComponent } from './pages/facts/facts.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'map', component: MapComponent},
  {path: 'stats', component: StatsComponent},
  {path: 'news', component: NewsComponent},
  {path: 'facts', component: FactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
