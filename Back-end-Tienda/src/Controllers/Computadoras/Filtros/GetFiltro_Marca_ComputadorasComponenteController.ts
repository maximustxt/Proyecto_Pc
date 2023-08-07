//- Models:
import GetComputadorasController from "../GetComputadorasController";

const GetFiltro_Marca_ComputadorasComponenteController = async (
  Marca: string
) => {
  try {
    const arrayComputadoras = await GetComputadorasController();

    return arrayComputadoras.filter((e) => e.Marca === Marca);
  } catch (error: any) {
    throw new Error(error);
  }
};

export default GetFiltro_Marca_ComputadorasComponenteController;
