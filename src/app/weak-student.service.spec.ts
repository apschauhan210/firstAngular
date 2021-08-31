import { TestBed } from '@angular/core/testing';

import { WeakStudentService } from './weak-student.service';

describe('WeakStudentService', () => {
  let service: WeakStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeakStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
