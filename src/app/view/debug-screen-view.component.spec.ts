import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugScreenViewComponent } from './debug-screen-view.component';

describe('DebugScreenViewComponent', () => {
  let component: DebugScreenViewComponent;
  let fixture: ComponentFixture<DebugScreenViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebugScreenViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugScreenViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
