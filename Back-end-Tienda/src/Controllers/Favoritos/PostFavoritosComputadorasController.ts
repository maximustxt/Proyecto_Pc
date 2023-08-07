//- Models:
import mongoose from "mongoose";
import Favoritos from "../../Models/Model-Favorito/Favoritos";
import Usuarios from "../../Models/Model-Usuario/Usuarios";
//- Interfaces:
import { ComputadoraFavorito } from "../../interfaces/InterfacesFavoritos/InterfacesFavoritos";

const PostFavoritosComputadorasController = async (
  Computadora: ComputadoraFavorito,
  idUser: string
) => {
  try {
    const FavoritosDelUsuario = await Usuarios.findById(idUser).populate(
      "favoritos"
    );

    const Favorito: mongoose.Types.ObjectId | undefined =
      FavoritosDelUsuario?.favoritos.find(
        (e: any) => e.Imagen === Computadora.Imagen
      );

    if (Favorito) {
      throw new Error("Favorito ya Creado");
    } else {
      const PostearFavorito = new Favoritos(Computadora);
      await PostearFavorito.save();
      const usuario = await Usuarios.findById(idUser);
      if (usuario) {
        usuario.favoritos.push(PostearFavorito._id); // le paso el id del Favorito al array de Favoritos del model usuario.
        await usuario.save(); // lo creo.
      } else {
        throw new Error("Usuario inexistente");
      }

      return "Favorito Posteado";
    }
  } catch (error: any) {
    throw new Error("No se pudo postear el favorito: " + error.message);
  }
};

export default PostFavoritosComputadorasController;
