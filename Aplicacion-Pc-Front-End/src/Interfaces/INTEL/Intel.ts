//- Interfaces:
import { Perifericos } from '../Perifericos/Perifericos';
import { Componentes } from '../Componentes/Componentes';
import Monitor from '../Monitores/Monitores';
import { ArmadoPc } from '../Armado_Pc/Armado_Pc';

export default interface INTEL {
  ProcesadorIntel: Componentes[];
  PlacaMadreIntel: Componentes[];
  MemoriasRamIntel: Componentes[];
  PlacasDeVideoIntel: Componentes[];
  DiscoDuroIntel: Componentes[];
  FuentesDePoderIntel: Componentes[];
  GabinetesIntel: Componentes[];
  PerifericosIntel: Perifericos[];
  MonitoresIntel: Monitor[];
  ArmadoPcIntel: ArmadoPc[];
}
