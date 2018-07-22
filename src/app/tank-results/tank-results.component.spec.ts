import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankResultsComponent } from './tank-results.component';

describe('TankResultsComponent', () => {
  let component: TankResultsComponent;
  let fixture: ComponentFixture<TankResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
