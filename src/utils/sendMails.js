const ejs = require("ejs");
const path = require("path");
const transporter = require("./mailer");
require("dotenv").config();

const sendMail = (email, doc, attachments) => {
  transporter
    .sendMail({
      from: process.env.G_USER,
      to: email,
      subject: "Bienvenido",
      text: "Bienvenido al sistema de aplicacion de trabajo",
      html: doc,
      attachments,
    })
    .then(() => console.log("mensaje enviado"))
    .catch((error) => console.log(error));
};

const sendWelcomeMail = async (email, data) => {
  const filePath = path.join(__dirname, "../views/mails/Confirmation/confirmacion.ejs");
  const doc = await ejs.renderFile(filePath, data);
  console.log(data)

  const attachments = [
    {
      filename: "onde.png",
      path: path.join(__dirname, "../views/mails/Confirmation/onde.png"),
      cid: "onde",
    }
  ];

  sendMail(email, doc, attachments);
};

const sendResetMail = async (email, data) => {
  const filePath = path.join(__dirname, "../views/mails/Confirmation/resetpass.ejs");
  const doc = await ejs.renderFile(filePath, data);

  const attachments = [
    {
      filename: "onde.png",
      path: path.join(__dirname, "../views/mails/Confirmation/onde.png"),
      cid: "onde",
    }
  ];

  sendMail(email, doc, attachments);
}

const sendChangePassMail = async (email, data) => {
  const filePath = path.join(__dirname, "../views/mails/Confirmation/changepass.ejs");
  const doc = await ejs.renderFile(filePath, data);

  const attachments = [
    {
      filename: "onde.png",
      path: path.join(__dirname, "../views/mails/Confirmation/onde.png"),
      cid: "onde",
    }
  ];

  sendMail(email, doc, attachments);
}



module.exports = {
  sendWelcomeMail,
  sendResetMail,
  sendChangePassMail
};
