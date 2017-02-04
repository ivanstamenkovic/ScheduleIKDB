/**
 * Created by Ivan on 2/4/2017.
 */


const mongoose = require('mongoose');

let UserSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    verified: Boolean,
    token: String
});

User = mongoose.model('User',UserSchema);

module.exports=User;