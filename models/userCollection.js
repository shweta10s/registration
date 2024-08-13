const mongoose = require('mongoose');

const userCollection = mongoose.Schema({
    firstname: {
        type: String,
        trim: true
    },
    lastname: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        unique: true
    },
    phone: {
        type: Number,
        trim: true,
        unique: true
    },
    gender: {
        type: String,
    },
    age: {
        type: Number,
        trim: true
    },
    password: {
        type: String,
    },
    confirmPassword: {
        type: String,
    },
})

// now we need to create a collection and model from the schema

const User = new mongoose.model('User', userCollection);

module.exports = User;

// in the above code, User is the name of the collection and userCollection is the schema.