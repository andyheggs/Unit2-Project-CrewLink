// Schema to access dockwalking & networking interactions

const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({

    url: { type: String, required: true },

    title: { type: String, required: true },

    referenceNumber: { type: String },

    closingDate: { type: Date },

    status: { type: String },

    notes: { type: String },

    agency: { type: Schema.Types.ObjectId, ref: 'Agency' },

    platform: { type: Schema.Types.ObjectId, ref: 'Platform' }

});

const Job = mongoose.model("Job", JobSchema);

module.exports = Job;