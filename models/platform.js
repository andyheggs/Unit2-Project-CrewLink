// Schema to access Crew employment platforms & jobs

const mongoose = require('mongoose');

const PlatformSchema = new mongoose.Schema({

    name: { type: String, required: true },

    profileLoginUrl: { type: String, required: true },

    contactNumber: { type: String },

    jobs: [{ type: Schema.Types.ObjectId, ref: 'Job' }]

});

const Platform = mongoose.model("Platform", PlatformSchema);

module.exports = Platform;
