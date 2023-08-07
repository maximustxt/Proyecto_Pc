export interface Periferico {
  _id: string;
  name: string;
  Imagen: string;
  PrecioUnitario: number;
  Contador: number;
  Tipo: string;
  Imagenes: string[];
  Descripcion: string;
  Marca: string;
  Precio: number;
  Stock: number;
  IdCarrusel?: string;
  Identificador: string;
  Destacado: boolean;
  TipoDeConexion: string;
}
