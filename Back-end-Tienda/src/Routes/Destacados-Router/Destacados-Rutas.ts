import { Router } from "express";
//- Controllers:
import GetDestacadosController from "../../Controllers/Destacados/GetDestacadosController";
//- HandleError :
import HandleHttpError from "../../utils/Error.handle";
//- Intance:
const Destacados = Router();

//*--------------------------------------Rutas-----------------------------------*//
Destacados.get("/", async (req, res) => {
  try {
    const respuesta = await GetDestacadosController();
    res.status(200).json(respuesta);
  } catch (error: any) {
    HandleHttpError(res, error.message);
  }
});

export default Destacados;
