export interface ComputadoraFavorito {
  _id: string;
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

  //------------------Perifericos:

  TipoDeConexion?: string;
  Tipo?: string;

  //-------------------Componentes:

  TipoRam?: string; // el ? es porque es un campo opcional.
  Compatibilidad?: string; // el ? es porque es un campo opcional.
  Disipacion?: string; // el ? es porque es un campo opcional.
  FactorDeForm?: string; // el ? es porque es un campo opcional.

  //----------------------------------------------------//
}
