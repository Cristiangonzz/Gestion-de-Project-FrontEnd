import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingInMemberComponent } from './sing-in-member.component';

describe('SingInMemberComponent', () => {
  let component: SingInMemberComponent;
  let fixture: ComponentFixture<SingInMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingInMemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingInMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
