import { Component } from '@angular/core';
//- Interfaces :
import { Componentes } from 'src/Interfaces/Componentes/Componentes';
//- Servicios:
import { ServiciosComputadorasService } from 'src/Services/Services/servicios-computadoras.service';

@Component({
  selector: 'app-placas-de-video',
  templateUrl: './placas-de-video.component.html',
  styleUrls: ['./placas-de-video.component.scss'],
})
export class PlacasDeVideoComponent {
  constructor(private Servicios: ServiciosComputadorasService) {}

  ArrayComponentes: Componentes[] = [];

  ngOnInit() {
    this.Servicios.GetComponentes().subscribe((date) => {
      if (Array.isArray(date)) {
        this.ArrayComponentes = date.filter((e) => e.Tipo === 'Placa De Video');
      } else {
        // Manejar el caso en el que `date` no es un arreglo válido
        return;
      }
    });
  }
}
