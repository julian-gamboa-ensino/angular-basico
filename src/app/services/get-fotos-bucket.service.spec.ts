import { TestBed } from '@angular/core/testing';

import { GetFotosBucketService } from './get-fotos-bucket.service';

describe('GetFotosBucketService', () => {
  let service: GetFotosBucketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFotosBucketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
