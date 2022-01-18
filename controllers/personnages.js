const personnagesData = require('../models/personnages')

function getPersonnages() {
    return personnagesData.map(({ id, name, description, picture }) => ({
        id,
        name,
        description,
        picture
    }))
}

module.exports = getPersonnages
