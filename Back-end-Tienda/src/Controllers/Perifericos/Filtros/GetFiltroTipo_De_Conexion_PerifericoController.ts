//- Models:
import GetControllerPerifericos from "../GetControllerPerifericos";

const GetFiltroTipo_De_Conexion_PerifericoController = async (
  TipoDeConexion: string
) => {
  try {
    const arrayPerifericos = await GetControllerPerifericos();

    return arrayPerifericos.filter((e) => e.TipoDeConexion === TipoDeConexion);
  } catch (error: any) {
    throw new Error(error);
  }
};

export default GetFiltroTipo_De_Conexion_PerifericoController;
