//- Model:
import GetControllerPerifericos from "../GetControllerPerifericos";

const GetFiltroTipoPerifericoControllers = async (Tipo: string) => {
  try {
    const arrayPerifericos = await GetControllerPerifericos();

    return arrayPerifericos.filter((e) => e.Tipo === Tipo);
  } catch (error: any) {
    throw new Error(error);
  }
};

export default GetFiltroTipoPerifericoControllers;
