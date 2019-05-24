import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsPreviewComponent } from './tips-preview.component';

describe('TipsPreviewComponent', () => {
  let component: TipsPreviewComponent;
  let fixture: ComponentFixture<TipsPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipsPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
