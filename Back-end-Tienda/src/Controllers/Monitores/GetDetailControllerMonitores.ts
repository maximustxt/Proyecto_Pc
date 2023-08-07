import Monitores from "../../Models/Model-Monitores/Monitores";

const GetDetailControllerMonitores = async (id: string) => {
  // await Monitores.deleteMany({}); // Elimina todos los documentos de la colección "Computadoras"
  try {
    const DetailMonitor = await Monitores.findById(id); // obtengo todas las computadoras
    return DetailMonitor;
  } catch (error: any) {
    throw new Error(error.menssage);
  }
};

export default GetDetailControllerMonitores;
