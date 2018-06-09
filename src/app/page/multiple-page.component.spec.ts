import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplePageComponent } from './multiple-page.component';

describe('MultiplePageComponent', () => {
  let component: MultiplePageComponent;
  let fixture: ComponentFixture<MultiplePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiplePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
