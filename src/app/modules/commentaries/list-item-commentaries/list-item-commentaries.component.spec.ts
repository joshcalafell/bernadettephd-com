import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemCommentariesComponent } from './list-item-commentaries.component';

describe('ListItemCommentariesComponent', () => {
  let component: ListItemCommentariesComponent;
  let fixture: ComponentFixture<ListItemCommentariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListItemCommentariesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemCommentariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
