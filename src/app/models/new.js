const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const New = new Schema({
    name: { type: String, maxLength: 255 },
    phone: { type: String, maxLength: 20 },
    img: { type: String, maxLength: 255 },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('New', New);
