const mongoose = require ('mongoose');


const messageSchema ={
    name: String,
    email: String,
    address: String,
    addressTwo: String,
    city: String,
    state: String,
    zip: String,
    check: String
    }


module.exports = mongoose.model('My Messages', messageSchema);