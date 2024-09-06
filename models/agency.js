const mongoose = require('mongoose');

// Define a new schema for the 'Agency' model
const agencySchema = new mongoose.Schema({
  name: { type: String, required: true }, // The name of the agency, required field
  profileLoginUrl: { type: String, required: true }, // The URL for the agency's profile login, required field
  agentName: { type: String }, // The name of the agent associated with the agency
  agentEmail: { type: String }, // The email address of the agent
  agentTelNo: { type: String }, // The telephone number of the agent
  streetAddress: { type: String }, // The street address of the agency
  city: { type: String }, // The city where the agency is located
  country: { type: String }, // The country where the agency is located
  contactNumber: { type: String }, // The contact number for the agency
  operatingHours: { type: String }, // The operating hours of the agency
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true } // Reference to the owning user, required field
});

// Create the 'Agency' model using the schema defined above
const Agency = mongoose.model('Agency', agencySchema);

// Export the 'Agency' model to make it available for import in other files
module.exports = Agency;

