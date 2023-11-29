const mongoose = require('mongoose');

// NEW DB, OBJECT CONSTRUCTOR
const UserSchema = new mongoose.Schema({ 
    name: {type: String},
    age: {type: Number}
});

//MODEL IS CREATED USING USER COLLECTION & USERSCHEMA SCHEMA
const User = mongoose.model('User', UserSchema); 

module.exports = User;
