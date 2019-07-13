import { TestBed } from '@angular/core/testing';

import { ClaveService } from './clave.service';

describe('ClaveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClaveService = TestBed.get(ClaveService);
    expect(service).toBeTruthy();
  });
});
