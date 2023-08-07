import mongoose from "mongoose";

export interface Computadora {
  name: string;
  Imagen: string;
  Contador: number;
  PrecioUnitario: number;
  Imagenes: string[];
  Procesador: string;
  MemoriaRam: string;
  Categorias: string;
  Marca: string;
  PlacaDeVideo: string;
  DiscoDuro: string;
  SistemaOperativo: string;
  Descripcion: string;
  Precio: number;
  Stock: number;
  Identificador: string;
  Destacado: boolean;
  favoritos: Array<mongoose.Types.ObjectId>;
}
