export interface Usuario {
  _id: string;
  name: string;
  email: string;
  password: string;
  Imagen?: string;
}

export interface UsuarioGoogle {
  password: string;
  name: string;
  email: string;
  Imagen: string;
}
