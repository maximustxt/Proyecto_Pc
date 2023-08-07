import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//- Servicios:
import { ServiciosComputadorasService } from 'src/Services/Services/servicios-computadoras.service';
//- Interfaces:
import { Computadoras } from 'src/Interfaces/Computadoras/ComputadorasInterfaces';
import { Componentes } from 'src/Interfaces/Componentes/Componentes';
import { Perifericos } from 'src/Interfaces/Perifericos/Perifericos';
import Silla_Butaca from '../../Interfaces/Sillas_Butacas/Sillas_Butacas';

@Component({
  selector: 'app-carrusel-detail-productos',
  templateUrl: './carrusel-detail-productos.component.html',
  styleUrls: ['./carrusel-detail-productos.component.scss'],
})
export class CarruselDetailProductosComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private Servicios: ServiciosComputadorasService
  ) {}

  ArrayNootebock!: (Computadoras | Componentes | Perifericos | Silla_Butaca)[];
  activeIndex = 0;
  displaySize = 3; // Define el número de productos a mostrar a la vez

  ngOnInit() {
    this.Servicios.GetProductosDestacados().subscribe(
      (date: (Computadoras | Componentes | Perifericos | Silla_Butaca)[]) =>
        (this.ArrayNootebock = date)
    );
  }

  nextProduct() {
    const lastIndex = this.ArrayNootebock.length - 1;
    this.activeIndex += this.displaySize;
    if (this.activeIndex > lastIndex) {
      this.activeIndex = this.activeIndex % (lastIndex + 1);
    }
  }

  previousProduct() {
    this.activeIndex -= this.displaySize;
    if (this.activeIndex < 0) {
      this.activeIndex =
        this.ArrayNootebock.length -
        (this.ArrayNootebock.length % this.displaySize);
    }
  }
  //- Funcion Del Precio:
  FuncionIconoPrecio(precio: number) {
    return '$' + '' + precio;
  }

  //--------------------------------------//
  FuncionRederijirDetail(id: string) {
    this.router.navigate([`/Detail/${id}`]);
    this.route.params.subscribe((params) => {
      if (params['id'] === id) {
        window.location.reload();
      }
    });
  }
}
