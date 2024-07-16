// Schema to access Crew Agencies

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AgencySchema = new mongoose.Schema({

    name: { type: String, required: true },

    profileLoginUrl: { type: String, required: true },

    agentName: { type: String },

    agentEmail: { type: String },

    agentTelNo: { type: String },

    streetAddress: { type: String },

    city: { type: String },

    country: { type: String },

    contactNumber: { type: String },

    operatingHours: { type: String },

    jobs: [{ type: Schema.Types.ObjectId, ref: 'Job' }]

});

const Agency = mongoose.model("Agency", AgencySchema);

module.exports = Agency;

