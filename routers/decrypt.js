const router = require('express').Router();
const Controller = require('../controllers/Controller');


router.get('/', Controller.decryptForm);
router.post('/', Controller.decrypt);


module.exports = router;