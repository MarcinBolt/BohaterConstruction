import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const port = 3000;
const apiEndpoint = process.env.VITE_API_ENDPOINT;

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

const baseUrl =
  process.env.NODE_ENV === 'development'
    ? `${process.env.BOHATER_FRONTEND_DEPLOY_URL}`
    : `${process.env.BOHATER_FRONTEND_FINAL_DEPLOY_URL}`;

const PageOwner = "Bohater Construction";

app.post(apiEndpoint, (req, res) => {
  const { name, email, message, sendCopyToClient } = req.body;

  let body = `<div style="background-color: #F5F5F5; font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; font-size: 16px; line-height: 1.5; color: #333333; margin: 0; padding: 50px;">
    <div style="text-align: center;">
        <a href="${baseUrl}" style="display: inline-block; font-size: 1.5em; font-weight: bold; color: #007BFF; text-decoration: none;">Bohater Construction</a>
    </div>
    <h2 style="font-size: 1.2em; margin-top: 0; margin-bottom: 0.5em;">A new message from: ${
      name ?? 'Client'
    }</h2>
    <h3 style="font-size: 1.2em; margin-top: 0; margin-bottom: 0.5em;">Contact email address: 
        <a href="mailto:${email}" style="color: #007BFF;">${email}</a>
    </h3>
    <p style="margin-block: 0; font-size: 1.2em; color: #000;">Message:</p>   
    <p style="margin-top: 0; font-size: 1.2em; color: #000;">${message}</p>   
    <hr style="margin-top: 2em; border: 1px solid #D3D3D3;" />
    <p style="font-size: 1em; margin-top: 0;">Email generated from site 
        <a href="${baseUrl}" style="color: #007BFF; text-decoration: none;">Bohater Construction</a>
    </p>
</div>`;

  let clientCopyBody = `<div style="background-color: #F5F5F5; font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; font-size: 16px; line-height: 1.5; color: #333333; margin: 0; padding: 50px;">
    <div style="text-align: center;">
        <a href="${baseUrl}" style="display: inline-block; font-size: 1.5em; font-weight: bold; color: #007BFF; text-decoration: none;">${PageOwner}</a>
    </div>
    <h2 style="font-size: 1.2em; margin-top: 0; margin-bottom: 0.5em; color: #000;">Your Message:</h2>
    <p style="margin-top: 0; font-size: 1.2em; color: #000;">${message}</p>   
    <hr style="margin-top: 2em; border: 1px solid #D3D3D3;" />
    <p style="font-size: 1em; margin-top: 0;">Email generated from site 
        <a href="${baseUrl}" style="color: #007BFF; text-decoration: none;">${PageOwner}</a>
    </p>
    <p style="font-size: 1em; margin-top: 0;">Do you have any questions? Send me an email at: 
    <a href="mailto:${process.env.BOHATER_PAGE_OWNER_EMAIL}" style="color: #007BFF;">${process.env.BOHATER_PAGE_OWNER_EMAIL}</a>
        </p>
</div>`;

  const emailOptions = {
    from: process.env.NODEMAILER_FROM_MAIL,
    to: process.env.BOHATER_PAGE_OWNER_EMAIL,
    subject: `New message from ${name}`,
    html: body,
  };

  const copyToClientEmailOptions = {
    from: process.env.NODEMAILER_FROM_MAIL,
    to: email,
    subject: `Copy of message sended from ${PageOwner}`,
    html: clientCopyBody,
  };

  transporter.sendMail(emailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log(`Email sent to: ${process.env.BOHATER_PAGE_OWNER_EMAIL}`);
      console.log('Info: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });

  if (sendCopyToClient) {
    transporter.sendMail(copyToClientMailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send('Error sending copy to client email');
      } else {
        console.log(`Email sent to: ${process.env.BOHATER_PAGE_OWNER_EMAIL}`);
        console.log('Info: ' + info.response);
        res.status(200).send('Copy of message sent to Client Email successfully');
      }
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
