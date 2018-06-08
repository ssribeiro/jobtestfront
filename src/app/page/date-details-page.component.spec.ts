import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateDetailsPageComponent } from './date-details-page.component';

describe('DateDetailsPageComponent', () => {
  let component: DateDetailsPageComponent;
  let fixture: ComponentFixture<DateDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
