const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  // eslint-disable-next-line max-len
  "sk_test_51J4oiYSAoDl1D98SSpY1hs04lsUHQw7KJJnQC5tJNW1e5mN7CLH2rbYPYPJielecMg6koGhkf54E0Hd89wrrJjxe00Sd74uU8B"
);

// App config
const app = express();

// Middlewares
// eslint-disable-next-line object-curly-spacing
app.use(cors({ origin: true }));
app.use(express.json());
// API route
app.get("/", (request, response) => response.status(200).send("hello world"));
app.get("/iKhan", (request, response) =>
  response.status(200).send("Whats up Ibraj khan your app backend is running")
);

exports.api = functions.https.onRequest(app);

// Example EndPoints
// http://localhost:5001/app-ae3b3/us-central1/api
