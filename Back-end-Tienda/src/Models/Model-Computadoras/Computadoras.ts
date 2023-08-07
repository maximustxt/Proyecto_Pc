import { Schema, model } from "mongoose"; // importamos mongoose para crear la conexion a la DB.
//- interfaces :
import { Computadora } from "../../interfaces/InterfacesComputadoras/InterfacesComputadoras";

//- Modelo Computadora:

//* Marca ===> (Acer , Dell , etc..)
//* Procesador ===> (Intel , Amd)
//* Tamaño de Disco ==> (1tb , 240gb , 500gb , 2tb)
//* Memoria Ram ===> ( 4gb , 8gb , 16gb )
//* Placa de Video ==> (Integrada , Dedicada)
//* Sistema Operativo ==> (Ninguno , Windows 10 , Linux  , ios , Free dos.)
//* Categorias ==> (PC Intel , PC Amd)

const Computadoras = new Schema<Computadora>({
  name: { type: String, required: true },
  Imagen: { type: String, required: true, unique: true },
  Procesador: {
    type: String,
    required: true,
  },
  PrecioUnitario: { type: Number, required: true },
  Contador: { type: Number, required: true },
  Imagenes: { type: [String], required: true },
  MemoriaRam: { type: String, required: true },
  Descripcion: { type: String, required: true },
  Categorias: { type: String, required: true },
  PlacaDeVideo: { type: String, required: true },
  Marca: { type: String, required: true },
  SistemaOperativo: { type: String, required: true },
  DiscoDuro: { type: String, required: true },
  Precio: { type: Number, required: true },
  Stock: { type: Number, required: true },
  Identificador: { type: String, required: true },
  Destacado: { type: Boolean, required: true },
  favoritos: [{ type: Schema.Types.ObjectId, ref: "Favoritos" }],
});

export default model("Computadoras", Computadoras);
