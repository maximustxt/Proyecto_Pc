//- Model Usuario:
import Usuarios from "../../Models/Model-Usuario/Usuarios";

const GetUserController = async (email: string) => {
  //await Usuarios.deleteMany({}); // Elimina todos los documentos de la colección "Usuarios"
  try {
    const UsuarioEncontrado = await Usuarios.findOne({ email });

    if (UsuarioEncontrado && UsuarioEncontrado.name) {
      const { name, email, _id } = UsuarioEncontrado;
      return { name, email, _id };
    } else {
      throw new Error("Debes registrarte para poder iniciar Sesion");
    }
  } catch (error: any) {
    throw new Error(error);
  }
};

export default GetUserController;
