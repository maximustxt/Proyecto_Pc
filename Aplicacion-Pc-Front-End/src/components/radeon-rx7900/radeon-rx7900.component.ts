import { Component } from '@angular/core';
//- Services:
import { ServiciosComputadorasService } from 'src/Services/Services/servicios-computadoras.service';
//- Interfaces:
import { Componentes } from 'src/Interfaces/Componentes/Componentes';

@Component({
  selector: 'app-radeon-rx7900',
  templateUrl: './radeon-rx7900.component.html',
  styleUrls: ['./radeon-rx7900.component.scss'],
})
export class RadeonRX7900Component {
  constructor(private Servicios: ServiciosComputadorasService) {}

  RadeonRX7900: Componentes[] = [];

  ngOnInit() {
    this.Servicios.GetComponentes().subscribe((date) => {
      if (Array.isArray(date)) {
        this.RadeonRX7900 = date.filter(
          (e) => e.Tipo === 'Placa De Video' && e.IdCarrusel === 'RadeonRX'
        );
      } else {
        // Manejar el caso en el que `date` no es un arreglo válido
        return;
      }
    });
  }
}
