import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT;
export const MONGODB_URI = process.env.MONGODB_URI;
export const JWT_SECRET = process.env.JWT_SECRET;

export const KAFKA_BROKER = process.env.KAFKA_BROKER;
export const KAFKA_USERNAME = process.env.KAFKA_USERNAME;
export const KAFKA_PASSWORD = process.env.KAFKA_PASSWORD;