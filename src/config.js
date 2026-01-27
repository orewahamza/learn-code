const config = {
  // Use environment variable - DO NOT have fallback for sensitive values
  API_URL: process.env.REACT_APP_API_URL || "http://localhost:5000",
  GOOGLE_CLIENT_ID: process.env.REACT_APP_GOOGLE_CLIENT_ID, // ✅ FIXED: No fallback - fail explicitly if missing
};

// ✅ FIXED: Warn if required env vars are missing
if (!config.GOOGLE_CLIENT_ID) {
  console.warn('⚠️  WARNING: REACT_APP_GOOGLE_CLIENT_ID is not set. Google OAuth will not work.');
}

export default config;
