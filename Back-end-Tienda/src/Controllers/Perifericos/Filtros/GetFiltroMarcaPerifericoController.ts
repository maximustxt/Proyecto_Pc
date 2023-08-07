//- Model:
import GetControllerPerifericos from "../GetControllerPerifericos";

const GetFiltroMarcaPerifericoController = async (Marca: string) => {
  try {
    const arrayPerifericos = await GetControllerPerifericos();

    return arrayPerifericos.filter((e) => e.Marca === Marca);
  } catch (error: any) {
    throw new Error(error);
  }
};

export default GetFiltroMarcaPerifericoController;
