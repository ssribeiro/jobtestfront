import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugScreenPageComponent } from './debug-screen-page.component';

describe('DebugScreenPageComponent', () => {
  let component: DebugScreenPageComponent;
  let fixture: ComponentFixture<DebugScreenPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebugScreenPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugScreenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
