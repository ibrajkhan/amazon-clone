const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51J4oiYSAoDl1D98SSpY1hs04lsUHQw7KJJnQC5tJNW1e5mN7CLH2rbYPYPJielecMg6koGhkf54E0Hd89wrrJjxe00Sd74uU8B"
);

// App config
const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

exports.api = functions.https.onRequest(app);
