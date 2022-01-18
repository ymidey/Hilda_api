const personnagesData = require('../models/personnages')

function getPersonnage(id) {
    return personnagesData.find((freelancer => freelancer.id === id))
}

module.exports = getPersonnage
