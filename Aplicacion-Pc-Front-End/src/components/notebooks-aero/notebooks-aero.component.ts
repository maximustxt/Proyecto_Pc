import { Component } from '@angular/core';
//- Interfaces:
import { Computadoras } from 'src/Interfaces/Computadoras/ComputadorasInterfaces';
//- Servicios:
import { ServiciosComputadorasService } from 'src/Services/Services/servicios-computadoras.service';

@Component({
  selector: 'app-notebooks-aero',
  templateUrl: './notebooks-aero.component.html',
  styleUrls: ['./notebooks-aero.component.scss'],
})
export class NotebooksAeroComponent {
  constructor(private Servicios: ServiciosComputadorasService) {}

  NotebooksAero: Computadoras[] = [];

  ngOnInit() {
    this.Servicios.GetComputadoras().subscribe((date) => {
      if (Array.isArray(date)) {
        this.NotebooksAero = date.filter((e) => e.Marca === 'GIGABYTE-AERO');
      } else {
        // Manejar el caso en el que `date` no es un arreglo válido
        return;
      }
    });
  }

  //- Opacidad:

  calcularOpacidad(Stock: number): string {
    // Definir la lógica para calcular la opacidad en base al stock
    // Puedes ajustar la fórmula según tus necesidades

    const opacidad = Stock === 0 ? 0.5 : 1; // Por ejemplo, opacidad 0.5 si hay stock, 1 si no hay stock

    return opacidad.toString();
  }
}
