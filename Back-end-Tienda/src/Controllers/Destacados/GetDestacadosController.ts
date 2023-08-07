//- Modelos:
import Perifericos from "../../Models/Model-Perifericos/Perifericos";
import Componentes from "../../Models/Model-Componetes/Componetes";
import Computadoras from "../../Models/Model-Computadoras/Computadoras";
import Sillas_Butacas from "../../Models/Model-Sillas-Butacas/Sillas-Butacas";

const GetDestacadosController = async () => {
  // aca debo recorrer los perifericos , componentes y computadoras los productos destacados.
  //*------------------Computadoras-------------------------*//

  const ComputadorasDestacadas = (await Computadoras.find()).filter(
    (e) => e.Destacado === true
  );
  //*------------------Perifericos--------------------------*//

  const PerifericosDestacados = (await Perifericos.find()).filter(
    (e) => e.Destacado === true
  );
  //*------------------Componentes--------------------------*//

  const ComponentesDestacados = (await Componentes.find()).filter(
    (e) => e.Destacado === true
  );

  //*------------------Computadoras-------------------------*//

  const Sillas_ButacasDestacados = (await Sillas_Butacas.find()).filter(
    (e) => e.Destacado === true
  );

  return [
    ...ComponentesDestacados,
    ...PerifericosDestacados,
    ...ComputadorasDestacadas,
    ...Sillas_ButacasDestacados,
  ];
};

export default GetDestacadosController;
