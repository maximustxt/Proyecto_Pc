import { Router } from "express";
//- Controllers:
import GetControllerPerifericos from "../../Controllers/Perifericos/GetControllerPerifericos";
import PostControllerPerifericos from "../../Controllers/Perifericos/PostControllerPerifericos";
import GetDetailControllerPerifericos from "../../Controllers/Perifericos/GetDetailControllerPerifericos";
//- Controllers Filters:
import GetFiltroTipo_De_Conexion_PerifericoController from "../../Controllers/Perifericos/Filtros/GetFiltroTipo_De_Conexion_PerifericoController";
import GetFiltroTipoPerifericoControllers from "../../Controllers/Perifericos/Filtros/GetFiltroTipoPerifericoControllers";
import GetFiltroMarcaPerifericoController from "../../Controllers/Perifericos/Filtros/GetFiltroMarcaPerifericoController";
//- HandlerError:
import HandleHttpError from "../../utils/Error.handle";
//- Instance:
const Periferico = Router();

//*----------------------------------------All--------------------------------------*//

Periferico.get("/", async (req, res) => {
  try {
    const response = await GetControllerPerifericos();
    res.status(200).json(response);
  } catch (error: any) {
    HandleHttpError(res, error);
  }
});

//*----------------------------------------Detail--------------------------------------*//

Periferico.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await GetDetailControllerPerifericos(id);
    res.status(200).json(response);
  } catch (error: any) {
    HandleHttpError(res, error);
  }
});

//*--------------------------------------Post---------------------------------------*//

Periferico.post("/", async (req, res) => {
  try {
    const InfoPeriferico = req.body;
    const response = await PostControllerPerifericos(InfoPeriferico);
    res.status(200).json(response);
  } catch (error: any) {
    HandleHttpError(res, error);
  }
});

//*------------------------------------Filtro Marca----------------------------------------*//

Periferico.get("/Marcas_Perifericos/:Marca", async (req, res) => {
  try {
    const { Marca } = req.params;
    const respuesta = await GetFiltroMarcaPerifericoController(Marca);
    res.status(200).json(respuesta);
  } catch (error: any) {
    HandleHttpError(res, error.message);
  }
});

//*------------------------------------Filtro Tipos----------------------------------------*//

Periferico.get("/Tipo_Perifericos/:Tipo", async (req, res) => {
  try {
    const { Tipo } = req.params;
    const respuesta = await GetFiltroTipoPerifericoControllers(Tipo);
    res.status(200).json(respuesta);
  } catch (error: any) {
    HandleHttpError(res, error.message);
  }
});

//*------------------------------------Filtro Tamaño Gabinete----------------------------------------*//

Periferico.get(
  "/Tipo_De_Conexion_Perifericos/:Tipo_De_Conexion",
  async (req, res) => {
    try {
      const { Tipo_De_Conexion } = req.params;
      const respuesta = await GetFiltroTipo_De_Conexion_PerifericoController(
        Tipo_De_Conexion
      );
      res.status(200).json(respuesta);
    } catch (error: any) {
      HandleHttpError(res, error.message);
    }
  }
);

export default Periferico;
