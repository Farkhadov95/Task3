const crypto = require('crypto');

class ComputerData {
    static generateKey = () => crypto.randomBytes(32);
    static getHMAC = (key, message) => crypto.createHmac('SHA3-256', key).update(message).digest('hex');
    static getRandomMove = (moves) => moves[Math.floor(Math.random() * moves.length)];
}

module.exports = ComputerData;
