const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');

const uri = process.env.MONGODB_URI || 'mongodb+srv://deepseafinvest:sonia%402706@deepseafinvest.hwuu8ed.mongodb.net/?appName=deepseafinvest';

async function createAdmin() {
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    console.log('✅ Connected to MongoDB Atlas');
    
    const db = client.db('deepseafinvest');
    
    // Check if admins collection exists
    const collections = await db.listCollections({ name: 'admins' }).toArray();
    
    if (collections.length === 0) {
      console.log('📁 Creating "admins" collection...');
      await db.createCollection('admins');
      console.log('✅ "admins" collection created');
    }
    
    // Check if admin user already exists
    const existingAdmin = await db.collection('admins').findOne({ username: 'admin' });
    
    if (existingAdmin) {
      console.log('⚠️ Admin user already exists');
      console.log('📝 Updating password...');
      
      // Update password
      const hashedPassword = await bcrypt.hash('admin123', 10);
      await db.collection('admins').updateOne(
        { username: 'admin' },
        { 
          $set: { 
            password: hashedPassword,
            updatedAt: new Date()
          } 
        }
      );
      console.log('✅ Admin password updated');
    } else {
      // Create admin user with hashed password
      const hashedPassword = await bcrypt.hash('admin123', 10);
      
      const adminUser = {
        username: 'admin',
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      await db.collection('admins').insertOne(adminUser);
      console.log('✅ Admin user created successfully');
    }
    
    console.log('\n🎉 Admin Credentials:');
    console.log('   Username: admin');
    console.log('   Password: admin123');
    console.log('\nYou can now login to the admin dashboard!');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  } finally {
    await client.close();
    console.log('🔌 Connection closed');
  }
}

createAdmin();
