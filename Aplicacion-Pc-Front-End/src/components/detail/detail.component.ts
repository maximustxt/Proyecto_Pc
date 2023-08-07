//- Notificaciones:
import { NgxToastService } from 'ngx-toast-notifier';
//- Angular:
import { Component, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//-Servicios:
import { ServiciosComputadorasService } from '../../Services/Services/servicios-computadoras.service';
//- Interfaces:
import { Computadoras } from 'src/Interfaces/Computadoras/ComputadorasInterfaces';
import { Usuario } from 'src/Interfaces/Usuarios/Usuarios';
import { Componentes } from 'src/Interfaces/Componentes/Componentes';
import { Perifericos } from 'src/Interfaces/Perifericos/Perifericos';
import Silla_Butaca from 'src/Interfaces/Sillas_Butacas/Sillas_Butacas';
import Monitor from 'src/Interfaces/Monitores/Monitores';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  ComputadoraId!: string;
  ComputadoraDetail!: Computadoras;
  ComponenteDetail!: Componentes;
  PerifericosDetail!: Perifericos;
  MonitoresDetail!: Monitor;
  Silla_ButacaDetail!: Silla_Butaca;
  ContadorCompra!: number;
  Stock!: number;
  Booleano!: boolean;
  ImagenesDetailCarrusel!: string[];
  ImagenesDetailCarruselClick!: string;
  DatoUsuario!: Usuario;
  //-------------------------Carrusel:
  ArrayNootebock!: Computadoras[];
  activeIndex = 0;
  displaySize = 3; // Define el número de productos a mostrar a la vez

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private Servicio: ServiciosComputadorasService,
    private ngxToastService: NgxToastService
  ) {}

  //-----------------------------------------------------ALERTS:

  addDanger(): void {
    this.ngxToastService.onDanger(
      'No Hay Stock Disponible',
      'Puedes ver otros productos'
    );
  }

  addWarningCompra(): void {
    this.ngxToastService.onWarning(
      'Inicia sesion',
      'Para comprar un producto debes iniciar sesion'
    );
  }

  addWarningFavorito(): void {
    this.ngxToastService.onWarning(
      'Inicia sesion',
      'Para agregar a Favorito debes iniciar sesion'
    );
  }

  //----------------------------------Cuando el componente se monta:
  ngOnInit() {
    this.Servicio.GetComputadoras().subscribe((date: Computadoras[]) => {
      this.ArrayNootebock = date;
    });
    this.route.params.subscribe((params) => {
      this.ComputadoraId = params['id'];
      //-----------------------Detail Computadoras:
      this.Servicio.GetDetailComputadoras(this.ComputadoraId).subscribe(
        (date) => {
          if (date) {
            this.ComputadoraDetail = date;
            this.Stock = date.Stock;
            this.ContadorCompra = date.Contador;
            this.ImagenesDetailCarrusel = date.Imagenes;
            this.ImagenesDetailCarruselClick = date.Imagen;
          }
        }
      );
      //-------------------------Detail Componentes:
      this.Servicio.GetComponentDetail(this.ComputadoraId).subscribe((date) => {
        if (date) {
          this.ComponenteDetail = date;
          this.Stock = date.Stock;
          this.ContadorCompra = date.Contador;
          this.ImagenesDetailCarrusel = date.Imagenes;
          this.ImagenesDetailCarruselClick = date.Imagen;
        }
      });

      //-------------------------Detail Perifericos:
      this.Servicio.GetPerifericosDetail(this.ComputadoraId).subscribe(
        (date) => {
          if (date) {
            this.PerifericosDetail = date;
            this.Stock = date.Stock;
            this.ContadorCompra = date.Contador;
            this.ImagenesDetailCarrusel = date.Imagenes;
            this.ImagenesDetailCarruselClick = date.Imagen;
          }
        }
      );
      //-------------------------Detail Sillas_Butacas:
      this.Servicio.GetSillas_ButacasDetail(this.ComputadoraId).subscribe(
        (date) => {
          if (date) {
            this.Silla_ButacaDetail = date;
            this.Stock = date.Stock;
            this.ContadorCompra = date.Contador;
            this.ImagenesDetailCarrusel = date.Imagenes;
            this.ImagenesDetailCarruselClick = date.Imagen;
          }
        }
      );

      //-------------------------Detail Monitor:
      this.Servicio.GetMonitoresDetail(this.ComputadoraId).subscribe((date) => {
        if (date) {
          this.MonitoresDetail = date;
          this.Stock = date.Stock;
          this.ContadorCompra = date.Contador;
          this.ImagenesDetailCarrusel = date.Imagenes;
          this.ImagenesDetailCarruselClick = date.Imagen;
        }
      });
    });

    this.ObtenerLocalStorage();
  }

  //- FuncionComprar:
  FuncionComprar(id: string) {
    // yo aca primero lo agrego al carrito y luego le mando el put del contador que va a recibir el this.ContadorCompra:

    if (!this.DatoUsuario) {
      this.addWarningCompra();
    }

    let itemDetail:
      | Componentes
      | Perifericos
      | Computadoras
      | Silla_Butaca
      | Monitor; // Variable para almacenar el detalle del elemento

    if (this.ComputadoraDetail) {
      itemDetail = this.ComputadoraDetail;
    } else if (this.ComponenteDetail) {
      itemDetail = this.ComponenteDetail;
    } else if (this.PerifericosDetail) {
      itemDetail = this.PerifericosDetail;
    } else if (this.Silla_ButacaDetail) {
      itemDetail = this.Silla_ButacaDetail;
    } else if (this.MonitoresDetail) {
      itemDetail = this.MonitoresDetail;
    } else {
      // Si no se selecciona ningún detalle, muestra un mensaje de error
      return;
    }

    if (itemDetail.Stock > 0) {
      this.Servicio.PostCarritoComputadoras(
        this.DatoUsuario._id,
        itemDetail
      ).subscribe(
        (date) => {
          this.Servicio.PutCarrito(
            id,
            this.DatoUsuario._id,
            undefined,
            this.ContadorCompra
          ).subscribe((date) => date);
          this.router.navigate(['Carrito']);
        },
        (error) => {
          error;
        }
      );
    } else {
      // Tirar alerta de bootstrap
      if (this.DatoUsuario) {
        this.addDanger();
      }
    }
  }

  //- Funciones Contador:
  FuncionIncrementaContador() {
    if (this.Stock > this.ContadorCompra) {
      this.ContadorCompra = this.ContadorCompra + 1;
    }
  }

  FuncionDecrementaContador() {
    if (this.ContadorCompra > 1) {
      this.ContadorCompra = this.ContadorCompra - 1;
    }
  }

  //- Funciones Local Storage:
  ObtenerLocalStorage() {
    const datoLocalSotrage = localStorage.getItem('Usuario');
    if (datoLocalSotrage) {
      this.DatoUsuario = JSON.parse(datoLocalSotrage);
    }
  }

  //- Funcion Favorito:

  FuncionFavorito() {
    if (!this.DatoUsuario) {
      this.addWarningFavorito();
    }

    this.Booleano = !this.Booleano;
    if (this.Booleano) {
      if (this.ComputadoraDetail) {
        this.Servicio.PostFavoritosComputadoras(
          this.DatoUsuario._id,
          this.ComputadoraDetail
        ).subscribe((date) => console.log(date));
      } else if (this.PerifericosDetail) {
        this.Servicio.PostFavoritosComputadoras(
          this.DatoUsuario._id,
          this.PerifericosDetail
        ).subscribe((date) => console.log(date));
      } else if (this.Silla_ButacaDetail) {
        this.Servicio.PostFavoritosComputadoras(
          this.DatoUsuario._id,
          this.Silla_ButacaDetail
        ).subscribe((date) => console.log(date));
      } else if (this.MonitoresDetail) {
        this.Servicio.PostFavoritosComputadoras(
          this.DatoUsuario._id,
          this.MonitoresDetail
        ).subscribe((date) => console.log(date));
      } else {
        this.Servicio.PostFavoritosComputadoras(
          this.DatoUsuario._id,
          this.ComponenteDetail
        ).subscribe((date) => console.log(date));
      }
    } else {
      this.Servicio.DeleteFavoritosComputadoras(
        this.ComputadoraDetail._id,
        this.DatoUsuario._id
      ).subscribe((date) => console.log(date));
    }
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

  //---------------------------------Cuando el componente se actualize:
  ngOnChanges() {
    this.route.params.subscribe((params) => {
      this.ComputadoraId = params['id'];
      this.Servicio.GetDetailComputadoras(this.ComputadoraId).subscribe(
        (date) => {
          this.ComputadoraDetail = date;
          this.Stock = date.Stock;
          this.ImagenesDetailCarrusel = date.Imagenes;
        }
      );
    });
  }

  //-------------------------------------Cambiar Imagen :
  CambiarImagen(img: string) {
    this.ImagenesDetailCarruselClick = img;
  }
}
