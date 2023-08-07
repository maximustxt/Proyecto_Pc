import { Component } from '@angular/core';
import { Componentes } from 'src/Interfaces/Componentes/Componentes';
import { ServiciosComputadorasService } from 'src/Services/Services/servicios-computadoras.service';

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.component.html',
  styleUrls: ['./componentes.component.scss'],
})
export class ComponentesComponent {
  constructor(private Servicios: ServiciosComputadorasService) {}

  ArrayComponentes: Componentes[] = [];
  ArrayMarcasComponentes!: string[];
  ArrayTiposComponentes!: string[];
  ArrayFormatoGabineteComponentes!: (string | undefined)[];
  ArrayCompatibilidad!: (string | undefined)[];

  ngOnInit() {
    this.Servicios.GetComponentes().subscribe((date) => {
      if (Array.isArray(date)) {
        this.ArrayComponentes = date;
        // Obtener un array de marcas sin repetición
        this.ArrayMarcasComponentes = Array.from(
          new Set(date.map((e) => e.Marca))
        ); // ARRAY.FORM ES PARA CONVERTIR EL SET EN ARRAY
        //- Tipos:
        this.ArrayTiposComponentes = Array.from(
          new Set(date.map((e) => e.Tipo))
        );
        //- Forma Gabinetes:
        this.ArrayFormatoGabineteComponentes = Array.from(
          new Set(date.map((e) => e.FactorDeForm))
        ).filter((e) => e !== undefined);
        //- Compatibilidad:
        this.ArrayCompatibilidad = Array.from(
          new Set(date.map((e) => e.Compatibilidad))
        ).filter((e) => e !== undefined);
      }
    });
  }

  //*------------------------------------------------ Filtros:

  //- Marca:

  FiltroMarca(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedMarca = target.value;
    if (selectedMarca === 'All') {
      this.Servicios.GetComponentes().subscribe((date) => {
        this.ArrayComponentes = date;
      });
    } else {
      this.Servicios.FiltrosMarcasGetComponentes(selectedMarca).subscribe(
        (date) => {
          this.ArrayComponentes = date;
        }
      );
    }
  }

  // Tipo Componente:

  FiltroTipo(event: Event) {
    const tipo = (event.target as HTMLSelectElement).value;
    if (tipo === 'All') {
      this.Servicios.GetComponentes().subscribe((date) => {
        this.ArrayComponentes = date;
      });
    } else {
      this.Servicios.FiltrosTiposGetComponentes(tipo).subscribe((date) => {
        this.ArrayComponentes = date;
      });
    }
  }

  //- Forma Gabinete:

  FiltroFactorForma(event: Event) {
    const Tamaño = (event.target as HTMLSelectElement).value;
    if (Tamaño === 'All') {
      this.Servicios.GetComponentes().subscribe((date) => {
        this.ArrayComponentes = date;
      });
    } else {
      this.Servicios.FiltrosTamañoGabineteGetComponentes(Tamaño).subscribe(
        (date) => {
          this.ArrayComponentes = date;
        }
      );
    }
  }

  //- Compatibilidad:

  FiltroCompatibilidad(event: Event) {
    const Compatibilidad = (event.target as HTMLSelectElement).value;
    if (Compatibilidad === 'All') {
      this.Servicios.GetComponentes().subscribe((date) => {
        this.ArrayComponentes = date;
      });
    } else {
      this.Servicios.FiltrosCompatibilidadGabineteGetComponentes(
        Compatibilidad
      ).subscribe((date) => {
        this.ArrayComponentes = date;
      });
    }
  }

  //*-------------------------------------------------------ORDENAMIENTOS:

  FuncionOrdenamientoPrecio_Destacado(event: Event) {
    const Ordenamiento = (event.target as HTMLSelectElement).value;
    this.Servicios.OrdenamioentosPrecio_Destacado(
      Ordenamiento,
      'COMPONENTES',
      this.ArrayComponentes
    ).subscribe((date) => {
      this.ArrayComponentes = date as Componentes[];
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
