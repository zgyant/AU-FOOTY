import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LadderPreviewComponent } from './ladder-preview.component';

describe('LadderPreviewComponent', () => {
  let component: LadderPreviewComponent;
  let fixture: ComponentFixture<LadderPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LadderPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LadderPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
