const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HuM51GaoBQnq1OWy9RCEWq51z7pmTlCWPmPmNkpv3lA6FZID0aBYTg32ArWKFiLm3vEzguDF9rDOxyNUaNctf5D00HRoPVSIK"
);

// API

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (req, res) => {
  res.status(200).send("hello");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment request received >>>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "GBP",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/ama-zon-clone-firebase-react/us-central1/api
