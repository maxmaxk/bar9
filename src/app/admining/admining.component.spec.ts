import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminingComponent } from './admining.component';

describe('AdminingComponent', () => {
  let component: AdminingComponent;
  let fixture: ComponentFixture<AdminingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
