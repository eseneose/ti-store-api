import dotenv from 'dotenv';

dotenv.config();

export default {
    PORT: process.env.PORT || 5000,
    MONGODB_URL: process.env.MONGODB_URL || "mongodb://localhost/amazona", //|| 'mongodb+srv://easyitpro:Felicita1991.@cluster1.x8ihjhq.mongodb.net/TI-store?retryWrites=true&w=majority',
    JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',

    testSecretKey: process.env.secretAccessKey || 'sk_test_93b5e95abf19c111143afedf4c56cab4a4ea94a8',
    testPublicKey: process.env.secretAccessKey || 'pk_test_ebe630f107b9c2959dc3cfd24c1e6de3ee12e202',

    accessKeyId: process.env.accessKeyId || 'AKIASQSGHEKKBUGVDCKP',
    secretAccessKey: process.env.secretAccessKey || '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',
};