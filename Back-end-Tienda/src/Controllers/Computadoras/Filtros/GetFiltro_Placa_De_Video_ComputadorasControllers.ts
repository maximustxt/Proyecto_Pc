//- Models:
import GetComputadorasController from "../GetComputadorasController";

const GetFiltro_Placa_De_Video_ComputadorasControllers = async (
  Placa_De_Video: string
) => {
  try {
    const arrayComputadoras = await GetComputadorasController();

    return arrayComputadoras.filter((e) => e.PlacaDeVideo === Placa_De_Video);
  } catch (error: any) {
    throw new Error(error);
  }
};

export default GetFiltro_Placa_De_Video_ComputadorasControllers;
