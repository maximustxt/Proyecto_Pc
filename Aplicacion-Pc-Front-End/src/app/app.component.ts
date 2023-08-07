import { Component, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  mostrarBotonFlecha = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.AparicionDeBotonFlecha();
  }

  AparicionDeBotonFlecha() {
    // Aquí va el código para mostrar o realizar alguna acción cuando el usuario hace scroll
    // Por ejemplo, puedes mostrar un botón de flecha cuando el usuario baja cierta cantidad de píxeles
    // o hacer alguna animación, etc.
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (scrollPosition > 500) {
      // Cambia el número 300 por la posición en píxeles donde quieres mostrar el botón
      this.mostrarBotonFlecha = true; // hacemos que se muestre el boton
    } else {
      this.mostrarBotonFlecha = false; // se oculta el boton
    }
  }

  SubirArriba() {
    window.scroll(0, 0);
  }
}
