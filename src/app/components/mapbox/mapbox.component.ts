import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import {environment} from '../../../environments/environment';
@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.css']
})
export class MapboxComponent implements OnInit, AfterViewInit {
  map!: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 37.75;
  lng = -122.41;
  //lat and lng can be taken from usgsapi (once it is implemented)
  constructor() { 
  }

  ngOnInit(): void {
      this.map = new mapboxgl.Map({
        container: 'map',
        style: this.style,
        zoom: 13,
        center: [this.lng, this.lat],
        accessToken: environment.mapbox.accessToken
      });
    this.map.addControl(new mapboxgl.NavigationControl());

    ngAfterViewInit():

  }

}
