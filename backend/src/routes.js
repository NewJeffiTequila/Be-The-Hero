const express = require('express');
const OngContrller = require('./controllers/OngController');
const SessionController = require('./controllers/SessionController');
const ProfileController = require('./controllers/ProfileController');
const IncidentController = require('./controllers/IncidentController');


const routes = express.Router()

routes.get('/ongs', OngContrller.index);
routes.post('/ongs', OngContrller.create);

routes.post('/sessions', SessionController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);



module.exports = routes;