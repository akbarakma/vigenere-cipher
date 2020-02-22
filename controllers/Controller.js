const Model = require('../models/Model');

class Controller {
    static home(req, res) {
        res.render('home')
    }
    static encryptForm(req, res) {
        res.render('encrypt');
    }
    static decryptForm(req, res) {
        res.render('decrypt');
    }
    static encrypt(req, res) {
        //message , passphrase
        Model.encrypt(req.body.message, req.body.passphrase)
            .then(data => {
                res.send(data); // ini datanya yang udah ke enkripsi
            })
    }
    static decrypt(req, res) {
        //message , passphrase
        Model.decrypt(req.body.message, req.body.passphrase)
            .then(data => {
                res.send(data); // ini datanya yang udah ke dekripsi
            })
    }
}

module.exports = Controller;