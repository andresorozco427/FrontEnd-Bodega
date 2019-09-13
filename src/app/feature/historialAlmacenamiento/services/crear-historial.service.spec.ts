import { TestBed } from '@angular/core/testing';

import { CrearHistorialService } from './crear-historial.service';

describe('CrearHistorialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrearHistorialService = TestBed.get(CrearHistorialService);
    expect(service).toBeTruthy();
  });
});
