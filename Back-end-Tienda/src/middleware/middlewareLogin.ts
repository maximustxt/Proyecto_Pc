import { Request, Response, NextFunction } from "express";
//- Interfaces :
import { Usuario } from "../interfaces/InterfacesUsuarios/interfacesUsuarios";

const MiddlewareLogin = (req: Request, res: Response, next: NextFunction) => {
  // aca vamos a verificar si los datos que traen el post de usuario esta completos, si lo estan hacemos el next().
  // de lo contrario tiramos un error.

  const InformacionUsuario: Usuario = req.body;
  const { email, name, password } = InformacionUsuario;

  if (email.length || name.length || password.length) {
    next();
  } else {
    res.status(400).json({ error: "Faltan Datos Del Usuario" });
  }
};

export default MiddlewareLogin;
