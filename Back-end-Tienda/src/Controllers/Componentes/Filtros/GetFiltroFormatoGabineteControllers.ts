import GetControllerComponetes from "../GetControllerComponetes";

const GetFiltroFormatoGabineteControllers = async (FormatoGabinete: string) => {
  try {
    const arrayComponentes = await GetControllerComponetes();

    return arrayComponentes.filter((e) => e.FactorDeForm === FormatoGabinete);
  } catch (error: any) {
    throw new Error(error);
  }
};

export default GetFiltroFormatoGabineteControllers;
