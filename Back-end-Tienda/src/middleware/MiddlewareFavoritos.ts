import { Request, Response, NextFunction } from "express";
//- Interfaces :
import { ComputadoraFavorito } from "../interfaces/InterfacesFavoritos/InterfacesFavoritos";

const MiddlewareFavoritos = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // aca vamos a verificar si los datos que traen el post de usuario esta completos, si lo estan hacemos el next().
  // de lo contrario tiramos un error.

  const InformacionFavorito: ComputadoraFavorito = req.body;
  const {
    Imagen,
    Procesador,
    MemoriaRam,
    Categorias,
    Marca,
    DiscoDuro,
    SistemaOperativo,
    Descripcion,
    Precio,
    Stock,
    Destacado,
  } = InformacionFavorito;

  if (
    Imagen.length ||
    Procesador.length ||
    MemoriaRam?.length ||
    Marca.length ||
    Categorias?.length ||
    DiscoDuro?.length ||
    SistemaOperativo?.length ||
    Descripcion.length ||
    Precio ||
    Stock ||
    Destacado
  ) {
    next();
  } else {
    res.status(400).json({ error: "Faltan Datos Del Favorito" });
  }
};

export default MiddlewareFavoritos;
