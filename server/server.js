import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  pool: true,
  host: process.env.NODEMAILER_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.NODEMAILER_AUTH_USER,
    pass: process.env.NODEMAILER_AUTH_PASS,
  },
  tls: {
    ciphers: 'SSLv3',
  },
});

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  let body = 
`<div style="background-color: #F5F5F5; font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; font-size: 16px; line-height: 1.5; color: #333333; margin: 0; padding: 50px;">
    <div style="text-align: center;">
        <a href="${ process.env.FRONTEND_DEPLOY_URL}" style="display: inline-block; font-size: 1.5em; font-weight: bold; color: #007BFF; text-decoration: none;">Bohater Construction</a>
    </div>
    <h2 style="font-size: 1.2em; margin-top: 0; margin-bottom: 0.5em;">A new message from: ${name ?? 'Client'}</h2>
    <h3 style="font-size: 1.2em; margin-top: 0; margin-bottom: 0.5em;">Contact email address: 
        <a href="mailto:${email}" style="color: #007BFF;">${email}</a>
    </h3>
    <p style="margin-block: 0; font-size: 1.2em; color: #000;">Message:</p>   
    <p style="margin-top: 0; font-size: 1.2em; color: #000;">${message}</p>   
    <hr style="margin-top: 2em; border: 1px solid #D3D3D3;" />
    <p style="font-size: 1em; margin-top: 0;">Email generated from site 
        <a href="${ process.env.FRONTEND_DEPLOY_URL}" style="color: #007BFF; text-decoration: none;">Bohater Construction</a>
    </p>
</div>`;

  const mailOptions = {
    from: process.env.NODEMAILER_FROM_MAIL,
    to: process.env.PAGE_OWNER_EMAIL,
    subject: `New message from ${name}`,
    html: body,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log(`Email sent to: ${process.env.PAGE_OWNER_EMAIL}`);
      console.log('Info: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});