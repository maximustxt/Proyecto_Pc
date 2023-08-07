import { Component } from '@angular/core';
//- Services:
import { ServiciosComputadorasService } from 'src/Services/Services/servicios-computadoras.service';
//- Interfaces:
import { Perifericos } from 'src/Interfaces/Perifericos/Perifericos';

@Component({
  selector: 'app-productos-jbl',
  templateUrl: './productos-jbl.component.html',
  styleUrls: ['./productos-jbl.component.scss'],
})
export class ProductosJBLComponent {
  constructor(private Servicios: ServiciosComputadorasService) {}

  ProductosJBL: Perifericos[] = [];

  ngOnInit() {
    this.Servicios.GetPerifericos().subscribe((date) => {
      if (Array.isArray(date)) {
        this.ProductosJBL = date.filter((e) => e.Marca === 'JBL');
      } else {
        // Manejar el caso en el que `date` no es un arreglo válido
        return;
      }
    });
  }
}
