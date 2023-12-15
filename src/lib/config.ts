// Define configuration object
const config = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api",
  devWallet: process.env.NEXT_PUBLIC_DEV_WALLET,
};

// Export the configuration object
export default config;
