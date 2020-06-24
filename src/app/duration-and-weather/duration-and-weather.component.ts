import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-duration-and-weather',
  templateUrl: './duration-and-weather.component.html',
  styleUrls: ['./duration-and-weather.component.scss']
})
export class DurationAndWeatherComponent implements OnInit {
  controlWeather = new FormControl();
  weatherOptions: string[] = [
    'partly sunny',
    'scattered thunderstorms',
    'showers',
    'scattered showers',
    'rain and snow',
    'overcast',
    'light snow',
    'freezing drizzle',
    'chance of rain',
    'sunny',
    'clear',
    'mostly sunny',
    'partly cloudy',
    'mostly cloudy',
    'chance of storm',
    'rain',
    'chance of snow',
    'cloudy',
    'mist',
    'storm',
    'thunderstorm',
    'chance of tstorm',
    'sleet',
    'snow',
    'icy',
    'dust',
    'fog',
    'smoke',
    'haze',
    'flurries',
    'light rain',
    'snow showers',
    'ice/snow',
    'windy',
    'scattered snow showers'];

  filteredWeathers: Observable<string[]>;

  ngOnInit() {
    this.filteredWeathers = this.controlWeather.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterForWeather(value))
      );
  }

  private _filterForWeather(value: string): string[] {
    const filterWeather = value.toLowerCase();

    return this.weatherOptions.filter(option => option.toLowerCase().includes(filterWeather));
  }

}
