import { Component } from '@angular/core';
//- Interfaces:
import { Computadoras } from 'src/Interfaces/Computadoras/ComputadorasInterfaces';
import { Perifericos } from 'src/Interfaces/Perifericos/Perifericos';
import { Componentes } from 'src/Interfaces/Componentes/Componentes';
import Silla_Butaca from 'src/Interfaces/Sillas_Butacas/Sillas_Butacas';
import Monitor from 'src/Interfaces/Monitores/Monitores';
//- Servicios:
import { ServiciosComputadorasService } from 'src/Services/Services/servicios-computadoras.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  constructor(private Servicios: ServiciosComputadorasService) {}

  Computadoras!: (
    | Computadoras
    | Perifericos
    | Componentes
    | Silla_Butaca
    | Monitor
  )[];

  //- Cuando el componente se monta:
  ngOnInit() {
    this.Servicios.GetProductosDestacados().subscribe((data) => {
      this.Computadoras = data;
    });
  }
}
