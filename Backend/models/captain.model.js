const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [6, 'Firstname must be at least 6 characters'],
        },
        lastname: {
            type: String,
            minlength: [6, 'Lastname must be at least 6 characters'],
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketID: {
        type: String,
    },

    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },

    vehical: {
        color: {
            type: String,
            required: true,
            minlength: [6, 'Color must be at least 6 characters'],
    },
    plate: {
        type: Number,
        required: true,
        minlength: [3, 'Plate number must be at least 3 characters'],
    },
    capacity:{
        type: Number,
        required: true,
        min: [ 1, 'Capacity must be at least 1'],
    },
    vehicalType: {
        type: String,
        required: true,
        enum: [ 'car', 'motorcycle', 'auto'],
    }
    },

    location: {
    ltd: {
        type: Number,
    },
    lng: {
        type: Number,
    }
    }
})


userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}


userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}


userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10);
}

const captainModel = mongoose.mode('captain', captainSchema);


module.exports = captainModel;