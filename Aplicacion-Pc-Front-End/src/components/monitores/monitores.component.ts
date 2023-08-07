import { Component } from '@angular/core';
//- Interfaces:
import Monitor from 'src/Interfaces/Monitores/Monitores';
//- Servicios:
import { ServiciosComputadorasService } from 'src/Services/Services/servicios-computadoras.service';

@Component({
  selector: 'app-monitores',
  templateUrl: './monitores.component.html',
  styleUrls: ['./monitores.component.scss'],
})
export class MonitoresComponent {
  constructor(private Servicios: ServiciosComputadorasService) {}

  Monitores: Monitor[] = [];
  ArrayMarcasMonitores!: string[];
  ArrayPanelMonitores!: (string | undefined)[];

  ngOnInit() {
    this.Servicios.GetMonitores().subscribe((date) => {
      if (Array.isArray(date)) {
        this.Monitores = date;
        this.ArrayMarcasMonitores = Array.from(
          new Set(date.map((e) => e.Marca))
        );
        this.ArrayPanelMonitores = Array.from(
          new Set(date.map((e) => e.Panel))
        );
      } else {
        // Manejar el caso en el que `date` no es un arreglo válido
        return;
      }
    });
  }

  //*-------------------------------------------Filtos:

  //- Marca Monitores:

  FiltroMarcaMonitores(event: Event) {
    const Marca = (event.target as HTMLSelectElement).value;
    if (Marca === 'All') {
      this.Servicios.GetMonitores().subscribe((date) => {
        this.Monitores = date;
      });
    } else {
      this.Servicios.FiltrosMarcas_Monitores(Marca).subscribe((date) => {
        this.Monitores = date;
      });
    }
  }

  //- Panel Monitores:

  FiltroPanelMonitores(event: Event) {
    const Panel = (event.target as HTMLSelectElement).value;
    if (Panel === 'All') {
      this.Servicios.GetMonitores().subscribe((date) => {
        this.Monitores = date;
      });
    } else {
      this.Servicios.FiltrosPanel_Monitores(Panel).subscribe((date) => {
        this.Monitores = date;
      });
    }
  }

  //*-------------------------------------------------------ORDENAMIENTOS:

  FuncionOrdenamientoPrecio_Destacado(event: Event) {
    const Ordenamiento = (event.target as HTMLSelectElement).value;
    this.Servicios.OrdenamioentosPrecio_Destacado(
      Ordenamiento,
      'MONITOR',
      this.Monitores
    ).subscribe((date) => {
      this.Monitores = date as Monitor[];
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
