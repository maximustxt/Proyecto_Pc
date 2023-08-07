import { Component } from '@angular/core';
//- Services:
import { ServiciosComputadorasService } from 'src/Services/Services/servicios-computadoras.service';
//- Interfaces:
import { Componentes } from 'src/Interfaces/Componentes/Componentes';

@Component({
  selector: 'app-intel-core13th',
  templateUrl: './intel-core13th.component.html',
  styleUrls: ['./intel-core13th.component.scss'],
})
export class IntelCore13thComponent {
  constructor(private Servicios: ServiciosComputadorasService) {}

  IntelCore13th: Componentes[] = [];

  ngOnInit() {
    this.Servicios.GetComponentes().subscribe((date) => {
      if (Array.isArray(date)) {
        this.IntelCore13th = date.filter(
          (e) => e.Tipo === 'Procesador' && e.IdCarrusel === 'IntelCore13th'
        );
      } else {
        // Manejar el caso en el que `date` no es un arreglo válido
        return;
      }
    });
  }
}
