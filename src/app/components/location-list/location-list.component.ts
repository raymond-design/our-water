import { Component, OnInit } from '@angular/core';
import { UsgsApiService } from '../../services/usgs-api/usgs-api.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
  
  constructor(private UsgsService: UsgsApiService) { }

  locationData: object[]=[];
  
  ngOnInit(): void {
    //user input for this value will be implemented:
    //testHucId = "02070010";
    this.UsgsService.getHucData("02070010").subscribe(
      (listData) => { this.locationData=listData; },
      (error) => { 
        this.locationData=[
          {siteName: "ERROR INVALID LOCATION ID",
          waterTemp: "ERROR INVALID LOCATION ID",
          waterTempTime: "ERROR INVALID LOCATION ID",
          gageHeight: "ERROR INVALID LOCATION ID",
          gageHeightTime: "ERROR INVALID LOCATION ID",
        }
        ]; 
        console.log(error); });
  }
  
}
