import Router from "express";

//- Controllers:
import GetControllerMonitores from "../../Controllers/Monitores/GetControllerMonitores";
import GetDetailControllerMonitores from "../../Controllers/Monitores/GetDetailControllerMonitores";
import PostControllerMonitores from "../../Controllers/Monitores/PostControllerMonitores";
//- Controllers Filters:
import GetFiltroMarcaMonitoresController from "../../Controllers/Monitores/Filtros/GetFiltroMarcaMonitoresController";
import GetFiltro_Panel_Monitores_Controller from "../../Controllers/Monitores/Filtros/GetFiltro_Panel_Monitores_Controller";
//- HandleError:
import HandleHttpError from "../../utils/Error.handle";

//- Instance:
const Monitores = Router();

//*----------------------------------------All--------------------------------------*//

Monitores.get("/", async (req, res) => {
  try {
    const response = await GetControllerMonitores();
    res.status(200).json(response);
  } catch (error: any) {
    HandleHttpError(res, error);
  }
});

//*----------------------------------------Detail--------------------------------------*//

Monitores.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await GetDetailControllerMonitores(id);
    res.status(200).json(response);
  } catch (error: any) {
    HandleHttpError(res, error);
  }
});

//*--------------------------------------Post---------------------------------------*//

Monitores.post("/", async (req, res) => {
  try {
    const InfoMonitor = req.body;
    const response = await PostControllerMonitores(InfoMonitor);
    res.status(200).json(response);
  } catch (error: any) {
    HandleHttpError(res, error);
  }
});

//*------------------------------------Filtro Marca----------------------------------------*//

Monitores.get("/Marcas_Monitores/:Marca", async (req, res) => {
  try {
    const { Marca } = req.params;
    const respuesta = await GetFiltroMarcaMonitoresController(Marca);
    res.status(200).json(respuesta);
  } catch (error: any) {
    HandleHttpError(res, error.message);
  }
});

//*------------------------------------Filtro Panel----------------------------------------*//

Monitores.get("/Panel_Monitores/:Panel", async (req, res) => {
  try {
    const { Panel } = req.params;
    const respuesta = await GetFiltro_Panel_Monitores_Controller(Panel);
    res.status(200).json(respuesta);
  } catch (error: any) {
    HandleHttpError(res, error.message);
  }
});

export default Monitores;
