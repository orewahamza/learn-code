require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

async function makeAdmin() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
    
    const email = 'hamza.mirza20127@gmail.com';
    const user = await User.findOne({ email });
    
    if (user) {
      user.role = 'admin';
      await user.save();
      console.log(`User ${email} is now an ADMIN.`);
    } else {
      console.log(`User ${email} not found.`);
    }
    
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

makeAdmin();
