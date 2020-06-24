import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerAndLocationComponent } from './player-and-location.component';

describe('PlayerAndLocationComponent', () => {
  let component: PlayerAndLocationComponent;
  let fixture: ComponentFixture<PlayerAndLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerAndLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerAndLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
