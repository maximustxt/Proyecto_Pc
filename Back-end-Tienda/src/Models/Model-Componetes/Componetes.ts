import { Schema, model } from "mongoose";
//-Interfaces
import { Componente } from "../../interfaces/InterfacesComponetes/InterfaceComponente";
//- Instance:
const Componetes = new Schema<Componente>({
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
  TipoDeChip: { type: String, required: false },
  TipoRam: { type: String, required: false },
  Compatibilidad: { type: String, required: false },
  Disipacion: { type: String, required: false },
  Tipo: { type: String, required: true },
  FactorDeForm: { type: String, required: false }, // required: false quiere decir que no son requeridos.
});

export default model("Componente", Componetes);
