import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WeatherDataItemComponent } from './components/weather-data-item/weather-data-item.component';
import { WeatherDataListComponent } from './components/weather-data-list/weather-data-list.component';
import { SensorListComponent } from './components/sensor-list/sensor-list.component';
import { SensorItemComponent } from './components/sensor-item/sensor-item.component';
import { AddSensorModalComponent } from './components/add-sensor-modal/add-sensor-modal.component';
import { AddWeatherDataModalComponent } from './components/add-weather-data-modal/add-weather-data-modal.component';
import { SensorDetailViewComponent } from './components/sensor-detail-view/sensor-detail-view.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SensorService } from './services/sensor.service';
import { WeatherDataService } from './services/weather-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherDataItemComponent,
    WeatherDataListComponent,
    SensorListComponent,
    SensorItemComponent,
    AddSensorModalComponent,
    AddWeatherDataModalComponent,
    SensorDetailViewComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: '**', component: PageNotFoundComponent },
    ])
  ],
  providers: [
    SensorService,
    WeatherDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
