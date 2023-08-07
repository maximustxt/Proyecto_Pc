import { Router } from "express";
//-Importacion de nodeMailer:
import transporter from "../../config/NodeMailer";
//- Interfaces:
import { Componente } from "../../interfaces/InterfacesComponetes/InterfaceComponente";
import Monitor from "../../interfaces/InterfacesMonitores/Interfaces-Monitores";
import { Periferico } from "../../interfaces/InterfacesPerifericos/InterfacePeriferico";
import { Computadora } from "../../interfaces/InterfacesComputadoras/InterfacesComputadoras";
//- Leedor de Html:
import fs from "fs";
import path from "path";
//- Instance:
const NodeMailer = Router();

//?---------------------------------------------Envio Email Registro:

NodeMailer.post("/EnvioEmailRegistro", async (req, res) => {
  try {
    const email = req.query.email as string;

    await transporter.sendMail({
      from: '"Martix.com" <martixcba@gmail.com>', // el que va enviar el correo
      to: email, // para quien va a ir el corrreo electronico.
      //   subject: "Hello ✔", // Subject line
      text: "Hello world?", // texto plano
      html: `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Email</title>
        </head>
        <body>
          <div
            style="
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              background-color: #5a5a5a;
              display: flex;
              flex-direction: column;
              align-content: center;
              align-items: center;
              text-align: center;
              border: none;
            "
            class="ContainerTitulo"
          >
            <h3
              style="
                letter-spacing: 5px;
                font-weight: bold;
                color: #fff;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
                font-size: 40px;
                width: 100%;
                text-align: center;
              "
              class="icono-martix"
            >
              MARTI<span style="color: #96c817" class="span">X</span>
            </h3>
          </div>
      
          <div
            style="
              height: fit-content;
              margin-top: 100px;
              text-align: center;
              padding: 40px 25px;
            "
            class="ContainerTexto"
          >
            <h3 style="text-decoration: underline; color: #30302d; font-size: 30px">
              Registro Exitoso!
            </h3>
            <p>
              Ahora podra navegar tranquilamente por nuestra web , cualquir problema o
              duda con la pagina consultar aqui
              <a
                style="cursor: pointer; color: blue; text-decoration: underline"
                class="LinkRegistro"
                >Link</a
              >
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia
              hic tempora ipsa facilis. Maxime iure illo, quisquam beatae, porro
              tempora quae commodi voluptatem aut rem consectetur cum, cumque earum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia
              hic tempora ipsa facilis. Maxime iure illo, quisquam beatae, porro
              tempora quae commodi voluptatem aut rem consectetur cum, cumque earum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia
              hic tempora ipsa facilis. Maxime iure illo, quisquam beatae, porro
              tempora quae commodi voluptatem aut rem consectetur cum, cumque earum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia
              hic tempora ipsa facilis. Maxime iure illo, quisquam beatae, porro
              tempora quae commodi voluptatem aut rem consectetur cum, cumque earum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia
              hic tempora ipsa facilis. Maxime iure illo, quisquam beatae, porro
              tempora quae commodi voluptatem aut rem consectetur cum, cumque earum.
            </p>
            <br />
            <a
              style="
                text-decoration: none;
                background-color: #3483fa;
                color: #fff;
                border: #3483fa;
                padding: 10px 15px;
                border-radius: 10px;
              "
              href="http://localhost:4200/Perfil"
              >Ir al Perfil</a
            >
          </div>
          <!--------------------------------------------------->
          <!----------------------FOOTER----------------------->
          <hr/>
          <main
            style="
              position: absolute;
              left: 0px;
              background-color: #5a5a5a;
              width: 100%;
              height: fit-content;
            "
            class="main"
          >
            <section
              style="
                display: flex;
                justify-content: space-between;
                padding: 40px 40px;
              "
              class="ContainerFooter"
            >
              <div style="width: fit-content; margin: 10px; text-align: center">
                <h2 style="color: #91c612; font-weight: 800">Martix</h2>
                <p style="font-size: 15px; color: #000">
                  Somos una empresa familiar fundada en la ciudad de Córdoba en el año
                  2011. Nuestro principal capital invertido fue esfuerzo, trabajo y el
                  deseo de brindar lo maximo en tecnologia a nuestros clientes.
                </p>
              </div>
              <div style="width: fit-content; margin: 10px; text-align: center">
                <h2 style="color: #91c612; font-weight: 800">Contacto</h2>
                <p style="font-size: 15px; color: #000">
                  Ventas 1: +549 3517-051999 Ventas 2: +549 351-3021777 Ventas 3: +549
                  351-7668766 Servicio Técnico y RMA: +549 351-330709 Administración:
                  +549 351-2412155 Email: Martixcba@gmail.com Encontranos: Catamarca
                  1295 - Esquina Jacinto Rios - Barrio General Paz - Córdoba Ciudad.
                </p>
              </div>
            </section>
            <h5 style="text-align: center; font-size: 18px; color: #000">
              Copyright © 2023 - Martix. Cordoba, Argentina.
            </h5>
          </main>
        </body>
      </html>
      `,
    }); // css por dentro del html
    res.status(200).send("Email Enviado Con exito");
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

//?---------------------------------------------Envio Email De Compra Exitoso:

NodeMailer.post("/EnvioEmailCompra", async (req, res) => {
  try {
    const email = req.query.email as string;
    const datoCompra = req.body;

    let detalleCompraHTML = "";

    datoCompra.forEach(
      (compra: Componente | Monitor | Periferico | Computadora) => {
        detalleCompraHTML += `
        <div
        style="
          display: flex;
          align-items: center;
          text-align: center;
          margin: 15px;
          height: 100px;
          padding: 15px 15px;
          border-radius: 10px;
          width: fit-content;
          border: 1px solid #689108;
        "
      >
      <img style="height: 100%; margin-right: 15px" src=${compra.Imagen} />
      <p>${compra.name}</p>
      </div>
      `;
      }
    );

    let HTML = `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email</title>
  </head>
  <body>
    <div
      style="
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #5a5a5a;
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        text-align: center;
        border: none;
      "
      class="ContainerTitulo"
    >
      <h3
        style="
          letter-spacing: 5px;
          font-weight: bold;
          color: #fff;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          font-size: 40px;
          width: 100%;
          text-align: center;
        "
        class="icono-martix"
      >
        MARTI<span style="color: #96c817" class="span">X</span>
      </h3>
    </div>

    <div
      style="
        height: fit-content;
        margin-top: 100px;
        text-align: center;
        padding: 40px 25px;
      "
      class="ContainerTexto"
    >
      <h3 style="color: #30302d; font-size: 30px">
        Su Compra se elaboró con éxito!
      </h3>
      <p style="font-size: 18px; color: #000000">
        Gracias por comprar y confiar en Martix , esperamos que disfrute de su
        compra... Cualquier duda o consulta de envíos o tardanzas escriba al
        tel:(<a
          style="
            text-decoration: underline;
            color: blue;
            cursor: pointer;
            font-weight: 800;
          "
          class="LinkDeNumero"
          >+54-3517631315</a
        >) , los envios pueden tardar 24 horas hábiles o 48hs hábiles
        dependiendo de las circunstancias.
      </p>
      <h3>Detalles De su compra:</h3>
      <section
        style="
          position: absolute;
          left: 0px;
          display: block;
          align-items: center;
          background: #f1efef;
          height: 100%;
          padding: 30px 30px;
          width: 100%;
        "
      >
       ${detalleCompraHTML}
      </section>
      <br />
    </div>
    <!--------------------------------------------------->
    <!----------------------FOOTER----------------------->
    <hr />
    <main
      style="
        position: absolute;
        left: 0px;
        background-color: #5a5a5a;
        width: 100%;
        height: fit-content;
      "
      class="main"
    >
      <section
        style="
          display: flex;
          justify-content: space-between;
          padding: 40px 40px;
        "
        class="ContainerFooter"
      >
        <div style="width: fit-content; margin: 10px; text-align: center">
          <h2 style="color: #91c612; font-weight: 800">Martix</h2>
          <p style="font-size: 15px; color: #000">
            Somos una empresa familiar fundada en la ciudad de Córdoba en el año
            2011. Nuestro principal capital invertido fue esfuerzo, trabajo y el
            deseo de brindar lo maximo en tecnologia a nuestros clientes.
          </p>
        </div>
        <div style="width: fit-content; margin: 10px; text-align: center">
          <h2 style="color: #91c612; font-weight: 800">Contacto</h2>
          <p style="font-size: 15px; color: #000">
            Ventas 1: +549 3517-051999 Ventas 2: +549 351-3021777 Ventas 3: +549
            351-7668766 Servicio Técnico y RMA: +549 351-330709 Administración:
            +549 351-2412155 Email: Martixcba@gmail.com Encontranos: Catamarca
            1295 - Esquina Jacinto Rios - Barrio General Paz - Córdoba Ciudad.
          </p>
        </div>
      </section>
      <h5 style="text-align: center; font-size: 18px; color: #000">
        Copyright © 2023 - Martix. Cordoba, Argentina.
      </h5>
    </main>
  </body>
</html>
    
        `;

    await transporter.sendMail({
      from: '"Martix.com" <martixcba@gmail.com>', // el que va enviar el correo
      to: email, // para quien va a ir el corrreo electronico.
      //   subject: "Hello ✔", // Subject line
      text: "Hello world?", // texto plano
      html: HTML,
    }); // css por dentro del html
    res.status(200).send("Email Enviado Con exito");
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default NodeMailer;
