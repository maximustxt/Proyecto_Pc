//- Model:
import Perifericos from "../../Models/Model-Perifericos/Perifericos";
import { Periferico } from "../../interfaces/InterfacesPerifericos/InterfacePeriferico";

const GetControllerPerifericos = async () => {
  //await Perifericos.deleteMany({}); // Elimina todos los documentos de la colección "Computadoras"
  try {
    const TodosLosPerifericos = await Perifericos.find(); // obtengo todas las computadoras
    return TodosLosPerifericos;
  } catch (error: any) {
    throw new Error(error.menssage);
  }
};

export default GetControllerPerifericos;
