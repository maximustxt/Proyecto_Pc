import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel-de-marcas',
  templateUrl: './carrusel-de-marcas.component.html',
  styleUrls: ['./carrusel-de-marcas.component.scss'],
})
export class CarruselDeMarcasComponent {
  Imagenes: { img: string; ruta: string }[] = [
    {
      img: 'https://lezamapc.com.ar/modules/ps_imageslider/images/f7460e3af119947f29f7a245df1628d0338b0348_RTX-SERIE-40.png',
      ruta: '/GeForceRTX40',
    },
    {
      img: 'https://lezamapc.com.ar/modules/ps_imageslider/images/ce3df14f1e81d7ca1374f874fde732fc26cc26b2_7900-banner.png',
      ruta: '/RadeonRX7900',
    },
    {
      img: 'https://lezamapc.com.ar/modules/ps_imageslider/images/30bb5f9ebe7ddef0aca5ddebb61c721ed4daa520_intel-13th.png',
      ruta: '/IntelCore13th',
    },
    {
      img: 'https://lezamapc.com.ar/modules/ps_imageslider/images/8375854f0d5545bbc067bfea0e38fd28af7b1628_jbl.png',
      ruta: '/ProductosJBL',
    },
  ];
}
