import { TestBed } from '@angular/core/testing';

import { SalidaContenedorService } from './salida-contenedor.service';

describe('SalidaContenedorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalidaContenedorService = TestBed.get(SalidaContenedorService);
    expect(service).toBeTruthy();
  });
});
