const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({

  username: { type: String, required: true },

  password: { type: String, required: true },

  agencies: [{ type: Schema.Types.ObjectId, ref: 'Agency' }],

  platforms: [{ type: Schema.Types.ObjectId, ref: 'Platform' }]

});

const User = mongoose.model('User', userSchema);

module.exports = User;
