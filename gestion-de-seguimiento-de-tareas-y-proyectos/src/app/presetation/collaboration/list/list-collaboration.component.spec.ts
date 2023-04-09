import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllCollaborationComponent } from './list-collaboration.component';

describe('ListAllCollaborationComponent', () => {
  let component: ListAllCollaborationComponent;
  let fixture: ComponentFixture<ListAllCollaborationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllCollaborationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAllCollaborationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
