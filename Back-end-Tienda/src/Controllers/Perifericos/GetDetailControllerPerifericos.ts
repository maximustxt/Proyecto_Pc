//- Model:
import Perifericos from "../../Models/Model-Perifericos/Perifericos";
const GetDetailControllerPerifericos = async (id: string) => {
  // await Perifericos.deleteMany({}); // Elimina todos los documentos de la colección "Computadoras"
  try {
    const DetailPeriferico = await Perifericos.findById(id); // obtengo todas las computadoras
    return DetailPeriferico;
  } catch (error: any) {
    throw new Error(error.menssage);
  }
};

export default GetDetailControllerPerifericos;
