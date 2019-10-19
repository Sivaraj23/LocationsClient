import { Component, OnInit } from '@angular/core';
import { FindnearbylocationService } from './findnearbylocation.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Location } from '../../model/Location';
import { FetchlocationService } from '../fetch-locations/fetchlocation.service';

@Component({
  selector: 'app-findnearbylocation',
  templateUrl: './findnearbylocation.component.html',
  styleUrls: ['./findnearbylocation.component.css']
})
export class FindnearbylocationComponent implements OnInit {

  constructor(private fetch: FindnearbylocationService, private fetchAll: FetchlocationService) {
  }
  errorMessage: string;
  myControl = new FormControl();
  total = new FormControl();
  selectedLocation: any;
  displayedOptions: Location[] = [];
  nearbyLocations: Location[];
  filteredOptions: Observable<Location[]>;
  ngOnInit() {
    this.fetchAll.fetchLocations().subscribe((data) => {

      this.displayedOptions = data;
      this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(value => typeof value === 'string' ? value : value.location),
          map(name => name ? this._filter(name) : this.displayedOptions.slice())
        );
    });
  }
  displayFn(location?: Location): string | undefined {

    return location ? location.location : undefined;
  }
  fetchLocations() {
    if (this.myControl.value == undefined) {
      this.errorMessage = 'Please choose location';
    }
    else {
      this.errorMessage = null;
      this.selectedLocation = this.myControl.value;

      if ((this.selectedLocation._id === undefined) && this.myControl.value != null) {
        let found = 0;
        this.displayedOptions.forEach((location) => {
          if (this.myControl.value === location.location) {
            this.selectedLocation = location;
            found = 1;
          }
        });
        if (found === 0) {
          this.errorMessage = 'The location is not available , please choose from list';
          return;
        }
      }
      this.fetch.fetchLocations(this.selectedLocation._id, this.total.value).subscribe((data) => {
        // console.log(data)
        this.nearbyLocations = data;
      });
    }
  }

  private _filter(name: string): Location[] {
    const filterValue = name.toLowerCase();

    return this.displayedOptions.filter(option => option.location.toLowerCase().indexOf(filterValue) === 0);
  }
}
