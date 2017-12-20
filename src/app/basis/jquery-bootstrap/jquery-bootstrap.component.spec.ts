import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JqueryBootstrapComponent } from './jquery-bootstrap.component';

describe('JqueryBootstrapComponent', () => {
  let component: JqueryBootstrapComponent;
  let fixture: ComponentFixture<JqueryBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JqueryBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JqueryBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
