import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { UploadCSVComponent } from './upload-csv/upload-csv.component';

@NgModule({
  declarations: [UploadCSVComponent],
  imports: [
    CommonModule,
    LocationRoutingModule
  ]
})
export class LocationModule { }
