import { Router } from "express";
//- Interface:
import { Computadora } from "../../interfaces/InterfacesComputadoras/InterfacesComputadoras";
//- Controllers:
import GetComputadorasController from "../../Controllers/Computadoras/GetComputadorasController";
import PostComputadorasController from "../../Controllers/Computadoras/PostComputadorasController";
import GetDetailComputadorasController from "../../Controllers/Computadoras/GetDetailComputadorasController";
//- Controllers Filters:
import GetFiltro_Marca_ComputadorasComponenteController from "../../Controllers/Computadoras/Filtros/GetFiltro_Marca_ComputadorasComponenteController";
import GetFiltro_Categoria_ComputadorasControllers from "../../Controllers/Computadoras/Filtros/GetFiltro_Categoria_ComputadorasControllers";
import GetFiltro_Disco_Duro_ComputadorasControllers from "../../Controllers/Computadoras/Filtros/GetFiltro_Disco_Duro_ComputadorasControllers";
import GetFiltro_Placa_De_Video_ComputadorasControllers from "../../Controllers/Computadoras/Filtros/GetFiltro_Placa_De_Video_ComputadorasControllers";
import GetFiltro_Memoria_Ram_ComputadorasControllers from "../../Controllers/Computadoras/Filtros/GetFiltro_Memoria_Ram_ComputadorasControllers";
//- HandleError:
import HandleHttpError from "../../utils/Error.handle";
//- instancia:
const Computadoras = Router();

//*-----------------------------Detail---------------------------------*//

Computadoras.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const respuesta = await GetDetailComputadorasController(id);
    res.status(200).json(respuesta);
  } catch (error: any) {
    HandleHttpError(res, error.message);
  }
});

//*-----------------------------All---------------------------------*//

Computadoras.get("/", async (req, res) => {
  try {
    const respuesta = await GetComputadorasController();
    res.status(200).json(respuesta);
  } catch (error: any) {
    HandleHttpError(res, error.message);
  }
});

//*----------------------------Post----------------------------------*//

Computadoras.post("/", async (req, res) => {
  try {
    const InformacionPC: Computadora = req.body;
    const respuesta = await PostComputadorasController(InformacionPC);
    res.status(200).json(respuesta);
  } catch (error: any) {
    HandleHttpError(res, error.message);
  }
});

//*------------------------------------Filtro Marca----------------------------------------*//

Computadoras.get("/FiltrosMarca/:Marca", async (req, res) => {
  try {
    const { Marca } = req.params;
    const respuesta = await GetFiltro_Marca_ComputadorasComponenteController(
      Marca
    );
    res.status(200).json(respuesta);
  } catch (error: any) {
    HandleHttpError(res, error.message);
  }
});

//*------------------------------------Filtro Categorias----------------------------------------*//

Computadoras.get("/FiltrosCategoria/:Categoria", async (req, res) => {
  try {
    const { Categoria } = req.params;
    const respuesta = await GetFiltro_Categoria_ComputadorasControllers(
      Categoria
    );
    res.status(200).json(respuesta);
  } catch (error: any) {
    HandleHttpError(res, error.message);
  }
});

//*------------------------------------Filtro Disco Duro----------------------------------------*//

Computadoras.get("/FiltroDiscoDuro/:Disco_Duro", async (req, res) => {
  try {
    const { Disco_Duro } = req.params;
    const respuesta = await GetFiltro_Disco_Duro_ComputadorasControllers(
      Disco_Duro
    );
    res.status(200).json(respuesta);
  } catch (error: any) {
    HandleHttpError(res, error.message);
  }
});

//*------------------------------------Filtro Placa de Video----------------------------------------*//

Computadoras.get("/FiltroPlacaDeVideo/:Placa_De_Video", async (req, res) => {
  try {
    const { Placa_De_Video } = req.params;
    const respuesta = await GetFiltro_Placa_De_Video_ComputadorasControllers(
      Placa_De_Video
    );
    res.status(200).json(respuesta);
  } catch (error: any) {
    HandleHttpError(res, error.message);
  }
});

//*------------------------------------Filtro Memoria Ram----------------------------------------*//

Computadoras.get("/FiltroMemoriaRam/:Memoria_Ram", async (req, res) => {
  try {
    const { Memoria_Ram } = req.params;
    const respuesta = await GetFiltro_Memoria_Ram_ComputadorasControllers(
      Memoria_Ram
    );
    res.status(200).json(respuesta);
  } catch (error: any) {
    HandleHttpError(res, error.message);
  }
});

export default Computadoras;
