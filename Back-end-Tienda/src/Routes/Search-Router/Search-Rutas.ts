import { Router } from "express";
//- Controllers:
import GetSearchController from "../../Controllers/Search/GetSearchController";
//- HandlerError:
import HandleHttpError from "../../utils/Error.handle";
//- Instance:
const Search = Router();

//*------------------------------Ruta----------------------------*//

Search.get("/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const respuesta = await GetSearchController(name);
    res.status(200).json(respuesta);
  } catch (error: any) {
    HandleHttpError(res, error);
  }
});

export default Search;
