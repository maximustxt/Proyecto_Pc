//- Models:
import GetComputadorasController from "../GetComputadorasController";

const GetFiltro_Categoria_ComputadorasControllers = async (
  Categoria: string
) => {
  try {
    const arrayComputadoras = await GetComputadorasController();

    return arrayComputadoras.filter((e) => e.Categorias === Categoria);
  } catch (error: any) {
    throw new Error(error);
  }
};

export default GetFiltro_Categoria_ComputadorasControllers;
