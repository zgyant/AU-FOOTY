import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearestComponent } from './nearest.component';

describe('NearestComponent', () => {
  let component: NearestComponent;
  let fixture: ComponentFixture<NearestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
