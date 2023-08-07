import { Component } from '@angular/core';
//- Interfaces:
import { Perifericos } from 'src/Interfaces/Perifericos/Perifericos';
//- Servicios:
import { ServiciosComputadorasService } from 'src/Services/Services/servicios-computadoras.service';

@Component({
  selector: 'app-perifericos',
  templateUrl: './perifericos.component.html',
  styleUrls: ['./perifericos.component.scss'],
})
export class PerifericosComponent {
  constructor(private Servicio: ServiciosComputadorasService) {}

  ArrayPerifericos!: Perifericos[];
  ArrayMarcasPerifericos!: string[];
  ArrayTiposPerifericos!: string[];
  ArrayTipoDeConexion!: string[];

  ngOnInit() {
    this.Servicio.GetPerifericos().subscribe((date) => {
      this.ArrayPerifericos = date;
      //- Marcas:
      this.ArrayMarcasPerifericos = Array.from(
        new Set(date.map((e) => e.Marca))
      );
      //- Tipos:
      this.ArrayTiposPerifericos = Array.from(new Set(date.map((e) => e.Tipo)));
      //- Tipo De Conexion:
      this.ArrayTipoDeConexion = Array.from(
        new Set(date.map((e) => e.TipoDeConexion))
      );
    });
  }

  //*-------------------------------------------Filtos:

  //- Tipo De Conexion:

  FiltroTipoDeConexionPeriferico(event: Event) {
    const Tipo_De_Conexion = (event.target as HTMLSelectElement).value;
    if (Tipo_De_Conexion === 'All') {
      this.Servicio.GetPerifericos().subscribe((date) => {
        this.ArrayPerifericos = date;
      });
    } else {
      this.Servicio.FiltrosTipo_De_Conexion_Perifericos(
        Tipo_De_Conexion
      ).subscribe((date) => {
        this.ArrayPerifericos = date;
      });
    }
  }

  //- Tipo De Periferico:

  FiltroDeTipoPeriferico(event: Event) {
    const Tipo = (event.target as HTMLSelectElement).value;
    if (Tipo === 'All') {
      this.Servicio.GetPerifericos().subscribe((date) => {
        this.ArrayPerifericos = date;
      });
    } else {
      this.Servicio.FiltrosTipo_Perifericos(Tipo).subscribe((date) => {
        this.ArrayPerifericos = date;
      });
    }
  }

  //- Marca de Periferico:

  FiltroMarcaPeriferico(event: Event) {
    const Marca = (event.target as HTMLSelectElement).value;
    if (Marca === 'All') {
      this.Servicio.GetPerifericos().subscribe((date) => {
        this.ArrayPerifericos = date;
      });
    } else {
      this.Servicio.FiltrosMarcas_Perifericos(Marca).subscribe((date) => {
        this.ArrayPerifericos = date;
      });
    }
  }

  //*-------------------------------------------------------ORDENAMIENTOS:

  FuncionOrdenamientoPrecio_Destacado(event: Event) {
    const Ordenamiento = (event.target as HTMLSelectElement).value;
    this.Servicio.OrdenamioentosPrecio_Destacado(
      Ordenamiento,
      'PERIFERICOS',
      this.ArrayPerifericos
    ).subscribe((date) => {
      this.ArrayPerifericos = date as Perifericos[];
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
