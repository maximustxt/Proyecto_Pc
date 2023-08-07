import { Router, json } from "express";
//- Controller:
import GetControllerComponetes from "../../Controllers/Componentes/GetControllerComponetes";
import PostControllerComponentes from "../../Controllers/Componentes/PostControllerComponentes";
import GetDetailControllerComponents from "../../Controllers/Componentes/GetDetailControllerComponents";
//- Controller Filters.
import GetFiltroMarcaComponenteController from "../../Controllers/Componentes/Filtros/GetFiltroMarcaComponenteController";
import GetFiltroTipoControllers from "../../Controllers/Componentes/Filtros/GetFiltroTipoControllers";
import GetFiltroFormatoGabineteControllers from "../../Controllers/Componentes/Filtros/GetFiltroFormatoGabineteControllers";
import GetFiltroCompatibilidadControllers from "../../Controllers/Componentes/Filtros/GetFiltroCompatibilidadControllers";
//- HandleError:
import HandleHttpError from "../../utils/Error.handle";

//- Instance:
const Componentes = Router();

//*----------------------------------------All--------------------------------------*//

Componentes.get("/", async (req, res) => {
  try {
    const response = await GetControllerComponetes();
    res.status(200).json(response);
  } catch (error: any) {
    HandleHttpError(res, error);
  }
});

//*-------------------------------------Detail--------------------------------------*//

Componentes.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await GetDetailControllerComponents(id);
    res.status(200).json(response);
  } catch (error: any) {
    HandleHttpError(res, error);
  }
});
//*--------------------------------------Post---------------------------------------*//

Componentes.post("/", async (req, res) => {
  try {
    const InfoComponentes = req.body;
    const response = await PostControllerComponentes(InfoComponentes);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json({ error: error });
    // HandleHttpError(res, error);
  }
});

//*------------------------------------Filtro Marca----------------------------------------*//
Componentes.get("/FiltrosMarca/:Marca", async (req, res) => {
  try {
    const { Marca } = req.params;
    const respuesta = await GetFiltroMarcaComponenteController(Marca);
    res.status(200).json(respuesta);
  } catch (error: any) {
    HandleHttpError(res, error.message);
  }
});

//*------------------------------------Filtro Tipos----------------------------------------*//
Componentes.get("/FiltrosTipo/:Tipo", async (req, res) => {
  try {
    const { Tipo } = req.params;
    const respuesta = await GetFiltroTipoControllers(Tipo);
    res.status(200).json(respuesta);
  } catch (error: any) {
    HandleHttpError(res, error.message);
  }
});

//*------------------------------------Filtro Tamaño Gabinete----------------------------------------*//

Componentes.get("/FiltroFormaGabinete/:FormatoGabinete", async (req, res) => {
  try {
    const { FormatoGabinete } = req.params;
    const respuesta = await GetFiltroFormatoGabineteControllers(
      FormatoGabinete
    );
    res.status(200).json(respuesta);
  } catch (error: any) {
    HandleHttpError(res, error.message);
  }
});

//*------------------------------------Filtro Compatibilidad----------------------------------------*//
Componentes.get("/FiltroCompatibilidad/:Compatibilidad", async (req, res) => {
  try {
    const { Compatibilidad } = req.params;
    const respuesta = await GetFiltroCompatibilidadControllers(Compatibilidad);
    res.status(200).json(respuesta);
  } catch (error: any) {
    HandleHttpError(res, error.message);
  }
});

export default Componentes;
