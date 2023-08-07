//- Manejador de Errores:
import { Response } from "express";

const HandleHttpError = (res: Response, error: any) => {
  res.status(500);
  res.json(error);
};

export default HandleHttpError;
