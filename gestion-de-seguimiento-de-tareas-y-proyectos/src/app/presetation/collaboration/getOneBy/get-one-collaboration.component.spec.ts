import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOneCollaborationComponent } from './get-one-collaboration.component';

describe('GetOneCollaborationComponent', () => {
  let component: GetOneCollaborationComponent;
  let fixture: ComponentFixture<GetOneCollaborationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOneCollaborationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetOneCollaborationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
