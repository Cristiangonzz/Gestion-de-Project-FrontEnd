import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOneMemberComponent } from './get-one-member.component';

describe('GetOneMemberComponent', () => {
  let component: GetOneMemberComponent;
  let fixture: ComponentFixture<GetOneMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOneMemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetOneMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
