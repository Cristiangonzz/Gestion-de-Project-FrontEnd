import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllMemberComponent } from './list-all-member.component';

describe('ListAllMemberComponent', () => {
  let component: ListAllMemberComponent;
  let fixture: ComponentFixture<ListAllMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllMemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAllMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
