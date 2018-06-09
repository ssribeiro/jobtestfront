import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLocationViewComponent } from './select-location-view.component';

describe('SelectLocationViewComponent', () => {
  let component: SelectLocationViewComponent;
  let fixture: ComponentFixture<SelectLocationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectLocationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLocationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
