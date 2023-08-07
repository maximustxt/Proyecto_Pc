import { Component } from '@angular/core';
//- Interfaces:
import { Computadoras } from 'src/Interfaces/Computadoras/ComputadorasInterfaces';
//- Servicios:
import { ServiciosComputadorasService } from 'src/Services/Services/servicios-computadoras.service';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.scss'],
})
export class NotebookComponent {
  constructor(private Servicios: ServiciosComputadorasService) {}

  Computadoras!: Computadoras[];
  ArrayMarcasComputadoras!: string[];
  ArrayCategoriasComputadoras!: string[];
  Array_Disco_Duro_Computadoras!: string[];
  Array_Placa_De_Video_Computadoras!: string[];
  Array_Memoria_Ram_Computadoras!: string[];

  //- Cuando el componente se monta:
  ngOnInit() {
    this.Servicios.GetComputadoras().subscribe((data) => {
      this.Computadoras = data;
      //- Marcas:
      this.ArrayMarcasComputadoras = Array.from(
        new Set(data.map((e) => e.Marca))
      );
      //- Categorias:
      this.ArrayCategoriasComputadoras = Array.from(
        new Set(data.map((e) => e.Categorias))
      );
      //- Disco Duro:
      this.Array_Disco_Duro_Computadoras = Array.from(
        new Set(data.map((e) => e.DiscoDuro))
      );
      //- Placa De Video:
      this.Array_Placa_De_Video_Computadoras = Array.from(
        new Set(data.map((e) => e.PlacaDeVideo))
      );
      //- Memoria Ram:
      this.Array_Memoria_Ram_Computadoras = Array.from(
        new Set(data.map((e) => e.MemoriaRam))
      );
    });
  }

  //*---------------------------------------------------Filtros:

  //- Marca:

  FiltroMarcaComputadora(event: Event) {
    const Marca = (event.target as HTMLSelectElement).value;
    if (Marca === 'All') {
      this.Servicios.GetComputadoras().subscribe((data) => {
        this.Computadoras = data;
      });
    } else {
      this.Servicios.FiltrosMarcasGetComputadoras(Marca).subscribe((date) => {
        this.Computadoras = date;
      });
    }
  }

  //- Categorias:

  FiltroCategoriaComputadora(event: Event) {
    const Categoria = (event.target as HTMLSelectElement).value;
    if (Categoria === 'All') {
      this.Servicios.GetComputadoras().subscribe((data) => {
        this.Computadoras = data;
      });
    } else {
      this.Servicios.FiltrosCategoriasGetComputadoras(Categoria).subscribe(
        (date) => {
          this.Computadoras = date;
        }
      );
    }
  }

  //- Disco Duro:

  FiltroDiscoDuroComputadora(event: Event) {
    const Disco_Duro = (event.target as HTMLSelectElement).value;
    if (Disco_Duro === 'All') {
      this.Servicios.GetComputadoras().subscribe((data) => {
        this.Computadoras = data;
      });
    } else {
      this.Servicios.FiltrosDiscoDuroGetComputadoras(Disco_Duro).subscribe(
        (date) => {
          this.Computadoras = date;
        }
      );
    }
  }

  //- Placa De Video:

  FiltroPlacaDeVideoComputadora(event: Event) {
    const Placa_De_Video = (event.target as HTMLSelectElement).value;
    if (Placa_De_Video === 'All') {
      this.Servicios.GetComputadoras().subscribe((data) => {
        this.Computadoras = data;
      });
    } else {
      this.Servicios.FiltrosPlaca_De_VideoGetComputadoras(
        Placa_De_Video
      ).subscribe((date) => {
        this.Computadoras = date;
      });
    }
  }

  //- Memoria Ram:

  FiltroMemoriaRamComputadora(event: Event) {
    const Memoria_Ram = (event.target as HTMLSelectElement).value;
    if (Memoria_Ram === 'All') {
      this.Servicios.GetComputadoras().subscribe((data) => {
        this.Computadoras = data;
      });
    } else {
      this.Servicios.Filtros_Memoria_Ram_GetComputadoras(Memoria_Ram).subscribe(
        (date) => {
          this.Computadoras = date;
        }
      );
    }
  }

  //*-------------------------------------------------------ORDENAMIENTOS:

  FuncionOrdenamientoPrecio_Destacado(event: Event) {
    const Ordenamiento = (event.target as HTMLSelectElement).value;
    this.Servicios.OrdenamioentosPrecio_Destacado(
      Ordenamiento,
      'COMPUTADORAS',
      this.Computadoras
    ).subscribe((date) => {
      this.Computadoras = date as Computadoras[];
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
