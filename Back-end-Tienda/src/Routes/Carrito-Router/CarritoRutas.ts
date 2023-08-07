import { Router } from "express";
//- HandleError:
import HandleHttpError from "../../utils/Error.handle";
//- Controllers:
import GetCarritoController from "../../Controllers/Carrito/GetCarritoController";
import DeleteCarritoController from "../../Controllers/Carrito/DeleteCarritoController";
import PostCarritoController from "../../Controllers/Carrito/PostCarritoController";
import GetCarritoVacioController from "../../Controllers/Carrito/GetCarritoVacioController";
import DeleteAllCarritoController from "../../Controllers/Carrito/DeleteAllCarritoController";
//- Interfaces:
import { Carritos } from "../../interfaces/InterfacesCarrito/InterfacesCarrito";
//- Middleware:
import MiddlewareCarrito from "../../middleware/MiddlewareCarrito";
//- instancia:
const Carrito = Router();

//*-----------------------------All---------------------------------*//

Carrito.get("/:idUser", async (req, res) => {
  try {
    const { idUser } = req.params;
    const respuesta = await GetCarritoController(idUser);
    res.status(200).json(respuesta);
  } catch (error: any) {
    HandleHttpError(res, error.message);
  }
});
//*-----------------------------Delete---------------------------------*//

Carrito.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const idUser = req.query.idUser as string;
    const respuesta = await DeleteCarritoController(id, idUser);
    res.status(200).json(respuesta);
  } catch (error: any) {
    HandleHttpError(res, error.message);
  }
});

//*-----------------------------All Delete---------------------------------*//

Carrito.delete("/", async (req, res) => {
  try {
    const idUser = req.query.idUser as string;
    const respuesta = await DeleteAllCarritoController(idUser);
    res.status(200).json(respuesta);
  } catch (error: any) {
    HandleHttpError(res, error.message);
  }
});

//*-----------------------------Post---------------------------------*//

Carrito.post("/", async (req, res) => {
  try {
    const idUser = req.query.idUser as string;
    const ComputadoraCarrito: Carritos = req.body;
    const respuesta = await PostCarritoController(ComputadoraCarrito, idUser);
    res.status(200).json(respuesta);
  } catch (error: any) {
    HandleHttpError(res, error.message);
  }
});

//*-----------------------------Vaciar Carrito---------------------------------*//

Carrito.get("/CarritoVacio/:idUser", async (req, res) => {
  try {
    const respuesta = await GetCarritoVacioController();
    res.status(200).json(respuesta);
  } catch (error: any) {
    HandleHttpError(res, error.message);
  }
});

export default Carrito;
