//- Model:
import Sillas_Butacas from "../../Models/Model-Sillas-Butacas/Sillas-Butacas";

const GetDetailControllerSillas_Butacas = async (id: string) => {
  // await Sillas_Butacas.deleteMany({}); // Elimina todos los documentos de la colección "Sillas_Butacas"
  try {
    const DetailSillas_Butacas = await Sillas_Butacas.findById(id); // obtengo todas las computadoras
    return DetailSillas_Butacas;
  } catch (error: any) {
    throw new Error(error.menssage);
  }
};

export default GetDetailControllerSillas_Butacas;
