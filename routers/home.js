const router = require('express').Router();
const Controller = require('../controllers/Controller');


router.get('/', Controller.home);

module.exports = router;