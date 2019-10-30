import { TestBed } from '@angular/core/testing';

import { AllGamesService } from './all-games.service';

describe('AllGamesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllGamesService = TestBed.get(AllGamesService);
    expect(service).toBeTruthy();
  });
});
