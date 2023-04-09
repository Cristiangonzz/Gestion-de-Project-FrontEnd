import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCollaborationComponent } from './delete-collaboration.component';

describe('DeleteCollaborationComponent', () => {
  let component: DeleteCollaborationComponent;
  let fixture: ComponentFixture<DeleteCollaborationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCollaborationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCollaborationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
