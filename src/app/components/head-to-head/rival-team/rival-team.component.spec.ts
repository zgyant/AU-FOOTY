import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RivalTeamComponent } from './rival-team.component';

describe('RivalTeamComponent', () => {
  let component: RivalTeamComponent;
  let fixture: ComponentFixture<RivalTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RivalTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RivalTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
