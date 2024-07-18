// Schema to access Crew employment platforms & jobs

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const platformSchema = new mongoose.Schema({

    name: { type: String, required: true },

    profileLoginUrl: { type: String, required: true },

    contactNumber: { type: String },

    jobs: [{ type: Schema.Types.ObjectId, ref: 'Job' }]

});

const Platform = mongoose.model('Platform', platformSchema);

module.exports = Platform;
