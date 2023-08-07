import { Component, EventEmitter, Output } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

//- Servicios:
import { ServiciosComputadorasService } from 'src/Services/Services/servicios-computadoras.service';
//- Interfaces:
import { Computadoras } from 'src/Interfaces/Computadoras/ComputadorasInterfaces';
import { Componentes } from 'src/Interfaces/Componentes/Componentes';
import { Perifericos } from 'src/Interfaces/Perifericos/Perifericos';
import Silla_Butaca from 'src/Interfaces/Sillas_Butacas/Sillas_Butacas';
import { Usuario } from 'src/Interfaces/Usuarios/Usuarios';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  constructor(private ServiciosLogin: ServiciosComputadorasService) {}
  public auth2: any;
  PanelPerfil: boolean = false;
  ContadorCarrito!: number;
  DatoUsuario!: Usuario | undefined;
  booleanoToggleMenu: boolean = false;

  ngOnInit() {
    this.ObtenerLocalStorage();
    if (this.DatoUsuario) {
      this.ServiciosLogin.GetContadorNavBarCarrito(
        this.DatoUsuario._id
      ).subscribe((date) => {
        this.ContadorCarrito = date;
      });
    }
  }

  //- Menu Hamburgesa:
  toggleMenu() {
    this.booleanoToggleMenu = !this.booleanoToggleMenu;
  }

  //- Funciones Local Storage:
  ObtenerLocalStorage() {
    const datoLocalSotrage = localStorage.getItem('Usuario');
    if (datoLocalSotrage) {
      this.DatoUsuario = JSON.parse(datoLocalSotrage);
    }
  }

  //- EnvioAlHomeDate:
  ArrayDataSearch: (Computadoras | Componentes | Perifericos | Silla_Butaca)[] =
    [];

  @Output() EnvioDesdeNavSearch = new EventEmitter<
    (Computadoras | Componentes | Perifericos | Silla_Butaca)[]
  >();

  envioNavHome() {
    this.EnvioDesdeNavSearch.emit(this.ArrayDataSearch);
  }

  ObtenerDatoSearch(
    ArraySearch: (Computadoras | Componentes | Perifericos | Silla_Butaca)[]
  ) {
    this.ArrayDataSearch = ArraySearch;
    this.EnvioDesdeNavSearch.emit(this.ArrayDataSearch);
  }

  //- Funcion Panel Perfil:
  FuncionAbrirPerfil() {
    this.PanelPerfil = !this.PanelPerfil;
  }

  //- Funcion Logout:
  FuncionLogoutPerfil() {
    if (this.DatoUsuario) {
      this.ServiciosLogin.LogoutUsuario(this.DatoUsuario.email).subscribe(
        () => {
          this.DatoUsuario = undefined;
        }
      );
      localStorage.removeItem('Usuario');
      document.location.href = '/Home';
    }
  }

  LLevarAlHome() {
    document.location.href = '/Home';
  }
}
