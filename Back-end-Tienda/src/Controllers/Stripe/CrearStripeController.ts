//- Interfaces:
import { Carritos } from "../../interfaces/InterfacesCarrito/InterfacesCarrito";
// @ts-ignore
require("dotenv").config(); // para usar debemos installar npm i dotenv.
// @ts-ignore
const { STRIPE_KEY } = process.env;

// Stripe:
// @ts-ignore
const stripe = require("stripe")(`${STRIPE_KEY}`);

const CrearStripeController = async (datosCompra: Carritos[]) => {
  if (datosCompra.length === 0) {
    throw new Error(
      "El carrito está vacío. No se puede crear la sesión de pago."
    );
  }
  try {
    if (datosCompra.length) {
      const ArrayItmer = datosCompra.map((producto) => {
        return {
          price_data: {
            // Corrected property name from price_date to price_data
            currency: "usd",
            product_data: {
              name: producto.name,
              description: producto.Descripcion,
            },

            unit_amount: producto.Precio * 100,
          },
          quantity: producto.Contador,
        };
      });
      const session = await stripe.checkout.sessions.create({
        line_items: ArrayItmer,
        mode: "payment",
        success_url: "http://localhost:4200/CompraExitosa",
        cancel_url: "http://localhost:4200/Home", // si hay un problema o se cancela la compra me lleva al front al Home.
      });

      return session;
    }
  } catch (error: any) {
    throw new Error("Hubo un error:" + error.message);
  }
};

export default CrearStripeController;
