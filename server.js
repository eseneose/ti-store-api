import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import config from './config.js';
import userRoute from './routes/userRoute.js';
import productRoute from './routes/productRoute.js';
import orderRoute from './routes/orderRoute.js';
import uploadRoute from './routes/uploadRoute.js';
import cors from 'cors'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(
    import.meta.url);

const __dirname = path.dirname(__filename);

const mongodbUrl = config.MONGODB_URL
mongoose
    .connect(mongodbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,

    })
    .catch((error) => console.log(error.reason));

const app = express();
app.use(cors({
    origin: ['https://ti-store-web.onrender.com', 'http://localhost:3000']
}));
app.use(bodyParser.json());
app.use('/api/uploads', uploadRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/orders', orderRoute);

app.use('/uploads', express.static(path.join(__dirname, './uploads')));
app.use(express.static(path.join(__dirname, '/../frontend/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
});

app.listen(config.PORT, () => {
    console.log('Server started at http://localhost:5000');
});