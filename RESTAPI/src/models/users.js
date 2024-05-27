const mongoose = require('mongoose');

const User = mongoose.model('User', {
    name: String,
    email: String,
    isMinor: Boolean,
    phone: Number,
    password: String
});

module.exports=User;