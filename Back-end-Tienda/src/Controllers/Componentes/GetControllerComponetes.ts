//- Model:
import Componentes from "../../Models/Model-Componetes/Componetes";

const GetControllerComponetes = async () => {
  //await Componentes.deleteMany({}); // Elimina todos los documentos de la colección "Computadoras"
  try {
    let TodoLosComponetes = await Componentes.find(); // obtengo todas las computadoras

    return TodoLosComponetes;
  } catch (error: any) {
    throw new Error(error.menssage);
  }
};

export default GetControllerComponetes;
