import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseTankComponent } from './browse-tank.component';

describe('BrowseTankComponent', () => {
  let component: BrowseTankComponent;
  let fixture: ComponentFixture<BrowseTankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseTankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseTankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
