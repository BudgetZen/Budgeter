/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const app = express();

app.get('/', (req, res) => {
  logger.info("hi");
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>world lol p</title>
  </head>
  <body>
    <h1>hi!</h1>
  </body>
  </html>
  `);
});

exports.app = onRequest(app);
