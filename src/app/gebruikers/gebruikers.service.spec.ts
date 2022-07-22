import { TestBed } from '@angular/core/testing';

import { GebruikersService } from './gebruikers.service';

describe('GebruikersService', () => {
  let service: GebruikersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GebruikersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
