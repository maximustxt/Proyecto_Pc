//- Interfaces:
import { Perifericos } from '../Perifericos/Perifericos';
import { Componentes } from '../Componentes/Componentes';
import Monitor from '../Monitores/Monitores';
import { ArmadoPc } from '../Armado_Pc/Armado_Pc';

export default interface AMD {
  ProcesadorAmd: Componentes[];
  PlacaMadreAmd: Componentes[];
  MemoriasRamAmd: Componentes[];
  PlacasDeVideoAmd: Componentes[];
  DiscoDuroAmd: Componentes[];
  FuentesDePoderAmd: Componentes[];
  GabinetesAmd: Componentes[];
  PerifericosAmd: Perifericos[];
  MonitoresAmd: Monitor[];
  ArmadoPcAmd: ArmadoPc[];
}
