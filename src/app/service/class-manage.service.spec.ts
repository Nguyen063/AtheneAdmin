import { TestBed } from '@angular/core/testing';

import { ClassManageService } from './class-manage.service';

describe('ClassManageService', () => {
  let service: ClassManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
