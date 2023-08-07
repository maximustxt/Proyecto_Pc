import GetControllerComponetes from "../GetControllerComponetes";

const GetFiltroTipoControllers = async (tipo: string) => {
  try {
    const arrayComponentes = await GetControllerComponetes();

    return arrayComponentes.filter((e) => e.Tipo === tipo);
  } catch (error: any) {
    throw new Error(error);
  }
};

export default GetFiltroTipoControllers;
