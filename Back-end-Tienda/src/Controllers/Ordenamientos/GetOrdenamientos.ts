//- Interfaces:
import { Componente } from "../../interfaces/InterfacesComponetes/InterfaceComponente";
import { Periferico } from "../../interfaces/InterfacesPerifericos/InterfacePeriferico";
import { Silla_Butaca } from "../../interfaces/InterfaceSillas_Butacas/InterfaceSillas_Butacas";
import Monitor from "../../interfaces/InterfacesMonitores/Interfaces-Monitores";
import { Computadora } from "../../interfaces/InterfacesComputadoras/InterfacesComputadoras";

const GetOrdenamientos = async (
  sortingOption: string,
  productType: string,
  ArrayOrder: (Computadora | Periferico | Componente | Silla_Butaca | Monitor)[]
) => {
  try {
    switch (productType) {
      case "MONITOR":
        if (sortingOption === "Destacado") {
          return ArrayOrder.filter((e) => e.Destacado === true);
        } else if (sortingOption === "Menor Precio") {
          return ArrayOrder.sort((a, b) => a.Precio - b.Precio);
        } else if (sortingOption === "Mayor Precio") {
          return ArrayOrder.sort((a, b) => b.Precio - a.Precio);
        } else {
          return ArrayOrder;
        }
      case "PERIFERICOS":
        if (sortingOption === "Destacado") {
          return ArrayOrder.filter((e) => e.Destacado === true);
        } else if (sortingOption === "Menor Precio") {
          return ArrayOrder.sort((a, b) => a.Precio - b.Precio);
        } else if (sortingOption === "Mayor Precio") {
          return ArrayOrder.sort((a, b) => b.Precio - a.Precio);
        } else {
          return ArrayOrder;
        }

      case "COMPONENTES":
        if (sortingOption === "Destacado") {
          return ArrayOrder.filter((e) => e.Destacado === true);
        } else if (sortingOption === "Menor Precio") {
          return ArrayOrder.sort((a, b) => a.Precio - b.Precio);
        } else if (sortingOption === "Mayor Precio") {
          return ArrayOrder.sort((a, b) => b.Precio - a.Precio);
        } else {
          return ArrayOrder;
        }
      case "SILLAS_BUTACAS":
        if (sortingOption === "Destacado") {
          return ArrayOrder.filter((e) => e.Destacado === true);
        } else if (sortingOption === "Menor Precio") {
          return ArrayOrder.sort((a, b) => a.Precio - b.Precio);
        } else if (sortingOption === "Mayor Precio") {
          return ArrayOrder.sort((a, b) => b.Precio - a.Precio);
        } else {
          return ArrayOrder;
        }

      case "COMPUTADORAS":
        if (sortingOption === "Destacado") {
          return ArrayOrder.filter((e) => e.Destacado === true);
        } else if (sortingOption === "Menor Precio") {
          return ArrayOrder.sort((a, b) => a.Precio - b.Precio);
        } else if (sortingOption === "Mayor Precio") {
          return ArrayOrder.sort((a, b) => b.Precio - a.Precio);
        } else {
          return ArrayOrder;
        }
      default:
        return;
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default GetOrdenamientos;
