//- Modelos:
import Usuarios from "../../Models/Model-Usuario/Usuarios";
import Carrito from "../../Models/Modelo-Carrito/Carrito";
//- mongoose:
import mongoose from "mongoose";

const DeleteCarritoController = async (id: string, idUser: string) => {
  try {
    // Convertimos los ids en tipo ObjectID de mongoose.
    const carritoObjectId = new mongoose.Types.ObjectId(id);
    const usuarioObjectId = new mongoose.Types.ObjectId(idUser);

    // Eliminamos el carrito de la base de datos.
    await Carrito.findByIdAndRemove(carritoObjectId);

    // Buscamos el usuario.
    const usuario = await Usuarios.findById(usuarioObjectId);

    if (usuario) {
      // Filtramos el carrito del usuario y eliminamos el carrito deseado.
      usuario.carrito = usuario.carrito.filter(
        (carritoId) => carritoId.toString() !== carritoObjectId.toString()
      );
      await usuario.save();
    } else {
      throw new Error("Usuario no existente");
    }

    // Actualizamos el carrito del usuario después de eliminar el carrito deseado.
    const usuarioActualizado = await Usuarios.findById(idUser).populate(
      "carrito"
    );

    return usuarioActualizado?.carrito;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default DeleteCarritoController;
