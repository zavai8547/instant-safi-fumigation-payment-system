// utils/accessToken.js
const axios = require("axios");
require("dotenv").config();

async function getAccessToken() {
  const { CONSUMER_KEY, CONSUMER_SECRET } = process.env;
  const auth = Buffer.from(`${CONSUMER_KEY}:${CONSUMER_SECRET}`).toString("base64");

  const response = await axios.get(
    "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
    {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    }
  );

  return response.data.access_token;
}

module.exports = getAccessToken;
