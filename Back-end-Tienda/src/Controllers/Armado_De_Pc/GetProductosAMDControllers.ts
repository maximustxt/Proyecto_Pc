//- Controllers:
import GetControllerMonitores from "../Monitores/GetControllerMonitores";
import GetControllerComponetes from "../Componentes/GetControllerComponetes";
import GetControllerPerifericos from "../Perifericos/GetControllerPerifericos";
import GetArmadoPcControllers from "../Armado_De_Pc/GetArmadoPcControllers";

const GetProductosAMDControllers = async () => {
  try {
    const ArrayComponentesAmd = await GetControllerComponetes();
    const ArrayMonitoresAmd = await GetControllerMonitores();
    const ArrayPerifericosAmd = await GetControllerPerifericos();
    const ArrayrmadoPcAmd = await GetArmadoPcControllers();

    return {
      ProcesadorAmd: ArrayComponentesAmd.filter(
        (e) =>
          e.Tipo === "Procesador" &&
          (e.TipoDeChip === "Amd" || e.TipoDeChip === "AMD")
      ),

      PlacaMadreAmd: ArrayComponentesAmd.filter(
        (e) =>
          e.Tipo === "Placa Madre" &&
          (e.TipoDeChip === "Amd" || e.TipoDeChip === "AMD")
      ),

      PlacasDeVideoAmd: ArrayComponentesAmd.filter(
        (e) => e.Tipo === "Placa De Video"
      ),

      DiscoDuroAmd: ArrayComponentesAmd.filter(
        (e) => e.Tipo === "Disco Duro" || e.Tipo === "Disco SSD"
      ),

      MemoriasRamAmd: ArrayComponentesAmd.filter(
        (e) => e.Tipo === "Memoria Ram"
      ),

      FuentesDePoderAmd: ArrayComponentesAmd.filter(
        (e) => e.Tipo === "Fuente De Poder"
      ),

      GabinetesAmd: ArrayComponentesAmd.filter((e) => e.Tipo === "Gabinete"),

      PerifericosAmd: ArrayPerifericosAmd,

      MonitoresAmd: ArrayMonitoresAmd,

      ArmadoPcAmd: ArrayrmadoPcAmd,
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default GetProductosAMDControllers;
