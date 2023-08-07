import { Component } from '@angular/core';
//- Interfaces:
import { InfoFav } from 'src/Interfaces/Favoritos/Favoritos';
import { Usuario } from 'src/Interfaces/Usuarios/Usuarios';
//- Servicios:
import { ServiciosComputadorasService } from 'src/Services/Services/servicios-computadoras.service';

@Component({
  selector: 'app-compra-exitosa',
  templateUrl: './compra-exitosa.component.html',
  styleUrls: ['./compra-exitosa.component.scss'],
})
export class CompraExitosaComponent {
  constructor(private Servicios: ServiciosComputadorasService) {}

  Carrito!: InfoFav[];
  User!: Usuario;

  obtenerLocalStorage() {
    const user = localStorage.getItem('Usuario');
    if (user) {
      this.User = JSON.parse(user);
    }
  }

  ngOnInit() {
    this.obtenerLocalStorage();
    this.Servicios.GetCarritoComputadoras(this.User._id).subscribe((date) => {
      this.Carrito = date;
      this.Servicios.PutStripe(this.Carrito).subscribe((date) => date);

      if (this.Carrito.length) {
        //-----------------------------Envio de mail:
        this.Servicios.EnvioEmailCompra(
          this.User.email,
          this.Carrito
        ).subscribe((date) => date);
      }
      //----------------------------------Se vacia el carrito-------------------------------------//
      this.Servicios.GetVaciarCarrito(this.User._id).subscribe((date) => date);
    });
  }
}
