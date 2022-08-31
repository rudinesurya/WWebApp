import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { WeatherDataService } from 'src/app/services/weather-data.service';
import { SensorService } from 'src/app/services/sensor.service';
import { AddSensorModalComponent } from '../add-sensor-modal/add-sensor-modal.component';
import { AddWeatherDataModalComponent } from '../add-weather-data-modal/add-weather-data-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(public dialog: MatDialog,
    private sensorService: SensorService,
    private weatherDataService: WeatherDataService) { }

  ngOnInit(): void {
  }

  addNewSensor(){
    const dialogRef = this.dialog.open(AddSensorModalComponent, {
      disableClose: true,
      autoFocus: true,
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.sensorService.addSensor(result)
        .subscribe( {
          next: () => {},
          error: (error) => {
            console.error(error);
            alert(error.error.title ?? error.error);
          }
        });
      }
    });
  }

  addNewWeatherData(){
    const dialogRef = this.dialog.open(AddWeatherDataModalComponent, {
      disableClose: true,
      autoFocus: true,
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.weatherDataService.addWeatherData(result)
        .subscribe( {
          next: () => {},
          error: (error) => {
            console.error(error);
            alert(error.error.title ?? error.error);
          }
        });
      }
    });
  }
}
