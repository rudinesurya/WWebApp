import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Sensor } from 'src/app/models/Sensor';

@Component({
  selector: 'app-sensor-detail-modal',
  templateUrl: './sensor-detail-modal.component.html',
  styleUrls: ['./sensor-detail-modal.component.css']
})
export class SensorDetailModalComponent {
  sensor: Sensor;
  
  constructor(public dialogRef: MatDialogRef<SensorDetailModalComponent>,
    @Inject(MAT_DIALOG_DATA) data: Sensor) {
    this.sensor = data;
   }

  close(): void {
    this.dialogRef.close();
  }
}
