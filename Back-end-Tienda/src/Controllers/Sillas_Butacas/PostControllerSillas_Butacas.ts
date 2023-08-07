//- Model:
import Sillas_Butacas from "../../Models/Model-Sillas-Butacas/Sillas-Butacas";
//- Interface:
import { Silla_Butaca } from "../../interfaces/InterfaceSillas_Butacas/InterfaceSillas_Butacas";

const PostControllerSillas_Butacas = async (
  InfoSillas_Butacas: Silla_Butaca
) => {
  try {
    const Silla_Butaca = new Sillas_Butacas(InfoSillas_Butacas);
    await Silla_Butaca.save();
    return "Sillas_Butacas Creada Con Exito";
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default PostControllerSillas_Butacas;
