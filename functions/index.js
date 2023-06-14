/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onCall} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const {Resend} = require("resend")
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started


exports.helloWorld = onCall((request) => {
  logger.info("Hello logs!", {structuredData: true});

  const resend = new Resend('re_DxW8bZsG_LwufhXyEuctf17zBkDMFWSeU');

  resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'jake@indiestack.xyz',
    subject: 'Hello World',
    html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
  });
  return {
    message: 'Email sent!'
  }
})