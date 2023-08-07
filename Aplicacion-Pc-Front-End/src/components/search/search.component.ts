import { Component, EventEmitter, Output } from '@angular/core';
//- Interfaces:
import { Componentes } from 'src/Interfaces/Componentes/Componentes';
import { Computadoras } from 'src/Interfaces/Computadoras/ComputadorasInterfaces';
import { Perifericos } from 'src/Interfaces/Perifericos/Perifericos';
import Silla_Butaca from 'src/Interfaces/Sillas_Butacas/Sillas_Butacas';
//- Servicios:
import { ServiciosComputadorasService } from 'src/Services/Services/servicios-computadoras.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(private Servicios: ServiciosComputadorasService) {}

  nameSearch: string = '';
  ArrayDataSearch: (Computadoras | Componentes | Perifericos | Silla_Butaca)[] =
    [];

  @Output() EnviarResultadoSearch = new EventEmitter<
    (Computadoras | Componentes | Perifericos | Silla_Butaca)[]
  >();

  enviarValor() {
    this.EnviarResultadoSearch.emit(this.ArrayDataSearch);
  }

  BuscarProducto(name: string) {
    this.Servicios.GetSearchProductos(name).subscribe((date) => {
      this.ArrayDataSearch = date;
      this.enviarValor();
    });
  }
}
