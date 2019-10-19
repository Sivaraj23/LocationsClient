import { Component, OnInit } from '@angular/core';
import { FetchlocationService } from './fetchlocation.service';

@Component({
  selector: 'app-fetch-locations',
  templateUrl: './fetch-locations.component.html',
  styleUrls: ['./fetch-locations.component.css']
})
export class FetchLocationsComponent implements OnInit {

  constructor(private fetch: FetchlocationService) { }

  locations = [];

  ngOnInit() {
    this.fetchAlllocations();
  }
  fetchAlllocations() {
    this.fetch.fetchLocations().subscribe((data) => {
      this.locations = data;
    });
  }
}
