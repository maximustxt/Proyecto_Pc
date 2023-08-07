//- Herramientas:
import express, { NextFunction, Response, Request } from "express";
import cors from "cors";
import morgan from "morgan";

//- Rutas:
import Computadoras from "./Routes/Computadoras-Router/ComputadorasRutas";
import Usuarios from "./Routes/Usuarios-Router/UsuariosRutas";
import Favoritos from "./Routes/Favoritos-Router/FavoritosRutas";
import Carrito from "./Routes/Carrito-Router/CarritoRutas";
import Ordenamientos from "./Routes/Ordenamientos-Router/OrdenamientosRutas";
import ContadorComputadora from "./Routes/Contador-Router/ContadorComputadoras";
import Periferico from "./Routes/Perifericos-Router/Perifericos";
import Componentes from "./Routes/Componentes-Rutas/Componentes";
import Destacados from "./Routes/Destacados-Router/Destacados-Rutas";
import Sillas_Butacas from "./Routes/Sillas_Butacas-Router/Sillas_Butacas";
import Search from "./Routes/Search-Router/Search-Rutas";
import Stripe from "./Routes/Stripe-Router/Stripe";
import Monitores from "./Routes/Monitores-Route/Monitores-Rutas";
import Armado_De_Pc from "./Routes/Armado_De_Pc/Armado_De_Pc-Router";
import NodeMailer from "./Routes/NodeMailer/NodeMailer-Router";

//- Instancia:
const app = express(); // la invocacion devuelve un objeto.

//*mildwares:
app.use(cors());
//* Define el middleware de errores:
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  // Verifica si el error tiene un código de estado definido
  const statusCode = 500;

  // Envia la respuesta de error al cliente
  res.status(statusCode).json({
    error: {
      message: err.message,
    },
  });
});
//- Morgan:
app.use(morgan("dev"));
//- Transformación JSON:
app.use(express.json());

//*Rutas:
app.use("/Stripe", Stripe);
app.use("/Armado_De_Pc", Armado_De_Pc);
app.use("/Search", Search);
app.use("/Contador", ContadorComputadora);
app.use("/Monitores", Monitores);
app.use("/Computadoras", Computadoras);
app.use("/Sillas_Butacas", Sillas_Butacas);
app.use("/Destacados", Destacados);
app.use("/Perifericos", Periferico);
app.use("/Componentes", Componentes);
app.use("/Favoritos", Favoritos);
app.use("/Carrito", Carrito);
app.use("/Usuarios", Usuarios);
app.use("/Ordenamientos", Ordenamientos);
app.use("/NodeMailer", NodeMailer);

export default app;
