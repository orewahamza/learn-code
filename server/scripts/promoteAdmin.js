const mongoose = require('mongoose');
const User = require('../models/User');
require('dotenv').config();

const emailToPromote = process.argv[2];

if (!emailToPromote) {
  console.error('❌ Please provide an email address: node promoteAdmin.js example@email.com');
  process.exit(1);
}

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/learnCode";

async function promote() {
  try {
    console.log(`📡 Connecting to MongoDB...`);
    await mongoose.connect(MONGO_URI);
    
    const normalizedEmail = emailToPromote.toLowerCase().trim();
    console.log(`🔍 Searching for user: ${normalizedEmail}`);
    
    const user = await User.findOneAndUpdate(
      { email: normalizedEmail },
      { role: 'admin' },
      { new: true }
    );
    
    if (!user) {
      console.error(`❌ User not found with email: ${normalizedEmail}`);
    } else {
      console.log(`✅ Success! ${user.name} (${user.email}) is now an ADMIN.`);
    }
    
  } catch (err) {
    console.error(`💥 Error:`, err.message);
  } finally {
    await mongoose.disconnect();
    process.exit();
  }
}

promote();
