import { Router } from "express";
//- HandleError:
import HandleHttpError from "../../utils/Error.handle";
//- Controllers:
import GetArmadoPcControllers from "../../Controllers/Armado_De_Pc/GetArmadoPcControllers";
import PostArmadoPcControllers from "../../Controllers/Armado_De_Pc/PostArmadoPcControllers";
import GetProductosAMDControllers from "../../Controllers/Armado_De_Pc/GetProductosAMDControllers";
import GetProductosINTELControllers from "../../Controllers/Armado_De_Pc/GetProductosINTELControllers";

const Armado_De_Pc = Router();

//*----------------------------------------All--------------------------------------*//

Armado_De_Pc.get("/", async (req, res) => {
  try {
    const response = await GetArmadoPcControllers();
    res.status(200).json(response);
  } catch (error: any) {
    HandleHttpError(res, error);
  }
});

//*--------------------------------------Post---------------------------------------*//

Armado_De_Pc.post("/", async (req, res) => {
  try {
    const InfoArmadoPc = req.body;
    const response = await PostArmadoPcControllers(InfoArmadoPc);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json({ error: error });
    // HandleHttpError(res, error);
  }
});

//!----------------------------------------AMD--------------------------------------*//

Armado_De_Pc.get("/AMD", async (req, res) => {
  try {
    const response = await GetProductosAMDControllers();
    res.status(200).json(response);
  } catch (error: any) {
    HandleHttpError(res, error);
  }
});

//?----------------------------------------INTEL--------------------------------------*//

Armado_De_Pc.get("/INTEL", async (req, res) => {
  try {
    const response = await GetProductosINTELControllers();
    res.status(200).json(response);
  } catch (error: any) {
    HandleHttpError(res, error);
  }
});

export default Armado_De_Pc;
