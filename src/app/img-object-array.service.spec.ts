import { TestBed } from '@angular/core/testing';

import { ImgObjectArrayService } from './img-object-array.service';

describe('ImgObjectArrayService', () => {
  let service: ImgObjectArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgObjectArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
