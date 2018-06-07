import { TestBed, inject } from '@angular/core/testing';

import { TestServerService } from './test-server.service';

describe('TestServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestServerService]
    });
  });

  it('should be created', inject([TestServerService], (service: TestServerService) => {
    expect(service).toBeTruthy();
  }));
});
