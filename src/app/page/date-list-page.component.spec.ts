import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateListPageComponent } from './date-list-page.component';

describe('DateListPageComponent', () => {
  let component: DateListPageComponent;
  let fixture: ComponentFixture<DateListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
