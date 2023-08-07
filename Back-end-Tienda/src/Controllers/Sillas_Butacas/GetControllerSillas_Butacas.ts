//- Model:
import Sillas_Butacas from "../../Models/Model-Sillas-Butacas/Sillas-Butacas";

const GetControllerSillas_Butacas = async () => {
  //await Sillas_Butacas.deleteMany({}); // Elimina todos los documentos de la colección "Sillas_Butacas"
  try {
    const TodosLosSillas_Butacas = await Sillas_Butacas.find(); // obtengo todas las Sillas_Butacas
    return TodosLosSillas_Butacas;
  } catch (error: any) {
    throw new Error(error.menssage);
  }
};

export default GetControllerSillas_Butacas;
