//- Interfaces:
import { Periferico } from "../InterfacesPerifericos/InterfacePeriferico";
import { Componente } from "../InterfacesComponetes/InterfaceComponente";
import Monitor from "../InterfacesMonitores/Interfaces-Monitores";

export default interface AMD {
  ProcesadorAmd: Componente[];
  PlacaMadreAmd: Componente[];
  MemoriasRamAmd: Componente[];
  PlacasDeVideoAmd: Componente[];
  DiscoDuroAmd: Componente[];
  FuentesDePoderAmd: Componente[];
  GabinetesAmd: Componente[];
  PerifericosAmd: Periferico[];
  MonitoresAmd: Monitor[];
}
