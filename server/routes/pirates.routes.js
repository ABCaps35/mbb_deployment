const PirateController = require('../controllers/pirates.controller');

module.exports = function(app){
    app.get('/api/index', PirateController.index);
    app.get('/api/pirates/', PirateController.findAllPirates);
    app.get('/api/pirates/:id', PirateController.findPirate);
    app.post('/api/pirates/add', PirateController.addPirate);
    app.put('/api/pirates/update/:id', PirateController.updatePirate);
    app.delete('/api/pirates/delete/:id', PirateController.deletePirate);
}