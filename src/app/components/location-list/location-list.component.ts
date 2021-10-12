import { Component, OnInit } from '@angular/core';
import { UsgsApiService } from '../../services/usgs-api/usgs-api.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
  
  constructor(private UsgsService: UsgsApiService) { }

  locationData: any;
  
  ngOnInit(): void {
    //user input for this value will be implemented:
    //testHucId = "02070010";
    this.UsgsService.getHucData("02070010").subscribe(
      (listData) => { this.locationData=listData; },
      (error) => { console.log(error); });
  }
  
  //getListData(huc: string){
  //  this.locationData=this.UsgsService.getHucData(huc);
  //}

}
