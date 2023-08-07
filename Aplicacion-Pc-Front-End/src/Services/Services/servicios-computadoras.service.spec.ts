import { TestBed } from '@angular/core/testing';

import { ServiciosComputadorasService } from './servicios-computadoras.service';

describe('ServiciosComputadorasService', () => {
  let service: ServiciosComputadorasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosComputadorasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
