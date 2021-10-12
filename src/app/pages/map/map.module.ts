import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmbedMapComponent } from '../../components/embed-map/embed-map.component';
import { InfoBoxComponent } from '../../components/info-box/info-box.component';
import { MapboxComponent } from '../../components/mapbox/mapbox.component';
import { MapComponent } from './map.component';
import { LocationComponent } from '../../components/location/location.component';
import { LocationListComponent } from '../../components/location-list/location-list.component';

@NgModule({
  declarations: [
    MapComponent,
    EmbedMapComponent,
    InfoBoxComponent,
    MapboxComponent,
    LocationComponent,
    LocationListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ 
    MapComponent,
    EmbedMapComponent,
    InfoBoxComponent,
    MapboxComponent,
    LocationComponent,
    LocationListComponent 
  ]
})
export class MapModule { }
