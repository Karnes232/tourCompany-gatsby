const nodemailer = require("nodemailer")

let mailTransporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true, // use SSL
  auth: {
    user: `${process.env.EMAIL_USER}`,
    pass: `${process.env.EMAIL_PASSWORD}`,
  },
})

export default function handler(req, res) {
  let mailDetails = {
    from: "grandbay.puntacana@zohomail.com",
    to: `${req.body.payer.email_address}`,
    subject: "Test mail",
    text: `Hello ${req.body.payer.name.given_name} ${req.body.payer.name.surname}`,
    html: `<h1>Hello ${req.body.payer.name.given_name} ${req.body.payer.name.surname}</h1>
        <p>You have successfully paid $${req.body.amount}</p>
        <p>Thank you for choosing us!</p>`,
  }

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log(err)
    } else {
      console.log("Email sent successfully")
    }
  })

  res.status(200).json({ hello: `world` })
}
