import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertCharacterComponent } from './alert-character.component';

describe('AlertCharacterComponent', () => {
  let component: AlertCharacterComponent;
  let fixture: ComponentFixture<AlertCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertCharacterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
