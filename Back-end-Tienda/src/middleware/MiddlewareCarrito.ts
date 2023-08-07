import { Request, Response, NextFunction } from "express";
//- Interfaces :
import { Carritos } from "../interfaces/InterfacesCarrito/InterfacesCarrito";

const MiddlewareCarrito = (req: Request, res: Response, next: NextFunction) => {
  // aca vamos a verificar si los datos que traen el post de usuario esta completos, si lo estan hacemos el next().
  // de lo contrario tiramos un error.

  const InformacionCarrito: Carritos = req.body;
  const { Imagen, Precio, Stock, Destacado } = InformacionCarrito;

  if (Imagen.length || Precio || Stock || Destacado) {
    next();
  } else {
    res.status(400).json({ error: "Faltan Datos Del Carrito" });
  }
};

export default MiddlewareCarrito;
