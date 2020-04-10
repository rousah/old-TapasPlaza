import { TestBed } from '@angular/core/testing';

import { CurrentPlatformService } from './current-platform.service';

describe('CurrentPlatformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentPlatformService = TestBed.get(CurrentPlatformService);
    expect(service).toBeTruthy();
  });
});
