import { Component } from '@angular/core';
//- Interfaces:
import { InfoFav } from 'src/Interfaces/Favoritos/Favoritos';
import { Usuario } from 'src/Interfaces/Usuarios/Usuarios';
//- Servicios:
import { ServiciosComputadorasService } from 'src/Services/Services/servicios-computadoras.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss'],
})
export class FavoritosComponent {
  constructor(private Servicios: ServiciosComputadorasService) {}

  ArrayFavoritos!: InfoFav[];
  UserLocal!: Usuario;

  //-------------------------ObtenerIdLocalSorage:
  ObtenerLocalStorage() {
    const User = localStorage.getItem('Usuario');
    if (User) {
      this.UserLocal = JSON.parse(User);
    }
  }

  //------------------------------Eliminar Favorito:
  EliminarFavorito(id: string) {
    this.Servicios.DeleteFavoritosComputadoras(
      id,
      this.UserLocal._id
    ).subscribe((date) => {
      this.ArrayFavoritos = date;
    });
  }

  ngOnInit() {
    this.ObtenerLocalStorage(); // Llama al método para asignar un valor a this.UserLocal
    if (this.UserLocal) {
      this.Servicios.GetFavoritosComputadoras(this.UserLocal._id).subscribe(
        (data) => {
          const uniqueItems = data.filter(
            (item, index, self) =>
              index === self.findIndex((t) => t._id === item._id)
          );
          this.ArrayFavoritos = uniqueItems;
        }
      );
    }
  }
}
