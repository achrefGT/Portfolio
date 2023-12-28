// Import des modules nécessaires
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Contact = require('./models/contacts'); // Import du modèle de données
const bodyParser = require('body-parser');

// Initialisation de l'application Express
const app = express();
app.use(express.json()); // Middleware pour parser les données JSON
app.use(bodyParser.urlencoded({ extended: true })); // Middleware pour parser les données du formulaire
app.use(express.static(path.join(__dirname, 'public'))); // Middleware pour servir les fichiers statiques

// Connexion à la base de données MongoDB à l'aide de Mongoose
mongoose.connect('mongodb+srv://achref:achref2001@cluster0.ikmoovc.mongodb.net/portfolioDB?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// Configuration des CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Route POST pour gérer les données du formulaire de contact
app.post('/', async (req, res) => {
  const contact = new Contact({ // Création d'une nouvelle instance du modèle Contact
    ...req.body // Extraction des données du corps de la requête
  });

  try {
    await contact.save(); // Sauvegarde du contact dans la base de données
    res.status(201).redirect('/'); // Redirection après la sauvegarde réussie
  } catch (error) {
    res.status(400).json({ error }); // Gestion des erreurs
  }
});

// Export de l'application Express
module.exports = app;
