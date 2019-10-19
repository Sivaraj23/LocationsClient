import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { UploadService } from './upload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-csv',
  templateUrl: './upload-csv.component.html',
  styleUrls: ['./upload-csv.component.css']
})

export class UploadCSVComponent implements OnInit {

  fileData: File = null;
  error: string = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  constructor(private upload: UploadService) { }

  ngOnInit() {
  }

  fileProgress(fileInput: any) {
    this.fileData = fileInput.target.files[0] as File;
    this.validate();
  }

  validate() {
    // Show preview
    let fileType = this.fileData.type;
    if (fileType.match(/(excel)$/) == null) {
      this.error = 'Please upload a csv file';
    } else {
      this.error = null;
    }


  }

  onSubmit() {

    const formData = new FormData();
    formData.append('csvFile', this.fileData);

    this.fileUploadProgress = '0%';


    this.upload.postFile(formData).subscribe(events => {
      if (events.type === HttpEventType.UploadProgress) {
        this.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%';
        console.log(this.fileUploadProgress);
      } else if (events.type === HttpEventType.Response) {
        this.fileUploadProgress = '';
        console.log(events.body);

        alert('SUCCESS !!');
        window.location.reload();

      }

    });
  }
}
