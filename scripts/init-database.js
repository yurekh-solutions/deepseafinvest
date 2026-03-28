const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI || 'mongodb+srv://deepseafinvest:sonia%402706@deepseafinvest.hwuu8ed.mongodb.net/?appName=deepseafinvest';

async function initDatabase() {
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    console.log('✅ Connected to MongoDB Atlas');
    
    const db = client.db('deepseafinvest');
    
    // Check if leads collection exists
    const collections = await db.listCollections({ name: 'leads' }).toArray();
    
    if (collections.length === 0) {
      console.log('📁 Creating "leads" collection...');
      await db.createCollection('leads');
      console.log('✅ "leads" collection created successfully');
      
      // Insert a sample lead
      const sampleLead = {
        name: 'Sample Lead',
        email: 'sample@example.com',
        phone: '+91 9876543210',
        source: 'website',
        status: 'new',
        message: 'This is a sample lead for testing',
        pageSource: '/contact',
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      await db.collection('leads').insertOne(sampleLead);
      console.log('✅ Sample lead inserted');
    } else {
      console.log('✅ "leads" collection already exists');
      
      // Check if there are any leads
      const count = await db.collection('leads').countDocuments();
      console.log(`📊 Current leads count: ${count}`);
      
      if (count === 0) {
        // Insert a sample lead
        const sampleLead = {
          name: 'Sample Lead',
          email: 'sample@example.com',
          phone: '+91 9876543210',
          source: 'website',
          status: 'new',
          message: 'This is a sample lead for testing',
          pageSource: '/contact',
          createdAt: new Date(),
          updatedAt: new Date()
        };
        
        await db.collection('leads').insertOne(sampleLead);
        console.log('✅ Sample lead inserted');
      }
    }
    
    // Create indexes for better performance
    console.log('🔍 Creating indexes...');
    await db.collection('leads').createIndex({ email: 1 });
    await db.collection('leads').createIndex({ status: 1 });
    await db.collection('leads').createIndex({ createdAt: -1 });
    console.log('✅ Indexes created');
    
    console.log('\n🎉 Database initialization complete!');
    console.log('You can now:');
    console.log('  1. Submit leads through your website');
    console.log('  2. View leads in MongoDB Compass');
    console.log('  3. Manage leads in admin dashboard');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  } finally {
    await client.close();
    console.log('🔌 Connection closed');
  }
}

initDatabase();
