import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'anms-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileUploadComponent implements OnInit {
  selectedFiles: FileList;
  currentFile: File;
  msg: {};

  constructor(private fileService: FileUploadService) {}

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.currentFile = this.selectedFiles.item(0);
    this.fileService.uploadFile(this.currentFile).subscribe(response => {
      // this.selectedFiles.value = '';
      if (response instanceof HttpResponse) {
        this.msg = response.body;
        console.log(response.body);
      }
    });
  }

  ngOnInit() {}
}
