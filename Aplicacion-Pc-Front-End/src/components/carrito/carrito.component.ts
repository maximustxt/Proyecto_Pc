import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//- Interfaces:
import { Computadoras } from 'src/Interfaces/Computadoras/ComputadorasInterfaces';
import { InfoFav } from 'src/Interfaces/Favoritos/Favoritos';
import { Usuario } from 'src/Interfaces/Usuarios/Usuarios';
//- Servicios:
import { ServiciosComputadorasService } from 'src/Services/Services/servicios-computadoras.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
})
export class CarritoComponent {
  constructor(private Servicio: ServiciosComputadorasService) {}

  Usuario!: Usuario;
  Carrito!: InfoFav[];
  PrecioTotal!: number;

  //---------------------------Obtener Local Storage:
  ObtenerLocalStorage() {
    const User = localStorage.getItem('Usuario');
    if (User) {
      this.Usuario = JSON.parse(User);
    }
  }

  //--------------------------------------Eliminar el carrito:
  EliminarCarrito(id: string) {
    window.location.reload();
    this.Servicio.DeleteCarritoComputadoras(id, this.Usuario._id).subscribe(
      (date) => {
        this.Carrito = date;
      }
    );
    this.actualizarPrecioTotal();
  }

  //--------------------------Cuando el componente se monta:
  async ngOnInit() {
    try {
      this.ObtenerLocalStorage();
      const date = (await this.Servicio.GetCarritoComputadoras(
        this.Usuario._id
      ).toPromise()) as InfoFav[];
      this.Carrito = date;
      this.actualizarPrecioTotal();
    } catch (error) {
      // Manejar el error de manera adecuada
    }
  }

  //- Funciones Contador:

  FuncionIncrementaContador(id: string) {
    this.Servicio.PutCarrito(id, this.Usuario._id, 1, undefined).subscribe(
      (date) => {
        this.actualizarPrecioTotal();
        this.Carrito = date;
      }
    );
    this.actualizarCarrito();
  }

  FuncionDecrementaContador(id: string) {
    this.Servicio.PutCarrito(id, this.Usuario._id, -1, undefined).subscribe(
      (date) => {
        this.actualizarPrecioTotal();
        this.Carrito = date;
      }
    );
    this.actualizarCarrito();
  }

  actualizarCarrito() {
    this.Servicio.GetCarritoComputadoras(this.Usuario._id).subscribe(
      (carrito) => {
        this.actualizarPrecioTotal();
        this.Carrito = carrito;
      }
    );
  }

  actualizarPrecioTotal() {
    this.Servicio.GetPrecioTotal(this.Usuario._id).subscribe((precioTotal) => {
      this.PrecioTotal = precioTotal;
    });
  }

  //- Finalizar Compra:

  FinalizarCompra() {
    this.Servicio.postStripe(this.Carrito).subscribe((date) => {
      window.location.href = date.url;
    });
  }

  //- Funcion Eliminar Todo el carrito:

  EliminarTodoElCarrito() {
    this.Servicio.DeleteTodoElCarrito(this.Usuario._id).subscribe((date) => {
      this.Carrito = date;
    });
  }
}
