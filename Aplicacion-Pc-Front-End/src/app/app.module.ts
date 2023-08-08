import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
//- Login :
import { NgGapiClientConfig, NG_GAPI_CONFIG } from 'ng-gapi';
//- Libreria Alerts:
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxToastNotifierModule } from 'ngx-toast-notifier';
//- Carga De Imagenes:
import { NgOptimizedImage } from '@angular/common';
//- Resolvers:
import { DataResolverService } from 'src/Resolvers/Data.resolver.service';
// Importa los módulos del carousel:
import { NgImageSliderModule } from 'ng-image-slider';
//- Components:
import { AppComponent } from './app.component';
import { HomeComponent } from '../components/home/home.component';
import { CarruselComponent } from '../components/carrusel/carrusel.component';
import { FavoritosComponent } from '../components/favoritos/favoritos.component';
import { CardComponent } from '../components/card/card.component';
import { FormularioRegistroComponent } from '../components/formulario-registro/formulario-registro.component';
import { FooterComponent } from '../components/footer/footer.component';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { CarritoComponent } from '../components/carrito/carrito.component';
import { CarruselDeMarcasComponent } from '../components/carrusel-de-marcas/carrusel-de-marcas.component';
import { ArmaTuPcComponent } from '../components/arma-tu-pc/arma-tu-pc.component';
import { DetailComponent } from '../components/detail/detail.component';
import { SearchComponent } from '../components/search/search.component';
import { CarruselDetailProductosComponent } from '../components/carrusel-detail-productos/carrusel-detail-productos.component';
import { PipePrecioPipe } from '../Pipes/pipe-precio.pipe';
import { ComponentesComponent } from '../components/componentes/componentes.component';
import { PerifericosComponent } from '../components/perifericos/perifericos.component';
import { NotebookComponent } from '../components/notebook/notebook.component';
import { CarruselDeMarcasSponsorsComponent } from '../components/carrusel-de-marcas-sponsors/carrusel-de-marcas-sponsors.component';
import { PlacasDeVideoComponent } from '../components/placas-de-video/placas-de-video.component';
import { MotherboardComponent } from '../components/motherboard/motherboard.component';
import { SillasButacasComponent } from '../components/sillas-butacas/sillas-butacas.component';
import { NotebooksAeroComponent } from '../components/notebooks-aero/notebooks-aero.component';
import { CompraExitosaComponent } from '../components/compra-exitosa/compra-exitosa.component';
import { RadeonRX7900Component } from '../components/radeon-rx7900/radeon-rx7900.component';
import { GeforceRTX40Component } from '../components/geforce-rtx40/geforce-rtx40.component';
import { IntelCore13thComponent } from '../components/intel-core13th/intel-core13th.component';
import { ProductosJBLComponent } from '../components/productos-jbl/productos-jbl.component';
import { PipeNombreFiltrosPipe } from '../Pipes/pipe-nombre-filtros.pipe';
import { MonitoresComponent } from '../components/monitores/monitores.component';
import { InicioSesionComponent } from '../components/inicio-sesion/inicio-sesion.component';
import { InfoArmarPcComponent } from '../components/info-armar-pc/info-armar-pc.component';

const gapiClientConfig: NgGapiClientConfig = {
  client_id:
    '22063861651-oap9kg7nj3k44iauaa2ik7agnbs8vkca.apps.googleusercontent.com',
  discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
  scope: 'https://www.googleapis.com/auth/drive.readonly',
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    CarruselComponent,
    FavoritosComponent,
    CardComponent,
    FormularioRegistroComponent,
    FooterComponent,
    NavBarComponent,
    CarritoComponent,
    CarruselDeMarcasComponent,
    ArmaTuPcComponent,
    SearchComponent,
    CarruselDetailProductosComponent,
    PipePrecioPipe,
    ComponentesComponent,
    PerifericosComponent,
    NotebookComponent,
    CarruselDeMarcasSponsorsComponent,
    PlacasDeVideoComponent,
    MotherboardComponent,
    SillasButacasComponent,
    NotebooksAeroComponent,
    CompraExitosaComponent,
    RadeonRX7900Component,
    GeforceRTX40Component,
    IntelCore13thComponent,
    ProductosJBLComponent,
    PipeNombreFiltrosPipe,
    MonitoresComponent,
    InicioSesionComponent,
    InfoArmarPcComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgImageSliderModule,
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    BrowserAnimationsModule, // required animations module
    NgxToastNotifierModule.forRoot(), // NgxToastNotifierModule added
  ],
  providers: [
    DataResolverService,
    { provide: NG_GAPI_CONFIG, useValue: gapiClientConfig },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
