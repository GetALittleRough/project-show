import { TestBed } from '@angular/core/testing';

import { UsageinfoService } from './usageinfo.service';

describe('UsageinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsageinfoService = TestBed.get(UsageinfoService);
    expect(service).toBeTruthy();
  });
});
