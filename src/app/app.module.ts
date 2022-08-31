import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SensorListComponent } from './components/sensor-list/sensor-list.component';
import { AddSensorModalComponent } from './components/add-sensor-modal/add-sensor-modal.component';
import { AddWeatherDataModalComponent } from './components/add-weather-data-modal/add-weather-data-modal.component';
import { SensorDetailModalComponent } from './components/sensor-detail-modal/sensor-detail-modal.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SensorService } from './services/sensor.service';
import { WeatherDataService } from './services/weather-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SensorListComponent,
    AddSensorModalComponent,
    AddWeatherDataModalComponent,
    SensorDetailModalComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: '**', component: PageNotFoundComponent },
    ]),
    BrowserAnimationsModule
  ],
  providers: [
    SensorService,
    WeatherDataService
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddSensorModalComponent, AddWeatherDataModalComponent, SensorDetailModalComponent]
})
export class AppModule { }
