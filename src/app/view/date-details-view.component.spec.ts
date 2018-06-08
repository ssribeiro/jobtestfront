import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateDetailsViewComponent } from './date-details-view.component';

describe('DateDetailsViewComponent', () => {
  let component: DateDetailsViewComponent;
  let fixture: ComponentFixture<DateDetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateDetailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
