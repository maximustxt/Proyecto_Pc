import mongoose from "mongoose";
//- Model:
import Usuarios from "../../Models/Model-Usuario/Usuarios";
//- Interfaces:
import { Carritos } from "../../interfaces/InterfacesCarrito/InterfacesCarrito";
import { UsuarioFav } from "../../interfaces/InterfaceModelos/interfaces.modelos";

const PutContadorComputadora = async (
  id: string,
  idUser: string,
  valor: number,
  ValorDetailCarrito: number
) => {
  try {
    const carritoId = new mongoose.Types.ObjectId(id);

    // Buscar el usuario por ID y cargar el carrito
    const usuario: any = await Usuarios.findById(idUser).populate("carrito");

    if (!usuario) {
      throw new Error("El usuario no existe.");
    }

    // Encontrar el producto en el carrito por su ID
    const producto: any = usuario.carrito.find((item: any) =>
      item._id.equals(carritoId)
    );

    if (!producto) {
      throw new Error("El producto no existe en el carrito.");
    }

    // CALCULO MATEMATICO  PRECIO = PRECIO BASE * CONTADOR.

    if (ValorDetailCarrito) {
      producto.Contador = ValorDetailCarrito;
      // Guardar los cambios en la base de datos , para que me funcionara debo guardar el nuevo producto modificado en la base de datos para de esta manera modificarlo.
      await producto.save();
    }

    if (producto.Contador === 1) {
      producto.Precio = producto.PrecioUnitario;
    }
    if (valor === 1 && producto.Contador !== producto.Stock) {
      // Incrementar el contador del producto
      producto.Contador += 1;
      producto.Precio = producto.PrecioUnitario * producto.Contador;
    } else if (valor === -1 && producto.Contador > 1) {
      // Decrementar el contador del producto
      producto.Contador -= 1;
      producto.Precio = producto.PrecioUnitario * producto.Contador;
    }

    // Guardar los cambios en la base de datos , para que me funcionara debo guardar el nuevo producto modificado en la base de datos para de esta manera modificarlo.
    await producto.save();

    const uniqueItems = usuario.carrito.filter(
      (item: Carritos, index: number, self: Carritos[]) =>
        index === self.findIndex((t: Carritos) => t === item)
    );

    return uniqueItems; // Retorna el carrito actualizado
  } catch (error: any) {
    throw new Error(error);
  }
};

export default PutContadorComputadora;
