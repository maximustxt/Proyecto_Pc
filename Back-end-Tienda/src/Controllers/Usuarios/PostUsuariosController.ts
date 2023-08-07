//- Modelo Usuarios :
import Usuarios from "../../Models/Model-Usuario/Usuarios";
//- Interfaces:
import { Usuario } from "../../interfaces/InterfacesUsuarios/interfacesUsuarios";

const PostUsuariosController = async (datosUser: Usuario) => {
  //  await Usuarios.deleteMany({}); // Elimina todos los documentos de la colección "Usuarios"

  try {
    const existingUser = await Usuarios.findOne({
      $or: [
        { name: datosUser.name },
        { email: datosUser.email },
        { password: datosUser.password },
      ],
    });
    if (existingUser) {
      throw new Error("El usuario ya existe");
    } else {
      const PosteoDeUsuario = new Usuarios(datosUser);
      await PosteoDeUsuario.save();
      return "Usuario Posteado";
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default PostUsuariosController;
