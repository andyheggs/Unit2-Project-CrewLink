// Schema to access Crew Agencies

const mongoose = require('mongoose');

const agencySchema = new mongoose.Schema({

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

});

const Agency = mongoose.model('Agency', agencySchema);

module.exports = Agency;

