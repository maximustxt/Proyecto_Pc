import { Component } from '@angular/core';
//- Interfaces:
import { Componentes } from 'src/Interfaces/Componentes/Componentes';
import { Computadoras } from 'src/Interfaces/Computadoras/ComputadorasInterfaces';
import { Perifericos } from 'src/Interfaces/Perifericos/Perifericos';
import Silla_Butaca from 'src/Interfaces/Sillas_Butacas/Sillas_Butacas';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor() {}

  ArrayDataSearch: (Computadoras | Componentes | Perifericos | Silla_Butaca)[] =
    [];

  ObtenerDatoSearch(
    ArraySearch: (Computadoras | Componentes | Perifericos | Silla_Butaca)[]
  ) {
    this.ArrayDataSearch = ArraySearch;
  }
}
