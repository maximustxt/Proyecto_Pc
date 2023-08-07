import { Schema, model } from "mongoose";
//- Interfaces:
import { ArmadoPc } from "../../interfaces/InterfaceModelos/interfaces.modelos";

const Armado_Pcs = new Schema<ArmadoPc>({
  name: { type: String, required: true },
  Imagen: { type: String, required: true },
  Precio: { type: Number, required: true },
  Identificador: { type: String, required: true },
  Descripcion: { type: String, required: true },
  Contador: { type: Number, required: true },
});

export default model("ArmadoPc", Armado_Pcs);
