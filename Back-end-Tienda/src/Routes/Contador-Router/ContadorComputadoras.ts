import { Router } from "express";
//- Controllers:
import PutContadorComputadora from "../../Controllers/Contador/PutContadorComputadora";
import PrecioTotalController from "../../Controllers/Contador/PrecioTotalController";
import GetContadorNavBarCarrito from "../../Controllers/Contador/GetContadorNavBarCarrito";
//- Handle Error:
import HandleHttpError from "../../utils/Error.handle";
//- Instancia:
const ContadorComputadora = Router();

//*------------------------------Put Precio---------------------------------*//

ContadorComputadora.get("/PrecioTotal/:idUser", async (req, res) => {
  try {
    const { idUser } = req.params;
    const respuesta = await PrecioTotalController(idUser);
    res.status(200).json(respuesta);
  } catch (error: any) {
    HandleHttpError(res, error.message);
  }
});

//*-----------------------------Put Contador--------------------------------*//

ContadorComputadora.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const valor = req.query.valor;
    const ValorDetailCarrito = req.query.ValorDetailCarrito;
    const { idUser } = req.body;
    const respuesta = await PutContadorComputadora(
      id,
      idUser,
      Number(valor),
      Number(ValorDetailCarrito)
    );
    res.status(200).json(respuesta);
  } catch (error: any) {
    HandleHttpError(res, error.message);
  }
});

//*------------------------------Put Precio---------------------------------*//

ContadorComputadora.get("/:idUser", async (req, res) => {
  try {
    const { idUser } = req.params;
    const respuesta = await GetContadorNavBarCarrito(idUser);
    res.status(200).json(respuesta);
  } catch (error: any) {
    HandleHttpError(res, error.message);
  }
});

export default ContadorComputadora;
