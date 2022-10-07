import dotenv from 'dotenv';

dotenv.config();

export default {
    PORT: process.env.PORT,
    MONGODB_URL: process.env.MONGODB_URL, // || "mongodb://localhost/amazona"
    JWT_SECRET: process.env.JWT_SECRET,

    testSecretKey: process.env.secretAccessKey,
    testPublicKey: process.env.secretAccessKey,

    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
};