import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-embed-map',
  templateUrl: './embed-map.component.html',
  styleUrls: ['./embed-map.component.css']
})
export class EmbedMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //LOCATION = "Space+Needle,Seattle+WA"
  //SRC_URL=`https://www.google.com/maps/embed/v1/place?key=${this.API_KEY}
  //&q=${this.LOCATION}`

}
