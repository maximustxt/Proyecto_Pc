//- Modelos:
import Perifericos from "../../Models/Model-Perifericos/Perifericos";
import Componentes from "../../Models/Model-Componetes/Componetes";
import Computadoras from "../../Models/Model-Computadoras/Computadoras";
import Sillas_Butacas from "../../Models/Model-Sillas-Butacas/Sillas-Butacas";
//- Interfaces:
import { Carritos } from "../../interfaces/InterfacesCarrito/InterfacesCarrito";

const PutuccesController = async (arrayProductos: Carritos[]) => {
  try {
    for (const productoActualizado of arrayProductos) {
      const productoId = productoActualizado._id;
      const contador = productoActualizado.Contador;

      if (productoActualizado.Stock && contador) {
        switch (productoActualizado.Identificador) {
          case "COMPUTADORAS":
            await Computadoras.findByIdAndUpdate(productoId, {
              Stock: Number(productoActualizado.Stock - contador),
            });
            break;

          case "COMPONENTES":
            await Componentes.findByIdAndUpdate(productoId, {
              Stock: Number(productoActualizado.Stock - contador),
            });
            break;

          case "PERIFERICO":
            await Perifericos.findByIdAndUpdate(productoId, {
              Stock: Number(productoActualizado.Stock - contador),
            });
            break;

          case "SILLAS_BUTACAS":
            await Sillas_Butacas.findByIdAndUpdate(productoId, {
              Stock: Number(productoActualizado.Stock - contador),
            });
            break;

          default:
            throw new Error("Identificador de producto no válido.");
        }
      }
    }
    return "Productos Actualizados";
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default PutuccesController;
