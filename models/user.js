const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

  email: { type: String, required: true, unique: true },

  password: { type: String, required: true },

  agencies: [{ type: Schema.Types.ObjectId, ref: 'agency' }],

  platforms: [{ type: Schema.Types.ObjectId, ref: 'platform' }]

});

const User = mongoose.model("User", UserSchema);

module.exports = User;
