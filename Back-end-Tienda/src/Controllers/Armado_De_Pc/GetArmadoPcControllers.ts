//- Model:
import ArmadoPc from "../../Models/Model-ArmadoPc/Armado_De_Pc";

const GetArmadoPcControllers = async () => {
  //await ArmadoPc.deleteMany({}); // Elimina todos los documentos de la colección "Computadoras"
  try {
    let TodoLosComponetes = await ArmadoPc.find(); // obtengo todas las computadoras

    return TodoLosComponetes;
  } catch (error: any) {
    throw new Error(error.menssage);
  }
};

export default GetArmadoPcControllers;
