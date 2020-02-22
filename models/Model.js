class Model {
    constructor(message, passphrase) {
        this.message = message;
        this.passphrase = passphrase;
        this.encryptedMessage = null;
        this.decryptedMessage = null;
    }
    createTable() {
        let abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let table = [];
        for (let i = 0; i < 26; i++) {
            let temp = [];
            for (let j = 0; j < 26; j++) {
                temp.push(abjad[j + i]);
            }
            table.push(temp);
        }
        return table;
    }
    makePassphrase() {
        let key = '';
        let index = 0;
        let i = 0;
        while (i < this.message.length) {
            key += this.passphrase[index];
            if (index === this.passphrase.length - 1) {
                index = 0;
            } else {
                index++;
            }
            i++
        }
        return key;
    }
    encryptMessage() {
        let table = this.createTable();
        let key = this.makePassphrase();
        let abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let encryptedMessage = '';
        for (let i = 0; i < this.message.length; i++) {
            let indexI = abjad.indexOf(this.message[i]);
            let indexJ = abjad.indexOf(key[i]);
            encryptedMessage += table[indexI][indexJ];
        }
        this.encryptedMessage = encryptedMessage;
    }
    decryptMessage() {
        let table = this.createTable();
        let key = this.makePassphrase();
        let abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let decryptedMessage = '';
        for (let i = 0; i < this.message.length; i++) {
            let indexJ = abjad.indexOf(key[i]);
            for (let j = 0; j < table.length; j++) {
                if (table[j][indexJ] === this.message[i]) {
                    decryptedMessage += table[j][0];
                    break;
                }
            }
        }
        this.decryptedMessage = decryptedMessage;
    }
    static encrypt(message, passphrase) {
        return new Promise((resolve, reject) => {
            let data = new Model(message, passphrase);
            data.encryptMessage();
            resolve(data.encryptedMessage);
        });
    }
    static decrypt(message, passphrase) {
        return new Promise((resolve, reject) => {
            let data = new Model(message, passphrase);
            data.decryptMessage();
            resolve(data.decryptedMessage);
        });
    }
}

module.exports = Model;