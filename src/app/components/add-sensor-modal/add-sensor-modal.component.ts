import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-add-sensor-modal',
  templateUrl: './add-sensor-modal.component.html',
})
export class AddSensorModalComponent {
  title: string;
  form: FormGroup;
  
  constructor(
    public dialogRef: MatDialogRef<AddSensorModalComponent>
  ) {
    this.title = "Add New Sensor";
    this.form = new FormGroup({
      name: new FormControl(''),
      city: new FormControl(''),
      country: new FormControl('')
    });
  }

  save(): void {
    this.dialogRef.close(this.form.value);
  }

  close(): void {
    this.dialogRef.close();
  }
}
