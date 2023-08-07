import GetControllerMonitores from "../GetControllerMonitores";

const GetFiltro_Panel_Monitores_Controller = async (Panel: string) => {
  try {
    const ArrayMonitores = await GetControllerMonitores();

    return ArrayMonitores.filter((e) => e.Panel === Panel);
  } catch (error: any) {
    throw new Error(error);
  }
};

export default GetFiltro_Panel_Monitores_Controller;
