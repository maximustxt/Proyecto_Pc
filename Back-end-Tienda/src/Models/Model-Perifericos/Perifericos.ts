import { Schema, model } from "mongoose";
//- Interface:
import { Periferico } from "../../interfaces/InterfacesPerifericos/InterfacePeriferico";
//- Instance:
const Perifericos = new Schema<Periferico>({
  name: { type: String, required: true },
  Imagen: { type: String, required: true, unique: true },
  PrecioUnitario: { type: Number, required: true },
  Contador: { type: Number, required: true },
  Imagenes: { type: [String], required: true },
  Descripcion: { type: String, required: true },
  Marca: { type: String, required: true },
  Precio: { type: Number, required: true },
  Tipo: { type: String, required: true },
  Stock: { type: Number, required: true },
  IdCarrusel: { type: String, required: false },
  Identificador: { type: String, required: true },
  Destacado: { type: Boolean, required: true },
  TipoDeConexion: { type: String, required: true },
});

export default model("Periferico", Perifericos);
