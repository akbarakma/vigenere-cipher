const router = require('express').Router();
const Controller = require('../controllers/Controller');

router.get('/', Controller.encryptForm);
router.post('/', Controller.encrypt);

module.exports = router;