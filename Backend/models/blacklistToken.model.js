const mongoose = require('mongoose');

const blacklistTokenchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAT: {
        type: Date,
        default: Date.now,
        expires: 86400 // token expires after 24 hours
    }
});

module.exports = mongoose.model('BlacklistToken', blacklistTokenchema);