import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DurationAndWeatherComponent } from './duration-and-weather.component';

describe('DurationAndWeatherComponent', () => {
  let component: DurationAndWeatherComponent;
  let fixture: ComponentFixture<DurationAndWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DurationAndWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DurationAndWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
