import app from "./src/App";
import { connectDB } from "./src/DB";

//- Importamos la funcion que conecta la base de datos y luego la invocamos:
//- Porque al hacer Npm start , dijimos que debia de realizarlo en el archivo index.ts , por lo cual por eso traemos la coneccion de la DB aca!.
connectDB();

app.listen(3000, () => {
  console.log("Servidor Levantado Con exito!.");
});
