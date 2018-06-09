import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLocationPageComponent } from './select-location-page.component';

describe('SelectLocationPageComponent', () => {
  let component: SelectLocationPageComponent;
  let fixture: ComponentFixture<SelectLocationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectLocationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLocationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
