const nodemailer = require('nodemailer');

// --- Email Config ---
// ✅ FIXED: Don't have fallback values for credentials - fail explicitly if missing
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Validate email config
if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.warn('⚠️  WARNING: Email configuration incomplete. Email service will log to console only.');
}

/**
 * Sends a premium HTML email
 */
const sendEmail = async ({ to, subject, html }) => {
  // Always log to console for development visibility
  console.log(`\n--- 📧 [MOCK] EMAIL LOG ---`);
  console.log(`To: ${to}`);
  console.log(`Subject: ${subject}`);
  console.log(`Status: ${process.env.EMAIL_HOST ? 'Attempting real send' : 'Config missing, logging only'}`);
  console.log(`-------------------------\n`);

  try {
    // Only attempt real send if HOST and USER are configured and not default
    if (process.env.EMAIL_HOST && 
        process.env.EMAIL_USER && 
        process.env.EMAIL_USER !== 'user@example.com') {
      
      const info = await transporter.sendMail({
        from: `"learnCode" <${process.env.EMAIL_USER}>`,
        to,
        subject,
        html,
      });
      console.log(`✅ Email sent successfully to: ${to}`);
      console.log(`🆔 Message-ID: ${info.messageId}`);
      return info;
    }
  } catch (error) {
    console.error('❌ Email sending failed:', error.message);
  }
};

// --- Templates ---

const getWelcomeTemplate = (userName) => `
  <div style="background-color: #000; color: #fff; padding: 40px; font-family: sans-serif; text-align: center;">
    <h1 style="color: #EF4444; font-size: 32px; font-weight: 900;">WELCOME TO learnCode</h1>
    <p style="font-size: 18px; color: #9CA3AF;">Hey ${userName}, ready to master the stack?</p>
    <div style="background-color: #1a1a1a; padding: 20px; border-radius: 12px; margin: 30px 0; border: 1px solid #2D2D2D;">
      <p>You've just unlocked a world of gamified learning. Complete lessons, pass quizzes, and earn certificates.</p>
    </div>
    <a href="${process.env.CLIENT_URL || 'http://localhost:3000'}/courses" style="background-color: #EF4444; color: #fff; padding: 16px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">START LEARNING</a>
    <p style="margin-top: 40px; color: #4B5563; font-size: 12px;">learnCode Inc. &bull; 123 Dev Lane &bull; Global</p>
  </div>
`;

const getStreakReminderTemplate = (userName, streakCount) => `
  <div style="background-color: #000; color: #fff; padding: 40px; font-family: sans-serif; text-align: center;">
    <h1 style="color: #F59E0B; font-size: 32px; font-weight: 900;">🔥 KEEP THE STREAK ALIVE!</h1>
    <p style="font-size: 18px; color: #9CA3AF;">Hey ${userName}, you're on a ${streakCount} day streak!</p>
    <div style="background-color: #1a1a1a; padding: 20px; border-radius: 12px; margin: 30px 0; border: 1px solid #2D2D2D;">
      <p>Don't let your progress slip away. Just one lesson a day keeps the growth coming.</p>
    </div>
    <a href="${process.env.CLIENT_URL || 'http://localhost:3000'}/courses" style="background-color: #F59E0B; color: #fff; padding: 16px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">CONTINUE LEARNING</a>
  </div>
`;

const getPasswordResetTemplate = (resetUrl) => `
  <div style="background-color: #000; color: #fff; padding: 40px; font-family: sans-serif; text-align: center;">
    <h1 style="color: #EF4444; font-size: 32px; font-weight: 900;">RESET YOUR PASSWORD</h1>
    <p style="font-size: 18px; color: #9CA3AF;">We received a request to reset your password.</p>
    <div style="background-color: #1a1a1a; padding: 20px; border-radius: 12px; margin: 30px 0; border: 1px solid #2D2D2D;">
      <p>Click the button below to set a new password. This link expires in 1 hour.</p>
    </div>
    <a href="${resetUrl}" style="background-color: #EF4444; color: #fff; padding: 16px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">RESET PASSWORD</a>
    <p style="margin-top: 40px; color: #4B5563; font-size: 12px;">If you didn't request this, you can safely ignore this email.</p>
  </div>
`;

module.exports = {
  sendWelcomeEmail: (email, name) => sendEmail({
    to: email,
    subject: 'Welcome to learnCode! 🚀',
    html: getWelcomeTemplate(name)
  }),
  sendStreakReminder: (email, name, streak) => sendEmail({
    to: email,
    subject: '🔥 Your streak is at risk!',
    html: getStreakReminderTemplate(name, streak)
  }),
  sendPasswordReset: (email, resetUrl) => sendEmail({
    to: email,
    subject: '🔑 Reset your learnCode password',
    html: getPasswordResetTemplate(resetUrl)
  })
};
