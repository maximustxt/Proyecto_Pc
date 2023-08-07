//- Controller De Todos las Pc:
import GetComputadorasController from "./GetComputadorasController";

const GetDetailComputadorasController = async (id: string) => {
  try {
    const arrayComputadoras = await GetComputadorasController();

    const ComputadoraDetail = arrayComputadoras.find((e) => e.id === id);

    return ComputadoraDetail;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default GetDetailComputadorasController;
