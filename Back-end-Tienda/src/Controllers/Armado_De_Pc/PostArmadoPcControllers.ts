//- Model:
import ArmadoPcs from "../../Models/Model-ArmadoPc/Armado_De_Pc";
//- Interfaces:
import { ArmadoPc } from "../../interfaces/InterfaceModelos/interfaces.modelos";

const PostArmadoPcControllers = async (InfoArmadoPc: ArmadoPc) => {
  try {
    const ArmadoPc = new ArmadoPcs(InfoArmadoPc);
    await ArmadoPc.save();
    return "Armado_Pc Creada Con Exito";
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default PostArmadoPcControllers;
