#!/usr/bin/env node

/**
 * Setup script for DEEPSEA FINVEST
 * Helps initialize the project with proper configuration
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const bcrypt = require('bcryptjs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function setup() {
  console.log('\n🌊 DEEPSEA FINVEST - Project Setup\n');

  // Check if .env already exists
  const envPath = path.join(__dirname, '..', '.env');
  if (fs.existsSync(envPath)) {
    const overwrite = await question('.env file already exists. Overwrite? (y/N): ');
    if (overwrite.toLowerCase() !== 'y') {
      console.log('Setup cancelled.');
      rl.close();
      return;
    }
  }

  // Collect information
  console.log('\nPlease provide the following information:\n');

  const mongoUri = await question('MongoDB URI: ');
  const jwtSecret = await question('JWT Secret (leave empty for random): ');
  const adminUsername = await question('Admin Username (default: admin): ') || 'admin';
  const adminPassword = await question('Admin Password: ');
  const whatsappNumber = await question('WhatsApp Number (default: 919136242706): ') || '919136242706';
  const siteUrl = await question('Site URL (default: http://localhost:3000): ') || 'http://localhost:3000';

  // Generate JWT secret if not provided
  const finalJwtSecret = jwtSecret || require('crypto').randomBytes(32).toString('hex');

  // Hash admin password
  console.log('\nHashing password...');
  const passwordHash = bcrypt.hashSync(adminPassword, 10);

  // Create .env file
  const envContent = `# MongoDB Connection
MONGODB_URI=${mongoUri}

# JWT Secret for Admin Authentication
JWT_SECRET=${finalJwtSecret}

# Admin Credentials
ADMIN_USERNAME=${adminUsername}
ADMIN_PASSWORD_HASH=${passwordHash}

# WhatsApp Number
WHATSAPP_NUMBER=${whatsappNumber}

# Site URL
NEXT_PUBLIC_SITE_URL=${siteUrl}
`;

  fs.writeFileSync(envPath, envContent);

  console.log('\n✅ Setup complete!');
  console.log('\n.env file created successfully.');
  console.log('\nNext steps:');
  console.log('1. Review the .env file');
  console.log('2. Run: npm run dev');
  console.log('3. Open: http://localhost:3000\n');

  rl.close();
}

setup().catch(error => {
  console.error('Setup failed:', error);
  rl.close();
  process.exit(1);
});
