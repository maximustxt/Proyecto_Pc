import { Schema, model } from "mongoose";
//- Interface:
import { UsuarioFav } from "../../interfaces/InterfaceModelos/interfaces.modelos";

//- Modelo Usuarios:
const Usuarios = new Schema<UsuarioFav>({
  name: { type: String, required: true, unique: true },
  email: { type: String, requied: true, unique: true },
  password: { type: String, required: true, unique: true },
  favoritos: [{ type: Schema.Types.ObjectId, ref: "Favoritos" }], // todo los favoritos del usuario.
  carrito: [{ type: Schema.Types.ObjectId, ref: "Carrito" }], // todo los carritos del usuario.
  armarpc: [{ type: Schema.Types.ObjectId, ref: "Armar_Pc" }],
});

export default model("Usuarios", Usuarios);
