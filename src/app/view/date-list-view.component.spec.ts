import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateListViewComponent } from './date-list-view.component';

describe('DateListViewComponent', () => {
  let component: DateListViewComponent;
  let fixture: ComponentFixture<DateListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
