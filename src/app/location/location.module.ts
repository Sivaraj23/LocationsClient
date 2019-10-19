import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { UploadCSVComponent } from './upload-csv/upload-csv.component';
import { NgMaterialModule } from '../core/designs/ngmaterial.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FetchLocationsComponent } from './fetch-locations/fetch-locations.component';

import { FindnearbylocationComponent } from './findnearbylocation/findnearbylocation.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UploadCSVComponent, HomeComponent, FetchLocationsComponent, FindnearbylocationComponent],
  imports: [
    CommonModule,
    LocationRoutingModule,
    NgMaterialModule,
    HttpClientModule,
    FormsModule
  ], providers: [

  ]
})
export class LocationModule { }
