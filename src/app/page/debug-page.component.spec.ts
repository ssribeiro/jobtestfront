import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugPageComponent } from './debug-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('DebugPageComponent', () => {
  let component: DebugPageComponent;
  let fixture: ComponentFixture<DebugPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ DebugPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a link to screen debug page', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a').textContent).toContain('screen');
  });

});
