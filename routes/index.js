var express = require('express');
var router = express.Router();

const getPersonnages = require('../controllers/personnages');
const getPersonnage = require('../controllers/personnage')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/personnage', function (req, res) {
  const { id } = req.query
  const personnageData = getPersonnage(id)
  if (!personnageData) {
    res.status(400).send('Not found.')
  } else {
    res.send({ personnageData })
  }
})

router.get('/personnages', function (req, res, next) {
  const personnagesList = getPersonnages()
  res.send({ personnagesList })
})

module.exports = router;
