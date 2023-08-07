//- Model:
import Usuarios from "../../Models/Model-Usuario/Usuarios";

const DeleteUserLogoutControllers = async (email: string) => {
  try {
    const usuario = await Usuarios.findOneAndDelete({ email });
    if (!usuario) {
      throw new Error("El usuario no fue encontrado en la base de datos.");
    } else {
      return "Usuario eliminado con éxito";
    }
  } catch (error: any) {
    throw new Error(error);
  }
};

export default DeleteUserLogoutControllers;
