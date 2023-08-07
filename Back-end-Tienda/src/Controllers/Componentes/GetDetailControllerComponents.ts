//- Model:
import Componentes from "../../Models/Model-Componetes/Componetes";

const GetDetailControllerComponents = async (id: string) => {
  // await Perifericos.deleteMany({}); // Elimina todos los documentos de la colección "Computadoras"
  try {
    const DetailComponent = await Componentes.findById(id); // obtengo todas las computadoras
    return DetailComponent;
  } catch (error: any) {
    throw new Error(error.menssage);
  }
};

export default GetDetailControllerComponents;
