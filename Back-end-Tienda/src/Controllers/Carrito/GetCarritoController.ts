import Usuarios from "../../Models/Model-Usuario/Usuarios";

const GetCarritoController = async (idUser: string) => {
  //await Carrito.deleteMany({}); // Elimina todos los documentos de la colección "carritos"
  try {
    //buscamos todo los carritos del usuario
    const TodoLoQueHayEnCarrito = await Usuarios.findById(idUser).populate(
      "carrito"
    );
    return TodoLoQueHayEnCarrito?.carrito;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default GetCarritoController;
