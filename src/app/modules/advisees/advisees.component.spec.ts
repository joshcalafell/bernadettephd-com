import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviseesComponent } from './advisees.component';

describe('AdviseesComponent', () => {
  let component: AdviseesComponent;
  let fixture: ComponentFixture<AdviseesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdviseesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdviseesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
