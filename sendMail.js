const nodemailer = require("nodemailer")
require("dotenv").config();

const transporter = nodemailer.createTransport({
    service:'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.USER,
        pass: process.env.APP_PASSWORD,
    },
});

const mailOptions = {
    from: {
        name: 'Teste Arthur',
        address: process.env.EMAIL
    }, //sender
    to: ["showzin048@gmail.com"],
    subject: "Send email from GMAIL SMTP", // assunto do email
    text: "Send email from GMAIL SMTP", // corpo do email com texto
    html: "<b>Hello World?<b>", // corpo do email com HTML
};

// fUNÇÃO PARA O ENVIO DO EMAIL
const sendMail = async (transporter, mailOptions) => {

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email has been sent');
    } catch(error) {
        console.log(error)

    }

};

sendMail(transporter, mailOptions)