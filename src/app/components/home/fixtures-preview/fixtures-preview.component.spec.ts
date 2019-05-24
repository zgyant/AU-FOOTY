import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixturesPreviewComponent } from './fixtures-preview.component';

describe('FixturesPreviewComponent', () => {
  let component: FixturesPreviewComponent;
  let fixture: ComponentFixture<FixturesPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixturesPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixturesPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
