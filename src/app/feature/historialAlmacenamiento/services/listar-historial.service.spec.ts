import { TestBed } from '@angular/core/testing';

import { ListarHistorialService } from './listar-historial.service';

describe('ListarHistorialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListarHistorialService = TestBed.get(ListarHistorialService);
    expect(service).toBeTruthy();
  });
});
