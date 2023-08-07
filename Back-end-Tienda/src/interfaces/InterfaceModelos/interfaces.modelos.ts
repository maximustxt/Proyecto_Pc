import mongoose, { Schema } from "mongoose";

export interface UsuarioFav {
  _id: string;
  name: string;
  email: string;
  password: string;
  favoritos: Array<mongoose.Types.ObjectId>;
  carrito: Array<mongoose.Types.ObjectId>;
  armarpc: Array<mongoose.Types.ObjectId>;
}

export interface FavoritosUser {
  name: string;
  Imagen: string;
  Imagenes: string[];
  Procesador: string;
  PrecioUnitario: number;
  MemoriaRam?: string;
  Categorias?: string;
  Marca: string;
  PlacaDeVideo?: string;
  DiscoDuro?: string;
  SistemaOperativo?: string;
  Descripcion: string;
  Precio: number;
  Stock: number;
  Destacado: boolean;
  Contador: number;
  Identificador: string;
  //------------------Perifericos:

  TipoDeConexion?: string;
  Tipo?: string;
  IdCarrusel?: string;

  //-------------------Componentes:

  TipoDeChip?: string;
  TipoRam?: string; // el ? es porque es un campo opcional.
  Compatibilidad?: string; // el ? es porque es un campo opcional.
  Disipacion?: string; // el ? es porque es un campo opcional.
  FactorDeForm?: string; // el ? es porque es un campo opcional.

  //- Monitores:
  Panel?: string;

  //----------------------------------------------------//
  usuario: Array<mongoose.Types.ObjectId>;
}

export interface CarritoUser {
  name: string;
  Imagen: string;
  Imagenes?: string[];
  Procesador?: string;
  PrecioUnitario?: number;
  MemoriaRam?: string;
  Categorias?: string;
  Marca?: string;
  PlacaDeVideo?: string;
  DiscoDuro?: string;
  SistemaOperativo?: string;
  Descripcion?: string;
  Precio: number;
  Stock?: number;
  Destacado?: boolean;
  Contador?: number;
  Identificador?: string;
  //------------------Perifericos:

  TipoDeConexion?: string;
  Tipo?: string;
  IdCarrusel?: string;

  //-------------------Componentes:

  TipoDeChip?: string;
  TipoRam?: string; // el ? es porque es un campo opcional.
  Compatibilidad?: string; // el ? es porque es un campo opcional.
  Disipacion?: string; // el ? es porque es un campo opcional.
  FactorDeForm?: string; // el ? es porque es un campo opcional.

  //- Monitores:
  Panel?: string;

  //----------------------------------------------------//
  usuario: Array<mongoose.Types.ObjectId>;
}

export interface ArmadoPc {
  name: string;
  Imagen: string;
  Precio: number;
  Descripcion: string;
  Contador: number;
  Identificador: string;
}
