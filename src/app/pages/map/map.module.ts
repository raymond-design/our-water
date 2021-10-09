import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmbedMapComponent } from '../../../app/components/embed-map/embed-map.component';
import { InfoBoxComponent } from '../../../app/components/info-box/info-box.component';
import { MapComponent } from './map.component';

@NgModule({
  declarations: [
    MapComponent,
    EmbedMapComponent,
    InfoBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ 
    MapComponent,
    EmbedMapComponent,
    InfoBoxComponent ]
})
export class MapModule { }
