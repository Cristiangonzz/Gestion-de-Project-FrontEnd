import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOneTaskComponent } from './list-one-task.component';

describe('ListOneTaskComponent', () => {
  let component: ListOneTaskComponent;
  let fixture: ComponentFixture<ListOneTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOneTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOneTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
