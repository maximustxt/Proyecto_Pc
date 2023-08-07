//- Angular:
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//- Interfaces:
import { Usuario, UsuarioGoogle } from 'src/Interfaces/Usuarios/Usuarios';
import { Perifericos } from 'src/Interfaces/Perifericos/Perifericos';
import { Computadoras } from 'src/Interfaces/Computadoras/ComputadorasInterfaces';
import { Componentes } from 'src/Interfaces/Componentes/Componentes';
import { InfoFav } from 'src/Interfaces/Favoritos/Favoritos';
import Silla_Butaca from '../../Interfaces/Sillas_Butacas/Sillas_Butacas';
import Monitor from 'src/Interfaces/Monitores/Monitores';
import AMD from 'src/Interfaces/AMD/Amd';
import INTEL from 'src/Interfaces/INTEL/Intel';
import { ArmadoPc } from 'src/Interfaces/Armado_Pc/Armado_Pc';
import Stripe from 'src/Interfaces/Stripe/Stripe';

@Injectable({
  providedIn: 'root',
})
export class ServiciosComputadorasService {
  constructor(private http: HttpClient) {}

  //*---------------------------------------------------------------------Get Computadoras:

  public GetComputadoras(): Observable<Computadoras[]> {
    return this.http.get<Computadoras[]>(`http://localhost:3000/Computadoras`);
  }

  //*---------------------------------------------------------------------GetDetail:

  public GetDetailComputadoras(id: string): Observable<Computadoras> {
    return this.http.get<Computadoras>(
      `http://localhost:3000/Computadoras/${id}`
    );
  }

  //*-------------------------------------------- Filtros de Computadoras:

  //- Marcas:

  public FiltrosMarcasGetComputadoras(
    Marca: string
  ): Observable<Computadoras[]> {
    return this.http.get<Computadoras[]>(
      `http://localhost:3000/Computadoras/FiltrosMarca/${Marca}`
    );
  }

  //- Categorias Computadoras:

  public FiltrosCategoriasGetComputadoras(
    Categoria: string
  ): Observable<Computadoras[]> {
    return this.http.get<Computadoras[]>(
      `http://localhost:3000/Computadoras/FiltrosCategoria/${Categoria}`
    );
  }

  //- Disco Duro:

  public FiltrosDiscoDuroGetComputadoras(
    Capacidad: string
  ): Observable<Computadoras[]> {
    return this.http.get<Computadoras[]>(
      `http://localhost:3000/Computadoras/FiltroDiscoDuro/${Capacidad}`
    );
  }

  //- Placa De Video:

  public FiltrosPlaca_De_VideoGetComputadoras(
    Placa_De_Video: string
  ): Observable<Computadoras[]> {
    return this.http.get<Computadoras[]>(
      `http://localhost:3000/Computadoras/FiltroPlacaDeVideo/${Placa_De_Video}`
    );
  }

  //- Memoria Ram:

  public Filtros_Memoria_Ram_GetComputadoras(
    Memoria_Ram: string
  ): Observable<Computadoras[]> {
    return this.http.get<Computadoras[]>(
      `http://localhost:3000/Computadoras/FiltroMemoriaRam/${Memoria_Ram}`
    );
  }

  //*---------------------------------------------------------------------Favoritos:

  public GetFavoritosComputadoras(idUser: string): Observable<InfoFav[]> {
    return this.http.get<InfoFav[]>(
      `http://localhost:3000/Favoritos/${idUser}`
    );
  }

  public PostFavoritosComputadoras(
    idUser: string,
    DatosComputadora:
      | Computadoras
      | Componentes
      | Perifericos
      | Silla_Butaca
      | Monitor
  ) {
    return this.http.post(
      `http://localhost:3000/Favoritos?idUser=${idUser}`,
      DatosComputadora
    );
  }

  public DeleteFavoritosComputadoras(
    id: string,
    idUser: string
  ): Observable<InfoFav[]> {
    return this.http.delete<InfoFav[]>(
      `http://localhost:3000/Favoritos/${id}?idUser=${idUser}`
    );
  }

  //*---------------------------------------------------------------------Carrito:

  //- Traer Carrito:

  public GetCarritoComputadoras(idUser: string): Observable<InfoFav[]> {
    return this.http.get<InfoFav[]>(`http://localhost:3000/Carrito/${idUser}`);
  }

  //- Agregar Carrito:

  public PostCarritoComputadoras(idUser: string, DatosCarrito: any) {
    return this.http.post(
      `http://localhost:3000/Carrito?idUser=${idUser}`,
      DatosCarrito
    );
  }

  //- Vaciar Carrito:

  public GetVaciarCarrito(idUser: string): Observable<InfoFav[]> {
    return this.http.get<InfoFav[]>(
      `http://localhost:3000/Carrito/CarritoVacio/${idUser}`
    );
  }

  //- Deletear Carrito:

  public DeleteCarritoComputadoras(
    id: string,
    idUser: string
  ): Observable<InfoFav[]> {
    return this.http.delete<InfoFav[]>(
      `http://localhost:3000/Carrito/${id}?idUser=${idUser}`
    );
  }

  //- Deletear Carrito Completo:

  public DeleteTodoElCarrito(idUser: string): Observable<[]> {
    return this.http.delete<[]>(
      `http://localhost:3000/Carrito?idUser=${idUser}`
    );
  }

  //*--------------------------------------------------------------------Search:

  public GetSearchProductos(
    name: string
  ): Observable<
    (Computadoras | Componentes | Perifericos | Silla_Butaca | Monitor)[]
  > {
    return this.http.get<
      (Computadoras | Componentes | Perifericos | Silla_Butaca)[]
    >(`http://localhost:3000/Search/${name}`);
  }

  //*---------------------------------------------------------------------Usuarios:

  public GetUsuarios(email: string): Observable<Usuario> {
    return this.http.get<Usuario>(`http://localhost:3000/Usuarios/${email}`);
  }

  public PostUsuarios(
    InformacionUsuario: Usuario | UsuarioGoogle
  ): Observable<string> {
    return this.http.post<string>(
      `http://localhost:3000/Usuarios/Registro`,
      InformacionUsuario
    );
  }

  //- Logout:
  public LogoutUsuario(email: string) {
    return this.http.delete(`http://localhost:3000/Usuarios/Logout/${email}`);
  }

  //*----------------------------------------------------------------------Contador:
  public PutCarrito(
    id: string,
    idUser: string,
    valor: number | undefined,
    ValorDetailCarrito: number | undefined
  ): Observable<Computadoras[]> {
    return this.http.put<Computadoras[]>(
      `http://localhost:3000/Contador/${id}?valor=${valor}&ValorDetailCarrito=${ValorDetailCarrito}`,
      { idUser }
    );
  }

  //- Contador para el Nav del carrito:

  public GetContadorNavBarCarrito(idUser: string): Observable<number> {
    return this.http.get<number>(`http://localhost:3000/Contador/${idUser}`);
  }

  //*-------------------------------------------------------------------------Precio Total:

  public GetPrecioTotal(idUser: string): Observable<number> {
    return this.http.get<number>(
      `http://localhost:3000/Contador/PrecioTotal/${idUser}`
    );
  }

  //*------------------------------------------------------------------Componentes:

  public GetComponentes(): Observable<Componentes[]> {
    return this.http.get<Componentes[]>(`http://localhost:3000/Componentes`);
  }

  //- Detail:

  public GetComponentDetail(id: string): Observable<Componentes> {
    return this.http.get<Componentes>(
      `http://localhost:3000/Componentes/${id}`
    );
  }

  //*-------------------------------------------- Filtros de Componentes:

  //- Marcas:

  public FiltrosMarcasGetComponentes(marca: string): Observable<Componentes[]> {
    return this.http.get<Componentes[]>(
      `http://localhost:3000/Componentes/FiltrosMarca/${marca}`
    );
  }

  //- Tipos Componetes:

  public FiltrosTiposGetComponentes(tipo: string): Observable<Componentes[]> {
    return this.http.get<Componentes[]>(
      `http://localhost:3000/Componentes/FiltrosTipo/${tipo}`
    );
  }

  //- Tamaño Gabinete:

  public FiltrosTamañoGabineteGetComponentes(
    Tamaño: string
  ): Observable<Componentes[]> {
    return this.http.get<Componentes[]>(
      `http://localhost:3000/Componentes/FiltroFormaGabinete/${Tamaño}`
    );
  }

  //- Compatibilidad:

  public FiltrosCompatibilidadGabineteGetComponentes(
    Compatibilidad: string
  ): Observable<Componentes[]> {
    return this.http.get<Componentes[]>(
      `http://localhost:3000/Componentes/FiltroCompatibilidad/${Compatibilidad}`
    );
  }

  //*------------------------------------------------------------------Perifericos:

  public GetPerifericos(): Observable<Perifericos[]> {
    return this.http.get<Perifericos[]>(`http://localhost:3000/Perifericos`);
  }

  //- Detail:

  public GetPerifericosDetail(id: string): Observable<Perifericos> {
    return this.http.get<Perifericos>(
      `http://localhost:3000/Perifericos/${id}`
    );
  }

  //*-------------------------------------------- Filtros de Perifericos:

  //- Marcas:

  public FiltrosMarcas_Perifericos(Marca: string): Observable<Perifericos[]> {
    return this.http.get<Perifericos[]>(
      `http://localhost:3000/Perifericos/Marcas_Perifericos/${Marca}`
    );
  }

  //- Tipos Perifericos:

  public FiltrosTipo_Perifericos(Tipo: string): Observable<Perifericos[]> {
    return this.http.get<Perifericos[]>(
      `http://localhost:3000/Perifericos/Tipo_Perifericos/${Tipo}`
    );
  }

  //- Tipo De Conexion:

  public FiltrosTipo_De_Conexion_Perifericos(
    TipoDeConexion: string
  ): Observable<Perifericos[]> {
    return this.http.get<Perifericos[]>(
      `http://localhost:3000/Perifericos/Tipo_De_Conexion_Perifericos/${TipoDeConexion}`
    );
  }

  //*-------------------------------------------------------------------Productos Destacados:

  public GetProductosDestacados(): Observable<
    (Computadoras | Perifericos | Componentes | Silla_Butaca | Monitor)[]
  > {
    return this.http.get<
      (Computadoras | Perifericos | Componentes | Silla_Butaca)[]
    >(`http://localhost:3000/Destacados`);
  }

  //*-------------------------------------------------------------------Sillas_Butacas:
  public GetSillas_Butacas(): Observable<Silla_Butaca[]> {
    return this.http.get<Silla_Butaca[]>(
      `http://localhost:3000/Sillas_Butacas`
    );
  }

  //- Detail:

  public GetSillas_ButacasDetail(id: string): Observable<Silla_Butaca> {
    return this.http.get<Silla_Butaca>(
      `http://localhost:3000/Sillas_Butacas/${id}`
    );
  }

  //- Filtros:

  public FiltrosMarcasGetSillas_Butacas(
    marca: string
  ): Observable<Silla_Butaca[]> {
    return this.http.get<Silla_Butaca[]>(
      `http://localhost:3000/Sillas_Butacas/FiltrosMarca/${marca}`
    );
  }

  //*-----------------------------------------------------Stripe:

  public postStripe(carrito: InfoFav[]): Observable<Stripe> {
    return this.http.post<Stripe>(
      `http://localhost:3000/Stripe/create-checkout-session`,
      carrito
    );
  }
  public PutStripe(carrito: InfoFav[]): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/Stripe/success`, carrito);
  }

  //*------------------------------------------------------------------Monitores:

  public GetMonitores(): Observable<Monitor[]> {
    return this.http.get<Monitor[]>(`http://localhost:3000/Monitores`);
  }

  //- Detail:

  public GetMonitoresDetail(id: string): Observable<Monitor> {
    return this.http.get<Monitor>(`http://localhost:3000/Monitores/${id}`);
  }

  //*--------------------------------------------Filtros de Monitores:

  //- Marcas:

  public FiltrosMarcas_Monitores(Marca: string): Observable<Monitor[]> {
    return this.http.get<Monitor[]>(
      `http://localhost:3000/Monitores/Marcas_Monitores/${Marca}`
    );
  }

  //- Paneles:

  public FiltrosPanel_Monitores(Panel: string): Observable<Monitor[]> {
    return this.http.get<Monitor[]>(
      `http://localhost:3000/Monitores/Panel_Monitores/${Panel}`
    );
  }

  //*-------------------------------------------------------ORDENAMIENTOS:

  public OrdenamioentosPrecio_Destacado(
    Ordenamiento: string,
    TipoDeProducto: string,
    ArrayParaOrdenar: (
      | Computadoras
      | Perifericos
      | Componentes
      | Silla_Butaca
      | Monitor
    )[]
  ): Observable<
    (Computadoras | Perifericos | Componentes | Silla_Butaca | Monitor)[]
  > {
    return this.http.post<
      (Computadoras | Perifericos | Componentes | Silla_Butaca | Monitor)[]
    >(
      `http://localhost:3000/Ordenamientos?Tipo_De_Producto=${TipoDeProducto}&Ordenamiento=${Ordenamiento}`,
      ArrayParaOrdenar
    );
  }

  //!-----------------------------------------------------------------------------AMD:

  public DatosProductosAMD(): Observable<AMD> {
    return this.http.get<AMD>(`http://localhost:3000/Armado_De_Pc/AMD`);
  }

  //?-----------------------------------------------------------------------------INTEL:

  public DatosProductosINTEL(): Observable<INTEL> {
    return this.http.get<INTEL>(`http://localhost:3000/Armado_De_Pc/INTEL`);
  }

  //*---------------------------------------------------------------------------Imagen_Armar_Pc:

  public ObtenerImagenArmadoPc(name: string): Observable<string> {
    return this.http.get<string>(
      `http://localhost:3000/Armar_Pc/imagenArmado_Pc?name=${name}`
    );
  }

  //*--------------------------------------------------------------------------Precio Armado de Pc:

  public PrecioArmadoPc(): Observable<ArmadoPc[]> {
    return this.http.get<ArmadoPc[]>(`http://localhost:3000/Armado_De_Pc`);
  }

  //-------------------------------------------------NODE MAILER:

  public EnvioEmailRegistro(email: string) {
    return this.http.post(
      `http://localhost:3000/NodeMailer/EnvioEmailRegistro?email=${email}`,
      ''
    );
  }

  public EnvioEmailCompra(
    email: string,
    datosCompra: (
      | Computadoras
      | Perifericos
      | Componentes
      | Silla_Butaca
      | Monitor
    )[]
  ) {
    return this.http.post(
      `http://localhost:3000/NodeMailer/EnvioEmailCompra?email=${email}`,
      datosCompra
    );
  }
}
