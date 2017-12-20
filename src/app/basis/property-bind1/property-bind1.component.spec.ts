import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBind1Component } from './property-bind1.component';

describe('PropertyBind1Component', () => {
  let component: PropertyBind1Component;
  let fixture: ComponentFixture<PropertyBind1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyBind1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyBind1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
