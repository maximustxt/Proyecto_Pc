//- Model:
import Monitores from "../../Models/Model-Monitores/Monitores";

const GetControllerMonitores = async () => {
  //await Monitores.deleteMany({}); // Elimina todos los documentos de la colección "Computadoras"
  try {
    const TodosLosMonitores = await Monitores.find(); // obtengo todas las computadoras
    return TodosLosMonitores;
  } catch (error: any) {
    throw new Error(error.menssage);
  }
};

export default GetControllerMonitores;
