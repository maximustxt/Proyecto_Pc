import mongoose from "mongoose";
//- Models:
import Favoritos from "../../Models/Model-Favorito/Favoritos";
import Usuarios from "../../Models/Model-Usuario/Usuarios";

const DeleteFavoritosComputadorasController = async (
  id: string,
  idUser: string
) => {
  try {
    const favoritoObjectId = new mongoose.Types.ObjectId(id);

    await Favoritos.findByIdAndRemove(favoritoObjectId);

    const usuario = await Usuarios.findById(idUser);
    if (usuario) {
      usuario.favoritos = usuario.favoritos.filter(
        (favId) => favId.toString() !== favoritoObjectId.toString() // me parece que se repite porque no filtraba por el id.
      );
      await usuario.save();
    } else {
      throw new Error("Usuario no existente");
    }

    const FavoritosDelUsuario = await Usuarios.findById(idUser).populate(
      "favoritos"
    );

    const uniqueItems = FavoritosDelUsuario?.favoritos.filter(
      (item, index, self) => {
        const currentIndex = self.findIndex(
          (t) => t._id.toString() === item._id.toString()
        );
        return currentIndex === index;
      }
    );

    return uniqueItems;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default DeleteFavoritosComputadorasController;
