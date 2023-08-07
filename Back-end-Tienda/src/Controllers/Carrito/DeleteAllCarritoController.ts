//- Modelos:
import Usuarios from "../../Models/Model-Usuario/Usuarios";
import Carrito from "../../Models/Modelo-Carrito/Carrito";
//- mongoose:
import mongoose from "mongoose";

const DeleteAllCarritoController = async (idUser: string) => {
  try {
    // Convertimos los ids en tipo ObjectID de mongoose.
    const usuarioObjectId = new mongoose.Types.ObjectId(idUser);

    // Eliminamos el carrito de la base de datos.
    await Carrito.deleteMany();

    // Buscamos el usuario.
    const usuario = await Usuarios.findById(usuarioObjectId);

    if (usuario) {
      // Filtramos el carrito del usuario y eliminamos el carrito deseado.
      usuario.carrito = [];
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

export default DeleteAllCarritoController;
