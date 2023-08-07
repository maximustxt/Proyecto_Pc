import GetControllerMonitores from "../../Monitores/GetControllerMonitores";

const GetFiltroMarcaMonitoresController = async (Marca: string) => {
  try {
    const arrayMonitores = await GetControllerMonitores();

    return arrayMonitores.filter((e) => e.Marca === Marca);
  } catch (error: any) {
    throw new Error(error);
  }
};

export default GetFiltroMarcaMonitoresController;
