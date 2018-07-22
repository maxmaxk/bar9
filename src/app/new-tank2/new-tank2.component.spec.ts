import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTank2Component } from './new-tank2.component';

describe('NewTank2Component', () => {
  let component: NewTank2Component;
  let fixture: ComponentFixture<NewTank2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTank2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTank2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
