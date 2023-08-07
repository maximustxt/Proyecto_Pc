//- Model:
import Computadoras from "../../Models/Model-Computadoras/Computadoras";

const GetComputadorasController = async () => {
  //await Computadoras.deleteMany({}); // Elimina todos los documentos de la colección "Computadoras"
  try {
    const TodosLasComputadoras = await Computadoras.find(); // obtengo todas las computadoras
    return TodosLasComputadoras;
  } catch (error: any) {
    throw new Error(error.menssage);
  }
};

export default GetComputadorasController;
