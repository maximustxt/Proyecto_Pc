import mongoose from "mongoose";
import Usuarios from "../../Models/Model-Usuario/Usuarios";
//- Interfaces:
import { Carritos } from "../../interfaces/InterfacesCarrito/InterfacesCarrito";

const PrecioTotalController = async (idUser: string) => {
  try {
    // buscamos el id del usuario , lo encontramos , buscamos sus carritos , recorremos el carrito y guardamos en una constante el valor totoal del precio de cada producto , luego lo retornamos

    const CarritoDelUsuario = await Usuarios.findById(idUser).populate(
      "carrito"
    );

    if (!CarritoDelUsuario) {
      throw new Error("El usuario no existe o no tiene carrito.");
    }

    const arrayCarrito: any = CarritoDelUsuario?.carrito;

    const PrecioTotal: number = arrayCarrito.reduce(
      (acu: number, item: Carritos) => {
        return (acu = acu + item.Precio);
      },
      0
    );

    return PrecioTotal;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default PrecioTotalController;
