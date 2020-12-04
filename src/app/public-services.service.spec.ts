import { TestBed } from '@angular/core/testing';

import { PublicServicesService } from './public-services.service';

describe('PublicServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PublicServicesService = TestBed.get(PublicServicesService);
    expect(service).toBeTruthy();
  });
});
