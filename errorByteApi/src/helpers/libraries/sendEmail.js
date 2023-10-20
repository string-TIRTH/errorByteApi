import nodemailer from "nodemailer"

const sendMail = async (mailOptions) => {
    const transporter = nodemailer.createTransport({
        port: 465,               // true for 465, false for other ports
        host: "smtp.gmail.com",
        auth: {
            user: 'bookmyservices.one@gmail.com',
            pass: 'dpxtivjexdkxucvq',
        },
        secure: true,
    });

    let info = await transporter.sendMail(mailOptions)
    console.log(`Message send: ${info.messageId}`)
}

export default sendMail