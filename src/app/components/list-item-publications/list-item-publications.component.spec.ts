import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemPublicationsComponent } from './list-item-publications.component';

describe('ListItemPublicationsComponent', () => {
  let component: ListItemPublicationsComponent;
  let fixture: ComponentFixture<ListItemPublicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListItemPublicationsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
