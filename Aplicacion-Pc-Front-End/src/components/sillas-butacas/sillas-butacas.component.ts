import { Component } from '@angular/core';
//- Interfaces:
import Silla_Butaca from 'src/Interfaces/Sillas_Butacas/Sillas_Butacas';
//- Servicios:
import { ServiciosComputadorasService } from 'src/Services/Services/servicios-computadoras.service';

@Component({
  selector: 'app-sillas-butacas',
  templateUrl: './sillas-butacas.component.html',
  styleUrls: ['./sillas-butacas.component.scss'],
})
export class SillasButacasComponent {
  constructor(private Servicio: ServiciosComputadorasService) {}

  ArraySilla_Butaca!: Silla_Butaca[];
  ArrayMarcasSillas_Butacas!: string[];

  ngOnInit() {
    this.Servicio.GetSillas_Butacas().subscribe((date) => {
      this.ArraySilla_Butaca = date;
      this.ArrayMarcasSillas_Butacas = Array.from(
        new Set(date.map((e) => e.Marca))
      );
    });
  }

  FiltroMarca(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedMarca = target.value;
    if (selectedMarca === 'All') {
      this.Servicio.GetSillas_Butacas().subscribe((date) => {
        this.ArraySilla_Butaca = date;
      });
    } else {
      this.Servicio.FiltrosMarcasGetSillas_Butacas(selectedMarca).subscribe(
        (date) => {
          this.ArraySilla_Butaca = date;
        }
      );
    }
  }

  //*-------------------------------------------------------ORDENAMIENTOS:

  FuncionOrdenamientoPrecio_Destacado(event: Event) {
    const Ordenamiento = (event.target as HTMLSelectElement).value;
    this.Servicio.OrdenamioentosPrecio_Destacado(
      Ordenamiento,
      'SILLAS_BUTACAS',
      this.ArraySilla_Butaca
    ).subscribe((date) => {
      this.ArraySilla_Butaca = date as Silla_Butaca[];
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
