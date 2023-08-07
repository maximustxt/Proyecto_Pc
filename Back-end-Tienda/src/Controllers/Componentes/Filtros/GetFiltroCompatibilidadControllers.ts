//- Model:
import GetControllerComponetes from "../GetControllerComponetes";

const GetFiltroCompatibilidadControllers = async (compatibilidad: string) => {
  try {
    const arrayComponentes = await GetControllerComponetes();

    return arrayComponentes.filter((e) => e.Compatibilidad === compatibilidad);
  } catch (error: any) {
    throw new Error(error);
  }
};

export default GetFiltroCompatibilidadControllers;
