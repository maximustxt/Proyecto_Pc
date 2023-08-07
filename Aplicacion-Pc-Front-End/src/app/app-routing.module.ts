import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//- Componentes
import { CarritoComponent } from '../components/carrito/carrito.component';
import { HomeComponent } from '../components/home/home.component';
import { FavoritosComponent } from '../components/favoritos/favoritos.component';
import { DetailComponent } from '../components/detail/detail.component';
import { FormularioRegistroComponent } from '../components/formulario-registro/formulario-registro.component';
import { ArmaTuPcComponent } from '../components/arma-tu-pc/arma-tu-pc.component';
import { DataResolverService } from 'src/Resolvers/Data.resolver.service';
import { ComponentesComponent } from '../components/componentes/componentes.component';
import { PerifericosComponent } from '../components/perifericos/perifericos.component';
import { NotebookComponent } from '../components/notebook/notebook.component';
import { PlacasDeVideoComponent } from '../components/placas-de-video/placas-de-video.component';
import { MotherboardComponent } from '../components/motherboard/motherboard.component';
import { SillasButacasComponent } from '../components/sillas-butacas/sillas-butacas.component';
import { NotebooksAeroComponent } from '../components/notebooks-aero/notebooks-aero.component';
import { CompraExitosaComponent } from '../components/compra-exitosa/compra-exitosa.component';
import { RadeonRX7900Component } from '../components/radeon-rx7900/radeon-rx7900.component';
import { GeforceRTX40Component } from '../components/geforce-rtx40/geforce-rtx40.component';
import { IntelCore13thComponent } from '../components/intel-core13th/intel-core13th.component';
import { ProductosJBLComponent } from '../components/productos-jbl/productos-jbl.component';
import { MonitoresComponent } from '../components/monitores/monitores.component';
import { InicioSesionComponent } from '../components/inicio-sesion/inicio-sesion.component';

//---------------------------------------------------------------------------------------------------------------------------//

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  //-----------------------CARRUSEL-------------------------//
  { path: 'GeForceRTX40', component: GeforceRTX40Component },
  { path: 'RadeonRX7900', component: RadeonRX7900Component },
  { path: 'IntelCore13th', component: IntelCore13thComponent },
  { path: 'ProductosJBL', component: ProductosJBLComponent },
  //--------------------------------------------------------//
  { path: 'Home', component: HomeComponent },
  { path: 'Detail/:id', component: DetailComponent },
  { path: 'CompraExitosa', component: CompraExitosaComponent },
  { path: 'ArmarPc', component: ArmaTuPcComponent },
  {
    path: 'Carrito',
    component: CarritoComponent,
    resolve: { carrito: DataResolverService },
  },
  //-----------------------PRODUCTOS----------------------//
  { path: 'Componentes', component: ComponentesComponent },
  { path: 'Perifericos', component: PerifericosComponent },
  { path: 'Notebooks', component: NotebookComponent },
  { path: 'PlacasDeVideo', component: PlacasDeVideoComponent },
  { path: 'Monitores', component: MonitoresComponent },
  { path: 'Motherboard', component: MotherboardComponent },
  { path: 'Sillas_Butacas', component: SillasButacasComponent },
  { path: 'NotebooksAero', component: NotebooksAeroComponent },
  //--------------------------USUARIO-------------------------//
  { path: 'Perfil', component: FavoritosComponent },
  { path: 'InicioDeSesion', component: InicioSesionComponent },
  { path: 'Registro', component: FormularioRegistroComponent },
  //----------------------------------------------------------//
  { path: '**', redirectTo: '/Home' }, // Ruta para redirigir en caso de URL inválida
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
