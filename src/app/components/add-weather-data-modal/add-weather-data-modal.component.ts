import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-add-weather-data-modal',
  templateUrl: './add-weather-data-modal.component.html',
})
export class AddWeatherDataModalComponent {
  title: string;
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddWeatherDataModalComponent>
  ) {
    this.title = "Add Weather Data";
    this.form = new FormGroup({
      temperature: new FormControl(30),
      humidity: new FormControl(30),
      dateTime: new FormControl(Date.now),
      sensorId: new FormControl(''),
    });
  }

  save(): void {
    this.dialogRef.close(this.form.value);
  }

  close(): void {
    this.dialogRef.close();
  }
}
