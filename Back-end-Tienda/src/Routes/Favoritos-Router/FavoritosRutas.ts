import { Router } from "express";
//- Interfaces:
import { ComputadoraFavorito } from "../../interfaces/InterfacesFavoritos/InterfacesFavoritos";
//- Controllers:
import GetFavoritosComputadorasController from "../../Controllers/Favoritos/GetFavoritosComputadorasController";
import DeleteFavoritosComputadorasController from "../../Controllers/Favoritos/DeleteFavoritosComputadorasController";
import PostFavoritosComputadorasController from "../../Controllers/Favoritos/PostFavoritosComputadorasController";
//- HandleError:
import HandleHttpError from "../../utils/Error.handle";
//- Middleware:
import MiddlewareFavoritos from "../../middleware/MiddlewareFavoritos";
//- Intacia:
const Favoritos = Router();

//*-----------------------------All---------------------------------*//

Favoritos.get("/:idUser", async (req, res) => {
  try {
    const { idUser } = req.params;
    const respuesta = await GetFavoritosComputadorasController(idUser);
    res.status(200).json(respuesta);
  } catch (error: any) {
    HandleHttpError(res, error.message);
  }
});
//*-----------------------------Delete---------------------------------*//

Favoritos.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const idUser = req.query.idUser as string;
    const respuesta = await DeleteFavoritosComputadorasController(id, idUser);
    res.status(200).json(respuesta);
  } catch (error: any) {
    HandleHttpError(res, error.message);
  }
});

//*-----------------------------Post---------------------------------*//

Favoritos.post("/", async (req, res) => {
  try {
    const idUser = req.query.idUser as string;
    const Computadora: ComputadoraFavorito = req.body;
    const respuesta = await PostFavoritosComputadorasController(
      Computadora,
      idUser
    );
    res.status(200).json(respuesta);
  } catch (error: any) {
    HandleHttpError(res, error.message);
  }
});

export default Favoritos;
