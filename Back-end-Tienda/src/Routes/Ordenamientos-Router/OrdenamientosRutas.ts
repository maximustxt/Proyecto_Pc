import { Router } from "express";
//- HandleError:
import HandleHttpError from "../../utils/Error.handle";
//- Controller:
import GetOrdenamientos from "../../Controllers/Ordenamientos/GetOrdenamientos";
//- Interfaces:
import { Computadora } from "../../interfaces/InterfacesComputadoras/InterfacesComputadoras";
import { Componente } from "../../interfaces/InterfacesComponetes/InterfaceComponente";
import { Periferico } from "../../interfaces/InterfacesPerifericos/InterfacePeriferico";
import { Silla_Butaca } from "../../interfaces/InterfaceSillas_Butacas/InterfaceSillas_Butacas";
import Monitor from "../../interfaces/InterfacesMonitores/Interfaces-Monitores";
//- Instance:
const Ordenamientos = Router();

//*-----------------------------------Ordenamientos---------------------------------*//

Ordenamientos.post("/", async (req, res) => {
  try {
    const Ordenamiento = req.query.Ordenamiento as string;
    const Tipo_De_Producto = req.query.Tipo_De_Producto as string;
    const Array_Productos = req.body as (
      | Computadora
      | Periferico
      | Componente
      | Silla_Butaca
      | Monitor
    )[];
    const respuesta = await GetOrdenamientos(
      Ordenamiento,
      Tipo_De_Producto,
      Array_Productos
    );
    res.status(200).json(respuesta);
  } catch (error: any) {
    HandleHttpError(res, error.message);
  }
});

export default Ordenamientos;
