import GetControllerComponetes from "../GetControllerComponetes";

const GetFiltroMarcaComponenteController = async (Marca: string) => {
  try {
    const arrayComputadoras = await GetControllerComponetes();

    return arrayComputadoras.filter((e) => e.Marca === Marca);
  } catch (error: any) {
    throw new Error(error);
  }
};

export default GetFiltroMarcaComponenteController;
