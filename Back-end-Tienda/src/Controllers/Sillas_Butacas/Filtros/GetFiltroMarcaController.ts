import GetControllerSillas_Butacas from "../GetControllerSillas_Butacas";

const GetFiltroMarcaController = async (Marca: string) => {
  // filtramos todos los pc que contencan esa marca.
  try {
    const arrayComputadoras = await GetControllerSillas_Butacas();

    return arrayComputadoras.filter((e) => e.Marca === Marca);
  } catch (error: any) {
    throw new Error(error);
  }
};

export default GetFiltroMarcaController;
