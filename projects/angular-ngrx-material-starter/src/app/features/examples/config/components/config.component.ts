import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
// import * as columnConfig from '../shared/column-config.json';
import { ColumnConfigModel } from '../shared/column-config.model';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'anms-column-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfigComponent implements OnInit {
  columnConfig: ColumnConfigModel = require('../shared/column-config.json');

  ngOnInit() {}

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  saveColunConfig() {
    console.log(this.columnConfig);
  }
}
