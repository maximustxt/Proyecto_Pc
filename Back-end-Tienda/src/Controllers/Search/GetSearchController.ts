//- Controllers:
import GetControllerComponetes from "../Componentes/GetControllerComponetes";
import GetComputadorasController from "../Computadoras/GetComputadorasController";
import GetControllerPerifericos from "../Perifericos/GetControllerPerifericos";
import GetControllerSillas_Butacas from "../Sillas_Butacas/GetControllerSillas_Butacas";
import GetControllerMonitores from "../Monitores/GetControllerMonitores";
//- Interfaces:
import { Silla_Butaca } from "../../interfaces/InterfaceSillas_Butacas/InterfaceSillas_Butacas";
import { Componente } from "../../interfaces/InterfacesComponetes/InterfaceComponente";
import { Periferico } from "../../interfaces/InterfacesPerifericos/InterfacePeriferico";
import { Computadora } from "../../interfaces/InterfacesComputadoras/InterfacesComputadoras";

const GetSearchController = async (name: string) => {
  try {
    const arrayComputadoras = await GetComputadorasController();
    const arrayPerifericos = await GetControllerPerifericos();
    const arraySillas_Butacas = await GetControllerSillas_Butacas();
    const arrayComponentes = await GetControllerComponetes();
    const ArrayMonitores = await GetControllerMonitores();

    //- Todo los array de productos:
    const arrayAll = [
      ...arrayComputadoras,
      ...arrayPerifericos,
      ...arraySillas_Butacas,
      ...arrayComponentes,
      ...ArrayMonitores,
    ];

    const SearchDatos = arrayAll.filter(
      (e: Periferico | Componente | Silla_Butaca | Computadora) =>
        e.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    );

    if (!SearchDatos.length) {
      throw new Error("No se encontro ningun producto con esta caracteristica");
    }

    return SearchDatos;
  } catch (error: any) {
    throw new Error(error.menssage);
  }
};

export default GetSearchController;
