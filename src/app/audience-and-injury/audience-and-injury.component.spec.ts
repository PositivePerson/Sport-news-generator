import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudienceAndInjuryComponent } from './audience-and-injury.component';

describe('AudienceAndInjuryComponent', () => {
  let component: AudienceAndInjuryComponent;
  let fixture: ComponentFixture<AudienceAndInjuryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudienceAndInjuryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudienceAndInjuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
