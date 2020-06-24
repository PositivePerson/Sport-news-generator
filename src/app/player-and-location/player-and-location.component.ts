import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-player-and-location',
  templateUrl: './player-and-location.component.html',
  styleUrls: ['./player-and-location.component.scss']
})
export class PlayerAndLocationComponent implements OnInit {
  player = '';

  controlLocations = new FormControl();
  locationOptions: string[] = ['Manchester', 'Barcelona', 'Paris'];
  filteredLocations: Observable<string[]>;

  ngOnInit() {
    this.filteredLocations = this.controlLocations.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterForLocations(value))
      );
  }

  private _filterForLocations(value: string): string[] {
    const filterLocations = value.toLowerCase();

    return this.locationOptions.filter(option => option.toLowerCase().includes(filterLocations));
  }

}
