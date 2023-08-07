import { Schema, model } from "mongoose";
//- Interface:
import Monitor from "../../interfaces/InterfacesMonitores/Interfaces-Monitores";

const Monitores = new Schema<Monitor>({
  name: { type: String, required: true },
  Imagen: { type: String, required: true, unique: true },
  PrecioUnitario: { type: Number, required: true },
  Contador: { type: Number, required: true },
  Imagenes: { type: [String], required: true },
  Descripcion: { type: String, required: true },
  Marca: { type: String, required: true },
  Precio: { type: Number, required: true },
  Stock: { type: Number, required: true },
  IdCarrusel: { type: String, required: false },
  Identificador: { type: String, required: true },
  Destacado: { type: Boolean, required: true },
  Panel: { type: String, required: false },
});

export default model("Monitores", Monitores);
