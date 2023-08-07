export interface Componente {
  _id: string;
  name: string;
  Imagen: string;
  PrecioUnitario: number;
  Contador: number;
  Imagenes: string[];
  Descripcion: string;
  Marca: string;
  Precio: number;
  Stock: number;
  Identificador: string;
  Destacado: boolean;
  Tipo: string;
  TipoDeChip?: string;
  IdCarrusel?: string;
  TipoRam?: string; // el ? es porque es un campo opcional.
  Compatibilidad?: string; // el ? es porque es un campo opcional.
  Disipacion?: string; // el ? es porque es un campo opcional.
  FactorDeForm?: string; // el ? es porque es un campo opcional.
}
