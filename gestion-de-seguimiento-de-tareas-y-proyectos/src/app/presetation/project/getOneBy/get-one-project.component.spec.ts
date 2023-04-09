import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOneProjectComponent } from './get-one-project.component';

describe('GetOneProjectComponent', () => {
  let component: GetOneProjectComponent;
  let fixture: ComponentFixture<GetOneProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOneProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetOneProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
