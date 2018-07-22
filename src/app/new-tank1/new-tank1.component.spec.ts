import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTank1Component } from './new-tank1.component';

describe('NewTank1Component', () => {
  let component: NewTank1Component;
  let fixture: ComponentFixture<NewTank1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTank1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTank1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
