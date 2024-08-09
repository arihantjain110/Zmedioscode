/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    GDRIVE_PRIVATE_KEY: process.env.GDRIVE_PRIVATE_KEY,
    GDRIVE_CLIENT_EMAIL: process.env.GDRIVE_CLIENT_EMAIL,
    GDRIVE_FOLDER_ID: process.env.GDRIVE_FOLDER_ID,
  }
}

module.exports = nextConfig
