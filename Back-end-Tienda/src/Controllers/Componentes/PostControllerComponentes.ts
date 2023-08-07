//- Model:
import Componentes from "../../Models/Model-Componetes/Componetes";
//- Interface:
import { Componente } from "../../interfaces/InterfacesComponetes/InterfaceComponente";

const PostControllerComponentes = async (InfoComponete: Componente) => {
  try {
    const Componete = new Componentes(InfoComponete);
    await Componete.save();
    return "Componente Creada Con Exito";
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default PostControllerComponentes;
