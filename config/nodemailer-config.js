const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

require("dotenv").config();

const oauth2Client = new OAuth2(
  process.env.GOOGLE_OAUTH2_ID,
  process.env.GOOGLE_OAUTH2_SECRET,
  "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_OAUTH2_REFRESH_TOKEN,
});

const accessToken = oauth2Client.getAccessToken();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.SMTP_USER,
    clientId: process.env.GOOGLE_OAUTH2_ID,
    clientSecret: process.env.GOOGLE_OAUTH2_SECRET,
    refreshToken: process.env.GOOGLE_OAUTH2_REFRESH_TOKEN,
    accessToken: accessToken,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

module.exports = transporter;
