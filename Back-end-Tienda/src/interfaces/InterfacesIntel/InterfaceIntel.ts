//- Interfaces:
import { Periferico } from "../InterfacesPerifericos/InterfacePeriferico";
import { Componente } from "../InterfacesComponetes/InterfaceComponente";
import Monitor from "../InterfacesMonitores/Interfaces-Monitores";

export default interface INTEL {
  ProcesadorIntel: Componente[];
  PlacaMadreIntel: Componente[];
  MemoriasRamIntel: Componente[];
  PlacasDeVideoIntel: Componente[];
  DiscoDuroIntel: Componente[];
  FuentesDePoderIntel: Componente[];
  GabinetesIntel: Componente[];
  PerifericosIntel: Periferico[];
  MonitoresIntel: Monitor[];
}
