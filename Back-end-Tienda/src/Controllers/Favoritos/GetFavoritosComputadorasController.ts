import Usuarios from "../../Models/Model-Usuario/Usuarios";
//- Interfaces:

const GetFavoritosComputadorasController = async (idUser: string) => {
  try {
    const FavoritosDelUsuario = await Usuarios.findById(idUser).populate(
      "favoritos"
    );

    return FavoritosDelUsuario?.favoritos;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default GetFavoritosComputadorasController;
