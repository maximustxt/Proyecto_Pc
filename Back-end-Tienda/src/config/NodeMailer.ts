//*------------------------ConfigurationNodeMailer:

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465, // "mas seguridad"
  secure: true, // true for 465, false for other ports
  auth: {
    user: "martixcba@gmail.com", // generated ethereal user
    pass: "ceqprqjxrhofyruo", // generated ethereal password ===> si no anda la contra uso esto ==>  "testAccount.pass"
  },
});

transporter
  .verify()
  .then((response) => console.log("NodeMailer conectado con exito"));

export default transporter;
