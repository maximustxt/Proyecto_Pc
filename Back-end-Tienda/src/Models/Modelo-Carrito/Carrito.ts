import { Schema, model } from "mongoose";
//- Interfaces:
import { CarritoUser } from "../../interfaces/InterfaceModelos/interfaces.modelos";

const Carrito = new Schema<CarritoUser>({
  name: { type: String, required: false, unique: false },
  Imagen: { type: String, required: true, unique: true },
  Procesador: {
    type: String,
    required: false,
  },
  Contador: { type: Number, required: false },
  Imagenes: { type: [String], required: false },
  PrecioUnitario: { type: Number, required: false },
  MemoriaRam: { type: String, required: false },
  Descripcion: { type: String, required: false },
  Categorias: { type: String, required: false },
  PlacaDeVideo: { type: String, required: false },
  Marca: { type: String, required: false },
  SistemaOperativo: { type: String, required: false },
  DiscoDuro: { type: String, required: false },
  Precio: { type: Number, required: true },
  Stock: { type: Number, required: false },
  Destacado: { type: Boolean, required: false },
  IdCarrusel: { type: String, required: false },
  Identificador: { type: String, required: false },
  //------------------Componentes:

  TipoRam: { type: String, required: false },
  Compatibilidad: { type: String, required: false },
  Disipacion: { type: String, required: false },
  Tipo: { type: String, required: false },
  FactorDeForm: { type: String, required: false }, // required: false quiere decir que no son requeridos.

  //-----------------Perifericos:
  TipoDeConexion: { type: String, required: false },

  //--------------------------------------------------------------------------------------------------------------------------//
  usuario: [{ type: Schema.Types.ObjectId, ref: "Usuarios" }],
});

export default model("Carrito", Carrito);
