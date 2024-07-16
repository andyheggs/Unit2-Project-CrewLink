const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({

  email: { type: String, required: true, unique: true },

  password: { type: String, required: true },

  agencies: [{ type: Schema.Types.ObjectId, ref: 'Agency' }],

  platforms: [{ type: Schema.Types.ObjectId, ref: 'Platform' }]

});

const User = mongoose.model("User", UserSchema);

module.exports = User;
