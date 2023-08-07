//- Models:
import Usuarios from "../../Models/Model-Usuario/Usuarios";

const GetContadorNavBarCarrito = async (idUser: string) => {
  const carritoUser = await Usuarios.findById(idUser).populate("carrito");

  return carritoUser?.carrito.length;
};

export default GetContadorNavBarCarrito;
