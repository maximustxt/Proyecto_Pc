//- Carrito:
import Usuarios from "../../Models/Model-Usuario/Usuarios";
import Carrito from "../../Models/Modelo-Carrito/Carrito";
//- Interface:
import { Carritos } from "../../interfaces/InterfacesCarrito/InterfacesCarrito";

const PostCarritoController = async (carritoData: Carritos, idUser: string) => {
  try {
    const carritoDelUsuario = await Usuarios.findById(idUser).populate(
      "carrito"
    );

    const array = carritoDelUsuario?.carrito as any;

    // Verificar si el producto ya existe en el carrito
    const productoExistente = array.find(
      (producto: Carritos) => producto._id === carritoData._id
    );
    if (productoExistente) {
      throw new Error("El producto ya existe en el carrito");
    }

    // Resto del código para crear el nuevo producto en el carrito...
    const nuevoCarrito = new Carrito(carritoData);
    await nuevoCarrito.save();

    // Agregar el nuevo producto al carrito del usuario
    carritoDelUsuario?.carrito.push(nuevoCarrito._id);
    await carritoDelUsuario?.save();
    array.push(carritoData);

    return "Carrito Posteado";
  } catch (error: any) {
    console.log(error.message);
    throw new Error("No se pudo postear el Carrito: " + error.message);
  }
};

export default PostCarritoController;
