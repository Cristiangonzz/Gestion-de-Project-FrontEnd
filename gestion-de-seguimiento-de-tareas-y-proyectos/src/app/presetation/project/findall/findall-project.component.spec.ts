import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindallComponent } from './findall-project.component';

describe('FindallComponent', () => {
  let component: FindallComponent;
  let fixture: ComponentFixture<FindallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
