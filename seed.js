/*
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/user');
const Agency = require('./models/agency');
const Platform = require('./models/platform');
const Job = require('./models/job');

// Load environment variables from .env file
require('dotenv').config();

// Connect to the database 
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Database connected');
    seed();
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });

// Seed data
async function seed() {
  try {

    // Create test agencies
    const agency1 = await Agency.create({
      name: 'Crew Agency 1',
      profileLoginUrl: 'http://crewagency1.com/login',
      agentName: 'Agent 1',
      agentEmail: 'agent1@crewagency1.com',
      agentTelNo: '123-456-7890',
      streetAddress: '123 Crew St',
      city: 'Crew City',
      country: 'Crew Country',
      contactNumber: '123-456-7890',
      operatingHours: '9AM - 5PM'
    });

    const agency2 = await Agency.create({
      name: 'Crew Agency 2',
      profileLoginUrl: 'http://crewagency2.com/login',
      agentName: 'Agent 2',
      agentEmail: 'agent2@crewagency2.com',
      agentTelNo: '098-765-4321',
      streetAddress: '456 Yacht Blvd',
      city: 'Yacht City',
      country: 'Yacht Country',
      contactNumber: '098-765-4321',
      operatingHours: '8AM - 6PM'
    });

    // Create test platforms
    const platform1 = await Platform.create({
      name: 'Platform 1',
      profileLoginUrl: 'http://platform1.com/login',
      contactNumber: '111-222-3333'
    });

    const platform2 = await Platform.create({
      name: 'Platform 2',
      profileLoginUrl: 'http://platform2.com/login',
      contactNumber: '444-555-6666'
    });

    // Create test jobs
    const job1 = await Job.create({
      url: 'http://job1.com',
      title: 'Job Title 1',
      referenceNumber: 'JOB123',
      closingDate: new Date('2023-12-31'),
      status: 'Open',
      notes: 'This is a note for Job 1',
      agency: agency1._id
    });

    const job2 = await Job.create({
      url: 'http://job2.com',
      title: 'Job Title 2',
      referenceNumber: 'JOB456',
      closingDate: new Date('2024-01-31'),
      status: 'Closed',
      notes: 'This is a note for Job 2',
      platform: platform1._id
    });

    // Hash the password
    const hashedPassword = bcrypt.hashSync('password123', 12);

    // Create test user
    const user = await User.create({
      username: 'testuser@example.com',
      password: hashedPassword,
      agencies: [agency1._id, agency2._id],
      platforms: [platform1._id, platform2._id]
    });

    console.log('Database seeded successfully');
  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    mongoose.connection.close();
  }
}

*/
