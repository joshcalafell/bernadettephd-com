import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentariesComponent } from './commentaries.component';

describe('MediaCommentaryComponent', () => {
  let component: CommentariesComponent;
  let fixture: ComponentFixture<CommentariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommentariesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
