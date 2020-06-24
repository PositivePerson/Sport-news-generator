import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportAndTeamTypeComponent } from './sport-and-team-type.component';

describe('SportAndTeamTypeComponent', () => {
  let component: SportAndTeamTypeComponent;
  let fixture: ComponentFixture<SportAndTeamTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportAndTeamTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportAndTeamTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
