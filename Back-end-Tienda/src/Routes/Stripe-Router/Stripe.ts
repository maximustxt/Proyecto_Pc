import { Router } from "express";
//- HandleError:
import HandleHttpError from "../../utils/Error.handle";
//- Controllers:
import CrearStripeController from "../../Controllers/Stripe/CrearStripeController";
import PutuccesController from "../../Controllers/Stripe/PutuccesController";
//- Instance:
const Stripe = Router();
//*--------------------------------Si algo sale bien:
// Ruta de éxito "success"
Stripe.put("/success", async (req, res) => {
  try {
    // req.body esta el array.
    // lo que voy hacer es lo siguiente : voy a crear una ruta desde el front , que solo aparezca cuando la compra fue exitosa : me va aparecer un mensaje y por detras voy a traerme todo lo que habia en el carrito , lo vacio , luego se lo envio a una ruta en la cual calcula el stock y lo disminuye.
    const response = await PutuccesController(req.body);
    res.status(200).json(response);
  } catch (error) {
    HandleHttpError(res, error);
  }
});

//*---------------------------------------------------------Iniciar Sesion:
Stripe.post("/create-checkout-session", async (req, res) => {
  try {
    const response = await CrearStripeController(req.body);
    res.status(200).json(response);
  } catch (error: any) {
    HandleHttpError(res, error);
  }
});

export default Stripe;
