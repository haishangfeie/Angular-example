import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcommandComponent } from './ngcommand.component';

describe('NgcommandComponent', () => {
  let component: NgcommandComponent;
  let fixture: ComponentFixture<NgcommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgcommandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
