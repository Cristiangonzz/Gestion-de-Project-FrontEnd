import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllTaskComponent } from './list-all-task.component';

describe('ListAllTaskComponent', () => {
  let component: ListAllTaskComponent;
  let fixture: ComponentFixture<ListAllTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAllTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
