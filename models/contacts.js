const mongoose = require('mongoose');

// Définition du schéma MongoDB pour le modèle Contact
const contactSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: false },
});

// Création du modèle Contact à partir du schéma
module.exports = mongoose.model('Contact', contactSchema);
