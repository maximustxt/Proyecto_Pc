import { Schema, model } from "mongoose";
//-interfaces:
import { FavoritosUser } from "../../interfaces/InterfaceModelos/interfaces.modelos";

//- Modelo Favoritos:
const Favoritos = new Schema<FavoritosUser>({
  name: { type: String, required: false },
  Imagen: { type: String, required: true, unique: true },
  Procesador: {
    type: String,
    required: false,
  },
  Imagenes: { type: [String], required: true },
  PrecioUnitario: { type: Number, required: true },
  MemoriaRam: { type: String, required: false },
  Descripcion: { type: String, required: true },
  Categorias: { type: String, required: false },
  PlacaDeVideo: { type: String, required: false },
  Marca: { type: String, required: true },
  SistemaOperativo: { type: String, required: false },
  DiscoDuro: { type: String, required: false },
  Precio: { type: Number, required: true },
  Stock: { type: Number, required: true },
  Destacado: { type: Boolean, required: true },
  IdCarrusel: { type: String, required: false },
  Identificador: { type: String, required: true },
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

export default model("Favoritos", Favoritos);
