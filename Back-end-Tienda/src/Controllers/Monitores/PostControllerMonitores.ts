//- Model:
import Monitores from "../../Models/Model-Monitores/Monitores";
//- Interfaces:
import Monitor from "../../interfaces/InterfacesMonitores/Interfaces-Monitores";

const PostControllerMonitores = async (InfoMonitor: Monitor) => {
  try {
    const Monitor = new Monitores(InfoMonitor);
    await Monitor.save();
    return "Monitor Creada Con Exito";
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default PostControllerMonitores;
