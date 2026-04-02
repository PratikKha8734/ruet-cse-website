import dotenv from 'dotenv';
dotenv.config();

export const env = {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ruet_academic_portal',
  jwtSecret: process.env.JWT_SECRET || 'dev_secret',
  clientUrl: process.env.CLIENT_URL || 'http://localhost:5173',
};
