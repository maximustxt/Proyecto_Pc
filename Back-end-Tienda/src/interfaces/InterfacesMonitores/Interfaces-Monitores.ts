export default interface Monitor {
  _id: string;
  name: string;
  Imagen: string;
  PrecioUnitario: number;
  Contador: number;
  Imagenes: string[];
  Descripcion: string;
  Marca: string;
  Precio: number;
  Stock: number;
  IdCarrusel?: string;
  Identificador: string;
  Destacado: boolean;
  Panel?: string;
}
