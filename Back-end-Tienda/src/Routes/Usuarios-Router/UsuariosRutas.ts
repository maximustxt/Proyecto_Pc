import { Router } from "express";
//- Controllers:
import GetUserController from "../../Controllers/Usuarios/GetUserController";
import PostUsuariosController from "../../Controllers/Usuarios/PostUsuariosController";
import DeleteUserLogoutControllers from "../../Controllers/Usuarios/DeleteUserLogoutControllers";
//- Interfaces:
import { Usuario } from "../../interfaces/InterfacesUsuarios/interfacesUsuarios";
//- HandleError:
import HandleHttpError from "../../utils/Error.handle";
//- Milddware:
import MiddlewareLogin from "../../middleware/middlewareLogin";
//- Intancia:
const Usuarios = Router();

//*-----------------------------All---------------------------------*//

Usuarios.get("/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const respuesta = await GetUserController(email as string);
    res.status(200).json(respuesta);
  } catch (error: any) {
    HandleHttpError(res, error.message);
  }
});

//*-----------------------------Logout---------------------------------*//

Usuarios.delete("/Logout/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const respuesta = await DeleteUserLogoutControllers(email as string);
    res.status(200).json(respuesta);
  } catch (error: any) {
    HandleHttpError(res, error.message);
  }
});

//*----------------------------Post----------------------------------*//

Usuarios.post("/Registro", MiddlewareLogin, async (req, res) => {
  try {
    const InformacionUsuario: Usuario = req.body;
    const { email, name, password } = InformacionUsuario;
    const respuesta = await PostUsuariosController({ email, name, password });
    res.status(200).json(respuesta);
  } catch (error: any) {
    HandleHttpError(res, error.message);
  }
});

export default Usuarios;
