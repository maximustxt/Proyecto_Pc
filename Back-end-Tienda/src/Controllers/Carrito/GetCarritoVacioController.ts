//- Modelos:
import Carrito from "../../Models/Modelo-Carrito/Carrito";

const GetCarritoVacioController = async () => {
  try {
    await Carrito.deleteMany({});
    return [];
  } catch (error: any) {
    throw new Error(error);
  }
};

export default GetCarritoVacioController;
