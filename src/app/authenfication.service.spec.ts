import { TestBed, inject } from '@angular/core/testing';

import { AutenficationService } from './autenfication.service';

describe('AutenficationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutenficationService]
    });
  });

  it('should be created', inject([AutenficationService], (service: AutenficationService) => {
    expect(service).toBeTruthy();
  }));
});
