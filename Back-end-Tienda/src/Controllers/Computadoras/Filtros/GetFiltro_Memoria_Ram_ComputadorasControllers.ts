//- Models:
import GetComputadorasController from "../GetComputadorasController";

const GetFiltro_Memoria_Ram_ComputadorasControllers = async (
  Memoria_Ram: string
) => {
  try {
    const arrayComputadoras = await GetComputadorasController();

    return arrayComputadoras.filter((e) => e.MemoriaRam === Memoria_Ram);
  } catch (error: any) {
    throw new Error(error);
  }
};

export default GetFiltro_Memoria_Ram_ComputadorasControllers;
