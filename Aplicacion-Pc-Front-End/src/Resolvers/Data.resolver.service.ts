import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
//- Interfaces:
import { InfoFav } from 'src/Interfaces/Favoritos/Favoritos';
import { Usuario } from 'src/Interfaces/Usuarios/Usuarios';
//- Servicios:
import { ServiciosComputadorasService } from 'src/Services/Services/servicios-computadoras.service';

@Injectable()
export class DataResolverService
  implements Resolve<Observable<InfoFav[]> | undefined>
{
  constructor(private servicioComputadoras: ServiciosComputadorasService) {}

  resolve(): Observable<InfoFav[]> | undefined {
    const User = localStorage.getItem('Usuario');
    if (User) {
      const DataUser: Usuario = JSON.parse(User);
      const idUser = DataUser._id;
      return this.servicioComputadoras.GetCarritoComputadoras(idUser);
    }
    // Si no se encuentra un usuario en el localStorage, puedes retornar undefined.
    return undefined;
  }
}
