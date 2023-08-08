import { Component } from '@angular/core';
import { Router } from '@angular/router';
//- Notificaciones:
import { NgxToastService } from 'ngx-toast-notifier';
//- Interface:
import { Componentes } from 'src/Interfaces/Componentes/Componentes';
import Monitor from 'src/Interfaces/Monitores/Monitores';
import { Perifericos } from 'src/Interfaces/Perifericos/Perifericos';
import { Usuario } from 'src/Interfaces/Usuarios/Usuarios';
import { ArmadoPc } from 'src/Interfaces/Armado_Pc/Armado_Pc';
//- Servicios:
import { ServiciosComputadorasService } from 'src/Services/Services/servicios-computadoras.service';

@Component({
  selector: 'app-arma-tu-pc',
  templateUrl: './arma-tu-pc.component.html',
  styleUrls: ['./arma-tu-pc.component.scss'],
})
export class ArmaTuPcComponent {
  constructor(
    private Servicios: ServiciosComputadorasService,
    private router: Router,
    private ngxToastService: NgxToastService
  ) {}

  name!: string;
  BooleanoBotones: boolean = true;
  Usuario!: Usuario;
  ImagenProcesador!: string | undefined;
  ImagenPlacaMadre!: string | undefined;
  ImagenPlacaDeVideo!: string | undefined;
  ImagenRam!: string | undefined;
  ImagenDiscoDuro!: string | undefined;
  ImagenFuenteDePoder!: string | undefined;
  ImagenGabinete!: string | undefined;
  ImagenPeriferico!: string | undefined;
  ImagenMonitor!: string | undefined;
  TotalPrecio: number = 0;

  //?- INTEL:
  ArrayDeComponentesINTEL: (Componentes | Perifericos | Monitor)[] = [];
  ProcesadoresIntel!: Componentes[];
  PlacasMadreIntel!: Componentes[];
  Memorias_RamIntel!: Componentes[];
  Placas_De_VideoIntel!: Componentes[];
  Discos_Rigidos_Intel!: Componentes[];
  FuentesDePoderIntel!: Componentes[];
  GabinetesIntel!: Componentes[];
  PerifericosIntel!: Perifericos[];
  MonitoresIntel!: Monitor[];
  ArmadoPcIntel!: ArmadoPc[];
  PrecioTotalIntel!: number;

  //!- AMD:
  ArrayDeComponentesAMD: (Componentes | Perifericos | Monitor)[] = [];
  ProcesadoresAmd!: Componentes[];
  PlacasMadreAmd!: Componentes[];
  Memorias_RamAmd!: Componentes[];
  Placas_De_VideoAmd!: Componentes[];
  Discos_Rigidos_Amd!: Componentes[];
  FuentesDePoderAmd!: Componentes[];
  GabinetesAmd!: Componentes[];
  PerifericosAmd!: Perifericos[];
  MonitoresAmd!: Monitor[];
  ArmadoPcAmd!: ArmadoPc[];
  PrecioTotalAmd!: number;

  /*
  
  AL TOCAR AGREGAR QUE SE PRODUCTO SE AGREGE AL CARRITO. Y QUE EL CONTADOR DEL PRECIO SEA EL MISMO QUE DEL CARRITO. 
  LUEGO EL BOTON AGREGAR TODO AL CARRITO , SE VA A LLAMAR ===> IR AL CARRITO.
  
  */

  ngOnInit() {
    this.ObtenerLocalStorage();
    window.scroll(0, 0);
    this.Servicios.GetPrecioTotal(this.Usuario._id).subscribe((date) => {
      this.TotalPrecio = date;
    });
    //---------------------------------------------------------IMAGENES-------------------------------------------------------------//

    // Obtener Imagen Procesador:
    const ImagenLocalStorage = localStorage.getItem('ImagenProcesador');
    if (ImagenLocalStorage) {
      this.ImagenProcesador = JSON.parse(ImagenLocalStorage);
    }

    // Obtener Placa Madre:
    const ImagenPlacaMadreLocalStorage =
      localStorage.getItem('ImagenPlacaMadre');
    if (ImagenPlacaMadreLocalStorage) {
      this.ImagenPlacaMadre = JSON.parse(ImagenPlacaMadreLocalStorage);
    }

    // Obtener Imagen Placa De Video:
    const ImagenPlacaDeVideoLocalStorage =
      localStorage.getItem('ImagenPlacaDeVideo');
    if (ImagenPlacaDeVideoLocalStorage) {
      this.ImagenPlacaDeVideo = JSON.parse(ImagenPlacaDeVideoLocalStorage);
    }

    // Obtener Imagen Fuente De Poder:
    const ImagenFuenteDePoderLocalStorage = localStorage.getItem(
      'ImagenFuenteDePoder'
    );
    if (ImagenFuenteDePoderLocalStorage) {
      this.ImagenFuenteDePoder = JSON.parse(ImagenFuenteDePoderLocalStorage);
    }

    // Obtener Imagen Memoria Ram:
    const ImagenMemoriaRam = localStorage.getItem('ImagenMemoriaRam');
    if (ImagenMemoriaRam) {
      this.ImagenRam = JSON.parse(ImagenMemoriaRam);
    }

    // Obtener Imagen Disco Duro:
    const ImagenDiscoDuro = localStorage.getItem('ImagenDiscoDuro');
    if (ImagenDiscoDuro) {
      this.ImagenDiscoDuro = JSON.parse(ImagenDiscoDuro);
    }

    // Obtener Imagen Gabinete:
    const ImagenGabineteLocalStorage = localStorage.getItem('ImagenGabinete');
    if (ImagenGabineteLocalStorage) {
      this.ImagenGabinete = JSON.parse(ImagenGabineteLocalStorage);
    }

    // Obtener Imagen Monitor:
    const ImagenMonitorLocalStorage = localStorage.getItem('ImagenMonitor');
    if (ImagenMonitorLocalStorage) {
      this.ImagenMonitor = JSON.parse(ImagenMonitorLocalStorage);
    }

    // Obtener Imagen Periferico:
    const ImagenPerifericoLocalStorage =
      localStorage.getItem('ImagenPeriferico');
    if (ImagenPerifericoLocalStorage) {
      this.ImagenPeriferico = JSON.parse(ImagenPerifericoLocalStorage);
    }

    //------------------------------------------------------------------------------------------------------------------------------//
    // Recuperar el valor de BooleanoBotones desde localStorage
    const booleanoBotonesGuardado = localStorage.getItem('BooleanoBotones');
    if (booleanoBotonesGuardado) {
      this.BooleanoBotones = JSON.parse(booleanoBotonesGuardado);
    }
    //---------------------------------------PROCESADOR INTEL-----------------------------------//
    const ProcesadorIntel = localStorage.getItem('ProcesadoresIntel');
    if (ProcesadorIntel) {
      this.ProcesadoresIntel = JSON.parse(ProcesadorIntel);
    }
    //---------------------------------------PLACA MADRE INTEL-----------------------------------------------//
    const placaMadreIntel = localStorage.getItem('PlacasMadreIntel');
    if (placaMadreIntel) {
      this.PlacasMadreIntel = JSON.parse(placaMadreIntel);
    }
    //-------------------------------------MEMORIA RAM---------------------------------------------------//
    const MemoriaRam = localStorage.getItem('Memorias_RamIntel');
    if (MemoriaRam) {
      this.Memorias_RamIntel = JSON.parse(MemoriaRam);
    }
    //---------------------------------------PLACA DE VIDEO INTEL-------------------------------------------------//
    const PlacaDeVideoIntel = localStorage.getItem('Placas_De_VideoIntel');
    if (PlacaDeVideoIntel) {
      this.Placas_De_VideoIntel = JSON.parse(PlacaDeVideoIntel);
    }
    //-----------------------------------------DISCO DURO INTEL-----------------------------------------------//
    const DiscosDurosIntel = localStorage.getItem('Discos_Rigidos_Intel');
    if (DiscosDurosIntel) {
      this.Discos_Rigidos_Intel = JSON.parse(DiscosDurosIntel);
    }
    //----------------------------------------FUENTE DE PODER INTEL------------------------------------------------//
    const FuentesDePoderIntel = localStorage.getItem('FuentesDePoderIntel');
    if (FuentesDePoderIntel) {
      this.FuentesDePoderIntel = JSON.parse(FuentesDePoderIntel);
    }
    //----------------------------------------GABINETES INTEL------------------------------------------------//
    const GabinetesIntel = localStorage.getItem('GabinetesIntel');
    if (GabinetesIntel) {
      this.GabinetesIntel = JSON.parse(GabinetesIntel);
    }
    //---------------------------------------------PERIFERICOS-------------------------------------------//
    const PerifericosIntel = localStorage.getItem('PerifericosIntel');
    if (PerifericosIntel) {
      this.PerifericosIntel = JSON.parse(PerifericosIntel);
    }

    //---------------------------------------------MONITORES-------------------------------------------//
    const MonitoresIntel = localStorage.getItem('MonitoresIntel');
    if (MonitoresIntel) {
      this.MonitoresIntel = JSON.parse(MonitoresIntel);
    }

    //!----------------------------------------------AMD----------------------------------------------------------//

    //---------------------------------------PROCESADOR Amd-----------------------------------//
    const ProcesadorAmd = localStorage.getItem('ProcesadoresAmd');
    if (ProcesadorAmd) {
      this.ProcesadoresAmd = JSON.parse(ProcesadorAmd);
    }
    //---------------------------------------PLACA MADRE AMD-----------------------------------------------//
    const placaMadreAmd = localStorage.getItem('PlacasMadreAmd');
    if (placaMadreAmd) {
      this.PlacasMadreAmd = JSON.parse(placaMadreAmd);
    }
    //-------------------------------------MEMORIA RAM AMD---------------------------------------------------//
    const MemoriaRamAmd = localStorage.getItem('Memorias_RamAmd');
    if (MemoriaRamAmd) {
      this.Memorias_RamAmd = JSON.parse(MemoriaRamAmd);
    }
    //---------------------------------------PLACA DE VIDEO AMD-------------------------------------------------//
    const PlacaDeVideoAmd = localStorage.getItem('Placas_De_VideoAmd');
    if (PlacaDeVideoAmd) {
      this.Placas_De_VideoAmd = JSON.parse(PlacaDeVideoAmd);
    }
    //-----------------------------------------DISCO DURO AMD-----------------------------------------------//
    const DiscosDurosAmd = localStorage.getItem('Discos_Rigidos_Amd');
    if (DiscosDurosAmd) {
      this.Discos_Rigidos_Amd = JSON.parse(DiscosDurosAmd);
    }
    //----------------------------------------FUENTE DE PODER AMD------------------------------------------------//
    const FuentesDePoderAmd = localStorage.getItem('FuentesDePoderAmd');
    if (FuentesDePoderAmd) {
      this.FuentesDePoderAmd = JSON.parse(FuentesDePoderAmd);
    }
    //----------------------------------------GABINETES AMD------------------------------------------------//
    const GabinetesAmd = localStorage.getItem('GabinetesAmd');
    if (GabinetesAmd) {
      this.GabinetesAmd = JSON.parse(GabinetesAmd);
    }
    //---------------------------------------------PERIFERICOS-------------------------------------------//
    const PerifericosAmd = localStorage.getItem('PerifericosAmd');
    if (PerifericosAmd) {
      this.PerifericosAmd = JSON.parse(PerifericosAmd);
    }

    //---------------------------------------------MONITORES-------------------------------------------//
    const MonitoresAmd = localStorage.getItem('MonitoresAmd');
    if (MonitoresAmd) {
      this.MonitoresAmd = JSON.parse(MonitoresAmd);
    }
  }

  //----------------Alerts:

  addWarningArmar_Pc(): void {
    this.ngxToastService.onWarning(
      'Inicia sesion',
      'Para Armar un Pc debes iniciar sesion'
    );
  }

  //?----------------------------------------------------------------------------------------------------INTEL:

  //* AGREGAR ARMADO PC:
  FuncionAgregarArmadoPcIntel(id: string) {
    window.scroll(0, 0);
    // AL AGREGAR AL PROCESADOR VAMOS HABILITAR LAS PLACAS MADRE Y GUARDAR CADA COMPONENTES AGREGADO A UN ARRAY.
    this.Servicios.PostCarritoComputadoras(
      this.Usuario._id,
      this.ArmadoPcIntel.find((e) => e._id === id)
    ).subscribe((date) => date);

    this.actualizarPrecioTotal();

    this.ArmadoPcIntel = [];
    //- Monitores:
    localStorage.removeItem('ArmadoPcIntel');
  }

  //* AGREGAR MONITOR:
  FuncionAgregarCarritoMonitorIntel(id: string) {
    window.scroll(0, 0);
    // AL AGREGAR AL PROCESADOR VAMOS HABILITAR LAS PLACAS MADRE Y GUARDAR CADA COMPONENTES AGREGADO A UN ARRAY.
    this.Servicios.PostCarritoComputadoras(
      this.Usuario._id,
      this.MonitoresIntel.find((e) => e._id === id)
    ).subscribe((date) => date);

    this.actualizarPrecioTotal();
    this.ImagenMonitor = this.MonitoresIntel.find((e) => e._id === id)?.Imagen;

    localStorage.setItem(
      'ImagenMonitor',
      JSON.stringify(this.MonitoresIntel.find((e) => e._id === id)?.Imagen)
    );

    this.MonitoresIntel = [];

    this.name = 'Vacio';
    //- Monitores:
    localStorage.removeItem('MonitoresIntel');
  }

  //* AGREGAR PERIFERICOS:
  FuncionAgregarCarritoPerifericosIntel(id: string) {
    window.scroll(0, 0);
    // AL AGREGAR AL PROCESADOR VAMOS HABILITAR LAS PLACAS MADRE Y GUARDAR CADA COMPONENTES AGREGADO A UN ARRAY.
    this.Servicios.PostCarritoComputadoras(
      this.Usuario._id,
      this.PerifericosIntel.find((e) => e._id === id)
    ).subscribe((date) => date);

    this.actualizarPrecioTotal();
    this.ImagenPeriferico = this.PerifericosIntel.find(
      (e) => e._id === id
    )?.Imagen;

    localStorage.setItem(
      'ImagenPeriferico',
      JSON.stringify(this.PerifericosIntel.find((e) => e._id === id)?.Imagen)
    );

    this.PerifericosIntel = [];

    this.name = 'Monitor';

    //- Perifericos:
    localStorage.removeItem('PerifericosIntel');
  }

  //* AGREGAR GABINETE:
  FuncionAgregarCarritoGabineteIntel(id: string) {
    window.scroll(0, 0);
    // AL AGREGAR AL PROCESADOR VAMOS HABILITAR LAS PLACAS MADRE Y GUARDAR CADA COMPONENTES AGREGADO A UN ARRAY.

    this.Servicios.PostCarritoComputadoras(
      this.Usuario._id,
      this.GabinetesIntel.find((e) => e._id === id)
    ).subscribe((date) => date);

    this.actualizarPrecioTotal();
    this.ImagenGabinete = this.GabinetesIntel.find((e) => e._id === id)?.Imagen;

    localStorage.setItem(
      'ImagenGabinete',
      JSON.stringify(this.GabinetesIntel.find((e) => e._id === id)?.Imagen)
    );

    this.GabinetesIntel = [];

    this.name = 'Perifericos';

    //- Gabinetes:
    localStorage.removeItem('GabinetesIntel');
  }

  //* AGREGAR FUENTE DE PODER:
  FuncionAgregarCarritoFuenteDePoderIntel(id: string) {
    window.scroll(0, 0);
    // AL AGREGAR AL PROCESADOR VAMOS HABILITAR LAS PLACAS MADRE Y GUARDAR CADA COMPONENTES AGREGADO A UN ARRAY.
    this.Servicios.PostCarritoComputadoras(
      this.Usuario._id,
      this.FuentesDePoderIntel.find((e) => e._id === id)
    ).subscribe((date) => date);

    this.actualizarPrecioTotal();
    this.ImagenFuenteDePoder = this.FuentesDePoderIntel.find(
      (e) => e._id === id
    )?.Imagen;

    localStorage.setItem(
      'ImagenFuenteDePoder',
      JSON.stringify(this.FuentesDePoderIntel.find((e) => e._id === id)?.Imagen)
    );

    this.FuentesDePoderIntel = [];

    this.name = 'Gabinete';
    //- Fuentes De Poder:
    localStorage.removeItem('FuentesDePoderIntel');
  }

  //* AGREGAR DISCO DURO:
  FuncionAgregarCarritoDiscoDuroIntel(id: string) {
    window.scroll(0, 0);
    // AL AGREGAR AL PROCESADOR VAMOS HABILITAR LAS PLACAS MADRE Y GUARDAR CADA COMPONENTES AGREGADO A UN ARRAY.
    this.Servicios.PostCarritoComputadoras(
      this.Usuario._id,
      this.Discos_Rigidos_Intel.find((e) => e._id === id)
    ).subscribe((date) => date);

    this.actualizarPrecioTotal();
    this.ImagenDiscoDuro = this.Discos_Rigidos_Intel.find(
      (e) => e._id === id
    )?.Imagen;

    localStorage.setItem(
      'ImagenDiscoDuro',
      JSON.stringify(
        this.Discos_Rigidos_Intel.find((e) => e._id === id)?.Imagen
      )
    );

    this.Discos_Rigidos_Intel = [];

    this.name = 'Fuente De Poder';
    //- Disco Rigido:
    localStorage.removeItem('Discos_Rigidos_Intel');
  }

  //* AGREGAR PLACA DE VIDEO:
  FuncionAgregarCarritoPlacaDeVideoIntel(id: string) {
    window.scroll(0, 0);
    // AL AGREGAR AL PROCESADOR VAMOS HABILITAR LAS PLACAS MADRE Y GUARDAR CADA COMPONENTES AGREGADO A UN ARRAY.
    this.Servicios.PostCarritoComputadoras(
      this.Usuario._id,
      this.Placas_De_VideoIntel.find((e) => e._id === id)
    ).subscribe((date) => date);

    this.actualizarPrecioTotal();
    this.ImagenPlacaDeVideo = this.Placas_De_VideoIntel.find(
      (e) => e._id === id
    )?.Imagen;

    localStorage.setItem(
      'ImagenPlacaDeVideo',
      JSON.stringify(
        this.Placas_De_VideoIntel.find((e) => e._id === id)?.Imagen
      )
    );

    this.Placas_De_VideoIntel = [];

    this.name = 'Almacenamiento';

    //- Placa De Video:
    localStorage.removeItem('Placas_De_VideoIntel');
  }

  //*- AGREGAR MEMORIA RAM:
  FuncionAgregarCarritoMemoriasRamIntel(id: string) {
    window.scroll(0, 0);
    // AL AGREGAR AL PROCESADOR VAMOS HABILITAR LAS PLACAS MADRE Y GUARDAR CADA COMPONENTES AGREGADO A UN ARRAY.

    this.Servicios.PostCarritoComputadoras(
      this.Usuario._id,
      this.Memorias_RamIntel.find((e) => e._id === id)
    ).subscribe((date) => date);

    this.actualizarPrecioTotal();
    this.ImagenRam = this.Memorias_RamIntel.find((e) => e._id === id)?.Imagen;

    localStorage.setItem(
      'ImagenMemoriaRam',
      JSON.stringify(this.Memorias_RamIntel.find((e) => e._id === id)?.Imagen)
    );

    this.Memorias_RamIntel = [];

    this.name = 'Placa De Video';
    //- Memoria Ram:
    localStorage.removeItem('Memorias_RamIntel');
  }

  //*- AGREGAR PLACA MADRE:
  FuncionAgregarCarritoPlacaMadreIntel(id: string) {
    window.scroll(0, 0);
    // AL AGREGAR AL PROCESADOR VAMOS HABILITAR LAS PLACAS MADRE Y GUARDAR CADA COMPONENTES AGREGADO A UN ARRAY.

    this.Servicios.PostCarritoComputadoras(
      this.Usuario._id,
      this.PlacasMadreIntel.find((e) => e._id === id)
    ).subscribe((date) => date);

    this.actualizarPrecioTotal();
    this.ImagenPlacaMadre = this.PlacasMadreIntel.find(
      (e) => e._id === id
    )?.Imagen;

    localStorage.setItem(
      'ImagenPlacaMadre',
      JSON.stringify(this.PlacasMadreIntel.find((e) => e._id === id)?.Imagen)
    );

    this.PlacasMadreIntel = [];

    this.name = 'Memoria Ram';

    //- Placas Madre:
    localStorage.removeItem('PlacasMadreIntel');
  }

  //*- AGREGAR PROCESADOR:
  FuncionAgregarCarritoProcesadorIntel(name: string) {
    window.scroll(0, 0);

    this.Servicios.PostCarritoComputadoras(
      this.Usuario._id,
      this.ProcesadoresIntel.find((e) => e.name === name)
    ).subscribe((date) => date);

    localStorage.setItem(
      'ImagenProcesador',
      JSON.stringify(
        this.ProcesadoresIntel.find((e) => e.name === name)?.Imagen
      )
    );
    this.actualizarPrecioTotal();
    this.ImagenProcesador = this.ProcesadoresIntel.find(
      (e) => e.name === name
    )?.Imagen;

    this.ProcesadoresIntel = [];

    this.name = 'Placa Madre';

    //- Procesador:
    localStorage.removeItem('ProcesadoresIntel');
  }

  //- Funcion Seleccion Intel:

  FuncionSeleccionIntel() {
    // aca voy abuscar todo los Componentes que sean de Intel.
    // lo voy a identificar con esta forma  "TipoDeChip": "Intel".

    this.name = 'Procesador';

    if (!this.Usuario) {
      this.addWarningArmar_Pc();
    } else {
      // Guardar el valor en localStorage

      this.BooleanoBotones = false;

      //- VACIAMOS TODO LO DE AMD:
      this.PlacasMadreAmd = [];
      this.ProcesadoresAmd = [];
      this.Placas_De_VideoAmd = [];
      this.Memorias_RamAmd = [];
      this.ArrayDeComponentesAMD = [];
      this.Discos_Rigidos_Amd = [];
      this.FuentesDePoderAmd = [];
      this.GabinetesAmd = [];
      this.PerifericosAmd = [];
      this.MonitoresAmd = [];
      this.ArmadoPcAmd = [];

      //- Procesador:
      localStorage.removeItem('ProcesadoresAmd');
      //- Placas Madre:
      localStorage.removeItem('PlacasMadreAmd');
      //- Memoria Ram:
      localStorage.removeItem('Memorias_RamAmd');
      //- Placa De Video:
      localStorage.removeItem('Placas_De_VideoAmd');
      //- Disco Rigido:
      localStorage.removeItem('Discos_Rigidos_Amd');
      //- Fuentes De Poder:
      localStorage.removeItem('FuentesDePoderAmd');
      //- Gabinetes:
      localStorage.removeItem('GabinetesAmd');
      //- Perifericos:
      localStorage.removeItem('PerifericosAmd');
      //- Monitores:
      localStorage.removeItem('MonitoresAmd');

      this.Servicios.DatosProductosINTEL().subscribe((date) => {
        //- Procesador:
        this.ProcesadoresIntel = date.ProcesadorIntel;
        localStorage.setItem(
          'ProcesadoresIntel',
          JSON.stringify(date.ProcesadorIntel)
        );

        //- Placas Madre:
        this.PlacasMadreIntel = date.PlacaMadreIntel;
        localStorage.setItem(
          'PlacasMadreIntel',
          JSON.stringify(date.PlacaMadreIntel)
        );

        //- Memoria Ram:
        this.Memorias_RamIntel = date.MemoriasRamIntel;
        localStorage.setItem(
          'Memorias_RamIntel',
          JSON.stringify(date.MemoriasRamIntel)
        );

        //- Placa De Video:
        this.Placas_De_VideoIntel = date.PlacasDeVideoIntel;
        localStorage.setItem(
          'Placas_De_VideoIntel',
          JSON.stringify(date.PlacasDeVideoIntel)
        );
        //- Disco Rigido:
        this.Discos_Rigidos_Intel = date.DiscoDuroIntel;
        localStorage.setItem(
          'Discos_Rigidos_Intel',
          JSON.stringify(date.DiscoDuroIntel)
        );
        //- Fuentes De Poder:
        this.FuentesDePoderIntel = date.FuentesDePoderIntel;
        localStorage.setItem(
          'FuentesDePoderIntel',
          JSON.stringify(date.FuentesDePoderIntel)
        );
        //- Gabinetes:
        this.GabinetesIntel = date.GabinetesIntel;
        localStorage.setItem(
          'GabinetesIntel',
          JSON.stringify(date.GabinetesIntel)
        );
        //- Perifericos:
        this.PerifericosIntel = date.PerifericosIntel;
        localStorage.setItem(
          'PerifericosIntel',
          JSON.stringify(date.PerifericosIntel)
        );

        //- Monitores:
        this.MonitoresIntel = date.MonitoresIntel;
        localStorage.setItem(
          'MonitoresIntel',
          JSON.stringify(date.MonitoresIntel)
        );

        //- Armado Pc:
        this.ArmadoPcIntel = date.ArmadoPcIntel;
        localStorage.setItem(
          'ArmadoPcIntel',
          JSON.stringify(date.ArmadoPcIntel)
        );
      });
    }
  }

  //!--------------------------------------------------------------------------------------------------------AMD:

  //* AGREGAR ARMADO PC:
  FuncionAgregarArmadoPcAmd(id: string) {
    window.scroll(0, 0);
    // AL AGREGAR AL PROCESADOR VAMOS HABILITAR LAS PLACAS MADRE Y GUARDAR CADA COMPONENTES AGREGADO A UN ARRAY.
    this.Servicios.PostCarritoComputadoras(
      this.Usuario._id,
      this.ArmadoPcAmd.find((e) => e._id === id)
    ).subscribe((date) => date);

    this.actualizarPrecioTotal();

    this.ArmadoPcAmd = [];
    //- Monitores:
    localStorage.removeItem('ArmadoPcAmd');
  }

  //* AGREGAR MONITOR:
  FuncionAgregarCarritoMonitorAmd(id: string) {
    window.scroll(0, 0);
    // AL AGREGAR AL PROCESADOR VAMOS HABILITAR LAS PLACAS MADRE Y GUARDAR CADA COMPONENTES AGREGADO A UN ARRAY.
    this.Servicios.PostCarritoComputadoras(
      this.Usuario._id,
      this.MonitoresAmd.find((e) => e._id === id)
    ).subscribe((date) => date);

    this.actualizarPrecioTotal();
    this.ImagenMonitor = this.MonitoresAmd.find((e) => e._id === id)?.Imagen;

    this.MonitoresAmd = [];

    this.name = 'Vacio';

    //- Monitores:
    localStorage.removeItem('MonitoresAmd');
  }

  //* AGREGAR PERIFERICO:
  FuncionAgregarCarritoPerifericoAmd(id: string) {
    window.scroll(0, 0);
    // AL AGREGAR AL PROCESADOR VAMOS HABILITAR LAS PLACAS MADRE Y GUARDAR CADA COMPONENTES AGREGADO A UN ARRAY.
    this.Servicios.PostCarritoComputadoras(
      this.Usuario._id,
      this.PerifericosAmd.find((e) => e._id === id)
    ).subscribe((date) => date);

    this.actualizarPrecioTotal();
    this.ImagenPeriferico = this.PerifericosAmd.find(
      (e) => e._id === id
    )?.Imagen;

    this.PerifericosAmd = [];

    this.name = 'Monitor';
    //- Perifericos:
    localStorage.removeItem('PerifericosAmd');
  }

  //* AGREGAR GABINETE:
  FuncionAgregarCarritoGabineteAmd(id: string) {
    window.scroll(0, 0);
    // AL AGREGAR AL PROCESADOR VAMOS HABILITAR LAS PLACAS MADRE Y GUARDAR CADA COMPONENTES AGREGADO A UN ARRAY.
    this.Servicios.PostCarritoComputadoras(
      this.Usuario._id,
      this.GabinetesAmd.find((e) => e._id === id)
    ).subscribe((date) => date);

    this.actualizarPrecioTotal();
    this.ImagenGabinete = this.GabinetesAmd.find((e) => e._id === id)?.Imagen;

    this.GabinetesAmd = [];

    this.name = 'Perifericos';
    //- Gabinetes:
    localStorage.removeItem('GabinetesAmd');
  }

  //* AGREGAR FUENTE DE PODER:
  FuncionAgregarCarritoFuenteDePoderAmd(id: string) {
    window.scroll(0, 0);
    // AL AGREGAR AL PROCESADOR VAMOS HABILITAR LAS PLACAS MADRE Y GUARDAR CADA COMPONENTES AGREGADO A UN ARRAY.
    this.Servicios.PostCarritoComputadoras(
      this.Usuario._id,
      this.FuentesDePoderAmd.find((e) => e._id === id)
    ).subscribe((date) => date);

    this.actualizarPrecioTotal();
    this.ImagenFuenteDePoder = this.FuentesDePoderAmd.find(
      (e) => e._id === id
    )?.Imagen;

    this.FuentesDePoderAmd = [];

    this.name = 'Gabinete';

    //- Fuentes De Poder:
    localStorage.removeItem('FuentesDePoderAmd');
  }

  //* AGREGAR DISCO DURO:
  FuncionAgregarCarritoDiscoDuroAmd(id: string) {
    window.scroll(0, 0);
    // AL AGREGAR AL PROCESADOR VAMOS HABILITAR LAS PLACAS MADRE Y GUARDAR CADA COMPONENTES AGREGADO A UN ARRAY.
    this.Servicios.PostCarritoComputadoras(
      this.Usuario._id,
      this.Discos_Rigidos_Amd.find((e) => e._id === id)
    ).subscribe((date) => date);

    this.actualizarPrecioTotal();
    this.ImagenDiscoDuro = this.Discos_Rigidos_Amd.find(
      (e) => e._id === id
    )?.Imagen;

    this.Discos_Rigidos_Amd = [];

    this.name = 'Fuente De Poder';

    //- Disco Rigido:
    localStorage.removeItem('Discos_Rigidos_Amd');
  }

  //*- AGREGAR PLACA DE VIDEO:

  FuncionAgregarCarritoPlacaDeVideoAmd(id: string) {
    window.scroll(0, 0);
    // AL AGREGAR AL PROCESADOR VAMOS HABILITAR LAS PLACAS MADRE Y GUARDAR CADA COMPONENTES AGREGADO A UN ARRAY.
    this.Servicios.PostCarritoComputadoras(
      this.Usuario._id,
      this.Placas_De_VideoAmd.find((e) => e._id === id)
    ).subscribe((date) => date);

    this.actualizarPrecioTotal();
    this.ImagenPlacaDeVideo = this.Placas_De_VideoAmd.find(
      (e) => e._id === id
    )?.Imagen;

    this.Placas_De_VideoAmd = [];

    this.name = 'Almacenamiento';

    //- Placa De Video:
    localStorage.removeItem('Placas_De_VideoIntel');
  }

  //*- AGREGAR MEMORIA RAM:
  FuncionAgregarCarritoMemoriasRamAmd(id: string) {
    window.scroll(0, 0);
    // AL AGREGAR AL PROCESADOR VAMOS HABILITAR LAS PLACAS MADRE Y GUARDAR CADA COMPONENTES AGREGADO A UN ARRAY.
    this.Servicios.PostCarritoComputadoras(
      this.Usuario._id,
      this.Memorias_RamAmd.find((e) => e._id === id)
    ).subscribe((date) => date);

    this.actualizarPrecioTotal();
    this.ImagenRam = this.Memorias_RamAmd.find((e) => e._id === id)?.Imagen;

    this.Memorias_RamAmd = [];

    this.name = 'Placa De Video';

    //- Memoria Ram:
    localStorage.removeItem('Memorias_RamAmd');
  }

  //*- AGREGAR PLACA MADRE:
  FuncionAgregarCarritoPlacaMadreAmd(id: string) {
    window.scroll(0, 0);
    // AL AGREGAR AL PROCESADOR VAMOS HABILITAR LAS PLACAS MADRE Y GUARDAR CADA COMPONENTES AGREGADO A UN ARRAY.
    this.Servicios.PostCarritoComputadoras(
      this.Usuario._id,
      this.PlacasMadreAmd.find((e) => e._id === id)
    ).subscribe((date) => date);

    this.actualizarPrecioTotal();
    this.ImagenPlacaMadre = this.PlacasMadreAmd.find(
      (e) => e._id === id
    )?.Imagen;

    this.PlacasMadreAmd = [];

    this.name = 'Memoria Ram';

    //- Placas Madre:
    localStorage.removeItem('PlacasMadreAmd');
  }
  //*- AGREGAR PROCESADOR:

  FuncionAgregarCarritoProcesadorAmd(id: string) {
    this.BooleanoBotones = false;
    window.scroll(0, 0);
    // AL AGREGAR AL PROCESADOR VAMOS HABILITAR LAS PLACAS MADRE Y GUARDAR CADA COMPONENTES AGREGADO A UN ARRAY.
    this.Servicios.PostCarritoComputadoras(
      this.Usuario._id,
      this.ProcesadoresAmd.find((e) => e._id === id)
    ).subscribe((date) => date);

    this.actualizarPrecioTotal();
    this.ImagenProcesador = this.ProcesadoresAmd.find(
      (e) => e._id === id
    )?.Imagen;

    this.ProcesadoresAmd = [];

    this.name = 'Placa Madre';

    //- Procesador:
    localStorage.removeItem('ProcesadoresAmd');
  }
  //- Funcion Seleccion Amd:

  FuncionSeleccionAmd() {
    // aca voy abuscar todo los Componentes que sean de amd.
    // lo voy a identificar con esta forma  "TipoDeChip": "Amd" ==> solo las placa madre , procesadores.

    this.name = 'Procesador';

    if (!this.Usuario) {
      this.addWarningArmar_Pc();
    } else {
      this.BooleanoBotones = false;

      //- VACIAMOS TODO LO DE INTEL:
      this.PlacasMadreIntel = [];
      this.ProcesadoresIntel = [];
      this.Placas_De_VideoIntel = [];
      this.Memorias_RamIntel = [];
      this.ArrayDeComponentesINTEL = [];
      this.Discos_Rigidos_Intel = [];
      this.FuentesDePoderIntel = [];
      this.GabinetesIntel = [];
      this.PerifericosIntel = [];
      this.MonitoresIntel = [];
      this.ArmadoPcIntel = [];

      //- Procesador:
      localStorage.removeItem('ProcesadoresIntel');
      //- Placas Madre:
      localStorage.removeItem('PlacasMadreIntel');
      //- Memoria Ram:
      localStorage.removeItem('Memorias_RamIntel');
      //- Placa De Video:
      localStorage.removeItem('Placas_De_VideoIntel');
      //- Disco Rigido:
      localStorage.removeItem('Discos_Rigidos_Intel');
      //- Fuentes De Poder:
      localStorage.removeItem('FuentesDePoderIntel');
      //- Gabinetes:
      localStorage.removeItem('GabinetesIntel');
      //- Perifericos:
      localStorage.removeItem('PerifericosIntel');
      //- Monitores:
      localStorage.removeItem('MonitoresIntel');

      this.Servicios.DatosProductosAMD().subscribe((date) => {
        //- Procesador:
        this.ProcesadoresAmd = date.ProcesadorAmd;
        localStorage.setItem(
          'ProcesadoresAmd',
          JSON.stringify(date.PerifericosAmd)
        );

        //- Placas Madre:
        this.PlacasMadreAmd = date.PlacaMadreAmd;
        localStorage.setItem(
          'PlacasMadreAmd',
          JSON.stringify(date.PlacaMadreAmd)
        );

        //- Memoria Ram:
        this.Memorias_RamAmd = date.MemoriasRamAmd;
        localStorage.setItem(
          'Memorias_RamAmd',
          JSON.stringify(date.MemoriasRamAmd)
        );

        //- Placa De Video:
        this.Placas_De_VideoAmd = date.PlacasDeVideoAmd;
        localStorage.setItem(
          'Placas_De_VideoAmd',
          JSON.stringify(date.PlacasDeVideoAmd)
        );
        //- Disco Rigido:
        this.Discos_Rigidos_Amd = date.DiscoDuroAmd;
        localStorage.setItem(
          'Discos_Rigidos_Amd',
          JSON.stringify(date.DiscoDuroAmd)
        );
        //- Fuentes De Poder:
        this.FuentesDePoderAmd = date.FuentesDePoderAmd;
        localStorage.setItem(
          'FuentesDePoderAmd',
          JSON.stringify(date.FuentesDePoderAmd)
        );
        //- Gabinetes:
        this.GabinetesAmd = date.GabinetesAmd;
        localStorage.setItem('GabinetesAmd', JSON.stringify(date.GabinetesAmd));
        //- Perifericos:
        this.PerifericosAmd = date.PerifericosAmd;
        localStorage.setItem(
          'PerifericosAmd',
          JSON.stringify(date.PerifericosAmd)
        );

        //- Monitores:
        this.MonitoresAmd = date.MonitoresAmd;
        localStorage.setItem('MonitoresAmd', JSON.stringify(date.MonitoresAmd));

        //- Armado Pc:
        this.ArmadoPcAmd = date.ArmadoPcAmd;
        localStorage.setItem('ArmadoPcAmd', JSON.stringify(date.ArmadoPcAmd));
      });
    }
  }

  //-------------------------------------------------------BOTON REINICIAR:

  BotonReiniciar() {
    this.Servicios.DeleteTodoElCarrito(this.Usuario._id).subscribe();
    localStorage.removeItem('BooleanoBotones');

    //- VACIAMOS TODO LO DE AMD:
    this.PlacasMadreAmd = [];
    this.ProcesadoresAmd = [];
    this.Placas_De_VideoAmd = [];
    this.Memorias_RamAmd = [];
    this.ArrayDeComponentesAMD = [];
    this.Discos_Rigidos_Amd = [];
    this.FuentesDePoderAmd = [];
    this.GabinetesAmd = [];
    this.PerifericosAmd = [];
    this.MonitoresAmd = [];
    this.ArmadoPcAmd = [];

    //- VACIAMOS TODO LO DE INTEL:
    this.PlacasMadreIntel = [];
    this.ProcesadoresIntel = [];
    this.Placas_De_VideoIntel = [];
    this.Memorias_RamIntel = [];
    this.ArrayDeComponentesINTEL = [];
    this.Discos_Rigidos_Intel = [];
    this.FuentesDePoderIntel = [];
    this.GabinetesIntel = [];
    this.PerifericosIntel = [];
    this.MonitoresIntel = [];
    this.ArmadoPcIntel = [];

    //!------AMD:
    //- Procesador:
    localStorage.removeItem('ProcesadoresAmd');
    //- Placas Madre:
    localStorage.removeItem('PlacasMadreAmd');
    //- Memoria Ram:
    localStorage.removeItem('Memorias_RamAmd');
    //- Placa De Video:
    localStorage.removeItem('Placas_De_VideoAmd');
    //- Disco Rigido:
    localStorage.removeItem('Discos_Rigidos_Amd');
    //- Fuentes De Poder:
    localStorage.removeItem('FuentesDePoderAmd');
    //- Gabinetes:
    localStorage.removeItem('GabinetesAmd');
    //- Perifericos:
    localStorage.removeItem('PerifericosAmd');
    //- Monitores:
    localStorage.removeItem('MonitoresAmd');

    //?------INTEL:
    //- Procesador:
    localStorage.removeItem('ProcesadoresIntel');
    //- Placas Madre:
    localStorage.removeItem('PlacasMadreIntel');
    //- Memoria Ram:
    localStorage.removeItem('Memorias_RamIntel');
    //- Placa De Video:
    localStorage.removeItem('Placas_De_VideoIntel');
    //- Disco Rigido:
    localStorage.removeItem('Discos_Rigidos_Intel');
    //- Fuentes De Poder:
    localStorage.removeItem('FuentesDePoderIntel');
    //- Gabinetes:
    localStorage.removeItem('GabinetesIntel');
    //- Perifericos:
    localStorage.removeItem('PerifericosIntel');
    //- Monitores:
    localStorage.removeItem('MonitoresIntel');

    //----------------------------VACIAR IMAGENES:

    // Obtener Imagen Procesador:
    localStorage.removeItem('ImagenProcesador');

    // Obtener Placa Madre:
    localStorage.removeItem('ImagenPlacaMadre');

    // Obtener Imagen Placa De Video:

    localStorage.removeItem('ImagenPlacaDeVideo');

    // Obtener Imagen Fuente De Poder:
    localStorage.removeItem('ImagenFuenteDePoder');

    // Obtener Imagen Memoria Ram:
    localStorage.removeItem('ImagenMemoriaRam');

    // Obtener Imagen Disco Duro:
    localStorage.removeItem('ImagenDiscoDuro');

    // Obtener Imagen Gabinete:
    localStorage.removeItem('ImagenGabinete');

    // Obtener Imagen Monitor:
    localStorage.removeItem('ImagenMonitor');

    // Obtener Imagen Periferico:
    localStorage.removeItem('ImagenPeriferico');

    window.location.reload();
  }

  isAllArraysEmpty(): boolean {
    return (
      this.MonitoresAmd.length === 0 &&
      this.PerifericosAmd.length === 0 &&
      this.GabinetesAmd.length === 0 &&
      this.FuentesDePoderAmd.length === 0 &&
      this.Discos_Rigidos_Amd.length === 0 &&
      this.Placas_De_VideoAmd.length === 0 &&
      this.Memorias_RamAmd.length === 0 &&
      this.PlacasMadreAmd.length === 0 &&
      this.ProcesadoresAmd.length === 0 &&
      this.MonitoresIntel.length === 0 &&
      this.PerifericosIntel.length === 0 &&
      this.GabinetesIntel.length === 0 &&
      this.FuentesDePoderIntel.length === 0 &&
      this.Discos_Rigidos_Intel.length === 0 &&
      this.Placas_De_VideoIntel.length === 0 &&
      this.Memorias_RamIntel.length === 0 &&
      this.PlacasMadreIntel.length === 0 &&
      this.ProcesadoresIntel.length === 0
    );
  }

  //--------------------------------------------------------------------------------OBTENER LOCAL STORAGE:
  ObtenerLocalStorage() {
    const User = localStorage.getItem('Usuario');
    if (User) {
      this.Usuario = JSON.parse(User);
    }
  }

  //-----------------------------------------------------------------------------AGREGAR TODO AL CARRITO:

  BotonAgregarTodoCarrito() {
    this.router.navigate(['/Carrito']);
  }

  //- Actualizar Precio Total:

  actualizarPrecioTotal() {
    this.Servicios.GetPrecioTotal(this.Usuario._id).subscribe((precioTotal) => {
      this.TotalPrecio = precioTotal;
    });
  }

  //- Opacidad:

  calcularOpacidad(Stock: number): string {
    // Definir la lógica para calcular la opacidad en base al stock
    // Puedes ajustar la fórmula según tus necesidades

    const opacidad = Stock === 0 ? 0.5 : 1; // Por ejemplo, opacidad 0.5 si hay stock, 1 si no hay stock

    return opacidad.toString();
  }
}

//TODO : Lo que hay en el arrayDeComponentes Intel y Amd lo voy a utilizar para comprobar si estan los componentes yluego poder hacer los estilos en el cuadro derecho de las imagenes y aparte agregar al carrito. COMO TAMBIEN CALCULAR EL PRECIO TOTAL , ETC.

//! DEBO OCULTAR LOS BOTONES UNA VEZ QUE HAYA SELECIONADO UN TIPO DE MARCA , YA SEA AMD O INTEL.
