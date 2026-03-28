#!/usr/bin/env node

/**
 * Script to update admin password to plain text
 */

const mongoose = require('mongoose');

async function updateAdminPassword() {
  const mongoUri = process.env.MONGODB_URI;
  
  if (!mongoUri) {
    console.error('Error: MONGODB_URI environment variable is not set');
    process.exit(1);
  }

  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');

    // Define Admin schema
    const AdminSchema = new mongoose.Schema({
      username: { type: String, required: true, unique: true },
      password: { type: String, required: true },
    }, { timestamps: true });

    const Admin = mongoose.models.Admin || mongoose.model('Admin', AdminSchema);

    // Update or create admin with plain password
    const adminUsername = process.env.ADMIN_USERNAME || 'admin';
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';

    console.log(`Updating admin user: ${adminUsername}`);
    
    const result = await Admin.findOneAndUpdate(
      { username: adminUsername },
      { 
        username: adminUsername,
        password: adminPassword  // Plain text password
      },
      { upsert: true, new: true }
    );

    console.log('Admin user updated successfully:');
    console.log(`  Username: ${result.username}`);
    console.log(`  Password: ${result.password}`);
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

updateAdminPassword();
