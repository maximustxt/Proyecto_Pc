//- Model:
import Computadoras from "../../Models/Model-Computadoras/Computadoras";
//- Interfaces:
import { Computadora } from "../../interfaces/InterfacesComputadoras/InterfacesComputadoras";

const PostComputadorasController = async (InformacionPC: Computadora) => {
  try {
    const computadora = new Computadoras(InformacionPC);
    await computadora.save();
    return "Computadora Creada Con Exito";
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default PostComputadorasController;
