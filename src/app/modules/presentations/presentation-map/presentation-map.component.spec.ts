import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationMapComponent } from './presentation-map.component';

describe('PresentationMapComponent', () => {
  let component: PresentationMapComponent;
  let fixture: ComponentFixture<PresentationMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PresentationMapComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
