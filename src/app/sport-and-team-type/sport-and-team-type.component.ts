import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-sport-and-team-type',
  templateUrl: './sport-and-team-type.component.html',
  styleUrls: ['./sport-and-team-type.component.scss']
})
export class SportAndTeamTypeComponent implements OnInit {
  controlSports = new FormControl();
  controlTeamTypes = new FormControl();

  sportOptions: string[] = ['Football', 'Basketball', 'Volleyball'];
  teamTypesOptions: string[] = ['Team', 'Beregu', 'Individual'];

  filteredSports: Observable<string[]>;
  filteredTeamTypes: Observable<string[]>;


  ngOnInit() {
    this.filteredSports = this.controlSports.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterForSports(value))
      );

    this.filteredTeamTypes = this.controlTeamTypes.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterForTeamTypes(value))
      );
  }

  private _filterForSports(value: string): string[] {
    const filterSports = value.toLowerCase();

    return this.sportOptions.filter(option => option.toLowerCase().includes(filterSports));
  }

  private _filterForTeamTypes(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.teamTypesOptions.filter(option => option.toLowerCase().includes(filterValue));
  }
}
