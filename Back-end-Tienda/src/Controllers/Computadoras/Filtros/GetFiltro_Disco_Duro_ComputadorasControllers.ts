//- Models:
import GetComputadorasController from "../GetComputadorasController";

const GetFiltro_Disco_Duro_ComputadorasControllers = async (
  Disco_Duro: string
) => {
  try {
    const arrayComputadoras = await GetComputadorasController();

    return arrayComputadoras.filter((e) => e.DiscoDuro === Disco_Duro);
  } catch (error: any) {
    throw new Error(error);
  }
};

export default GetFiltro_Disco_Duro_ComputadorasControllers;
