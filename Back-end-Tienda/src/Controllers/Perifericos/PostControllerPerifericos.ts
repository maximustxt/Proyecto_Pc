//- Model:
import Perifericos from "../../Models/Model-Perifericos/Perifericos";
//- Interface:
import { Periferico } from "../../interfaces/InterfacesPerifericos/InterfacePeriferico";

const PostControllerPerifericos = async (InfoPeriferico: Periferico) => {
  try {
    const periferico = new Perifericos(InfoPeriferico);
    await periferico.save();
    return "Periferico Creada Con Exito";
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default PostControllerPerifericos;
