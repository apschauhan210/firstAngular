import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeakStudentsComponent } from './weak-students.component';

describe('WeakStudentsComponent', () => {
  let component: WeakStudentsComponent;
  let fixture: ComponentFixture<WeakStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeakStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeakStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
