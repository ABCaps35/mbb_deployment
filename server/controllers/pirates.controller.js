const { Pirate } = require('../models/pirate.model');

module.exports.index = (request, response) => {
    response.json({message: "Hello World"});
}

module.exports.addPirate = (request, response) => {
    const { name, image_url, number_of_chests, catchphrase, position, attributes } = request.body;
    Pirate.create({ name, image_url, number_of_chests, catchphrase, position, attributes })
        .then(pirate => response.json(pirate))
        .catch(err => response.json({ message: "Something went wrong", error: err }));
}

module.exports.findAllPirates = (request, response) => {
    Pirate.find({})
      .then(allPirates => response.json({ pirates: allPirates }))
      .catch(err => response.json({ message: "Something went wrong", error: err }));
  };
  
module.exports.findPirate = (request, response) => {
    Pirate.findOne({ _id: request.params.id })
        .then(pirate => response.json({ pirate: pirate }))
        .catch(err => response.json({ message: "Something went wrong", error: err }));
};

module.exports.updatePirate = (request, response) => {
    Pirate.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        .then(updatedPirate => response.json({ pirate: updatedPirate }))
        .catch(err => response.json({ message: "Something went wrong", error: err }));
};

module.exports.deletePirate = (request, response) => {
    Pirate.deleteOne({ _id: request.params.id })
        .then(result => response.json({ result: result }))
        .catch(err => response.json({ message: "Something went wrong", error: err }));
};