import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTank3Component } from './new-tank3.component';

describe('NewTank3Component', () => {
  let component: NewTank3Component;
  let fixture: ComponentFixture<NewTank3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTank3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTank3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
