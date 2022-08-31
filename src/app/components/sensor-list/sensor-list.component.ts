import { Component, OnInit } from '@angular/core';
import { Sensor } from 'src/app/models/Sensor';
import { SensorService } from 'src/app/services/sensor.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SensorDetailModalComponent } from '../sensor-detail-modal/sensor-detail-modal.component';

@Component({
  selector: 'app-sensor-list',
  templateUrl: './sensor-list.component.html',
})
export class SensorListComponent implements OnInit {
  sensors: Sensor[] = [];

  constructor(private sensorService: SensorService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    let endDate = new Date(); 
    let startDate = new Date();  
    startDate.setFullYear(startDate.getFullYear() - 1);

    this.sensorService.getSensors(undefined, startDate, endDate)
      .subscribe( {
        next: (sensors) => this.sensors = sensors,
        error: (error) => {
          console.error(error);
          alert(error.error.title ?? error.error);
        }
      });
  }

  onItemClick(value: Sensor){
    const dialogRef = this.dialog.open(SensorDetailModalComponent, {
      height: '45em',
      disableClose: true,
      autoFocus: true,
      data: value,
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
}
