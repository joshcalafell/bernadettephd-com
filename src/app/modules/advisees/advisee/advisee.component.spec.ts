import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviseeComponent } from './advisee.component';

describe('AdviseeComponent', () => {
  let component: AdviseeComponent;
  let fixture: ComponentFixture<AdviseeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdviseeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdviseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
