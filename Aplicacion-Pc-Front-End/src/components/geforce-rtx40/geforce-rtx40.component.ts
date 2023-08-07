import { Component } from '@angular/core';
//- Servicios:
import { ServiciosComputadorasService } from 'src/Services/Services/servicios-computadoras.service';
//- Interfaces:
import { Componentes } from 'src/Interfaces/Componentes/Componentes';

@Component({
  selector: 'app-geforce-rtx40',
  templateUrl: './geforce-rtx40.component.html',
  styleUrls: ['./geforce-rtx40.component.scss'],
})
export class GeforceRTX40Component {
  constructor(private Servicios: ServiciosComputadorasService) {}

  GeForceRTX40: Componentes[] = [];

  ngOnInit() {
    this.Servicios.GetComponentes().subscribe((date) => {
      if (Array.isArray(date)) {
        this.GeForceRTX40 = date.filter(
          (e) => e.Tipo === 'Placa De Video' && e.IdCarrusel === 'GeForceRTX'
        );
      } else {
        // Manejar el caso en el que `date` no es un arreglo válido
        return;
      }
    });
  }
}
