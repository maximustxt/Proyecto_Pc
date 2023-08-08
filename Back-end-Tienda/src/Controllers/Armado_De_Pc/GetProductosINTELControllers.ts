//- Controllers:
import GetControllerComponetes from "../Componentes/GetControllerComponetes";
import GetControllerMonitores from "../Monitores/GetControllerMonitores";
import GetControllerPerifericos from "../Perifericos/GetControllerPerifericos";
import GetArmadoPcControllers from "./GetArmadoPcControllers";

const GetProductosINTELControllers = async () => {
  try {
    const ArrayComponentesIntel = await GetControllerComponetes();
    const ArrayMonitoresIntel = await GetControllerMonitores();
    const ArrayPerifericosIntel = await GetControllerPerifericos();
    const ArrayrmadoPcIntel = await GetArmadoPcControllers();

    return {
      ProcesadorIntel: ArrayComponentesIntel.filter(
        (e) => e.Tipo === "Procesador" && e.TipoDeChip === "Intel"
      ),

      PlacaMadreIntel: ArrayComponentesIntel.filter(
        (e) => e.Tipo === "Placa Madre" && e.TipoDeChip === "Intel"
      ),

      PlacasDeVideoIntel: ArrayComponentesIntel.filter(
        (e) => e.Tipo === "Placa De Video"
      ),

      DiscoDuroIntel: ArrayComponentesIntel.filter(
        (e) => e.Tipo === "Disco Duro" || e.Tipo === "Disco SSD"
      ),

      MemoriasRamIntel: ArrayComponentesIntel.filter(
        (e) => e.Tipo === "Memoria Ram"
      ),

      FuentesDePoderIntel: ArrayComponentesIntel.filter(
        (e) => e.Tipo === "Fuente De Poder"
      ),

      GabinetesIntel: ArrayComponentesIntel.filter(
        (e) => e.Tipo === "Gabinete"
      ),

      PerifericosIntel: ArrayPerifericosIntel,

      MonitoresIntel: ArrayMonitoresIntel,

      ArmadoPcIntel: ArrayrmadoPcIntel,
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default GetProductosINTELControllers;
