import { Router } from "express";
//- Controllers:
import GetDetailControllerSillas_Butacas from "../../Controllers/Sillas_Butacas/GetDetailControllerSillas_Butacas";
import PostControllerSillas_Butacas from "../../Controllers/Sillas_Butacas/PostControllerSillas_Butacas";
import GetControllerSillas_Butacas from "../../Controllers/Sillas_Butacas/GetControllerSillas_Butacas";
//- Controllers Filters:
import GetFiltroMarcaController from "../../Controllers/Sillas_Butacas/Filtros/GetFiltroMarcaController";
//- HandlerError:
import HandleHttpError from "../../utils/Error.handle";
//- Instance:
const Sillas_Butacas = Router();

//*----------------------------------------All--------------------------------------*//

Sillas_Butacas.get("/", async (req, res) => {
  try {
    const response = await GetControllerSillas_Butacas();
    res.status(200).json(response);
  } catch (error: any) {
    HandleHttpError(res, error);
  }
});

//*----------------------------------------Detail--------------------------------------*//

Sillas_Butacas.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await GetDetailControllerSillas_Butacas(id);
    res.status(200).json(response);
  } catch (error: any) {
    HandleHttpError(res, error);
  }
});

//*--------------------------------------Post---------------------------------------*//

Sillas_Butacas.post("/", async (req, res) => {
  try {
    const InfoSillas_Butacas = req.body;
    const response = await PostControllerSillas_Butacas(InfoSillas_Butacas);
    res.status(200).json(response);
  } catch (error: any) {
    HandleHttpError(res, error);
  }
});

//*------------------------------------Filtro Marca----------------------------------------*//
Sillas_Butacas.get("/FiltrosMarca/:Marca", async (req, res) => {
  try {
    const { Marca } = req.params;
    const respuesta = await GetFiltroMarcaController(Marca);
    res.status(200).json(respuesta);
  } catch (error: any) {
    HandleHttpError(res, error.message);
  }
});

export default Sillas_Butacas;
