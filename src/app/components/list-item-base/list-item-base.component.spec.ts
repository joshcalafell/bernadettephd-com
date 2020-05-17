import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemBaseComponent } from './list-item-base.component';

describe('ListItemBaseComponent', () => {
  let component: ListItemBaseComponent;
  let fixture: ComponentFixture<ListItemBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListItemBaseComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
