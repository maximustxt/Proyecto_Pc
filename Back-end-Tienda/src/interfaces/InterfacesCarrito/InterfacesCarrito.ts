import mongoose from "mongoose";

export interface Carritos {
  _id: string;
  name: string;
  Imagen: string;
  Contador?: number;
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
  Identificador?: string;

  //------------------Perifericos:

  TipoDeConexion?: string;
  Tipo?: string;
  IdCarrusel?: string;

  //-------------------Componentes:

  TipoRam?: string; // el ? es porque es un campo opcional.
  Compatibilidad?: string; // el ? es porque es un campo opcional.
  Disipacion?: string; // el ? es porque es un campo opcional.
  FactorDeForm?: string; // el ? es porque es un campo opcional.

  //----------------------------------------------------//
}
