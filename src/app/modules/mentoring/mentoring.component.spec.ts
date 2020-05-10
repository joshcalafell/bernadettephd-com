import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentoringComponent } from './mentoring.component';

describe('TeachingAndMentoringComponent', () => {
  let component: MentoringComponent;
  let fixture: ComponentFixture<MentoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MentoringComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
