import express from 'express';
import multer from 'multer';
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';
import config from '../config.js';

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename(req, file, cb) {
        cb(null, `${Date.now()}.jpg`);
    },
});

const upload = multer({ storage });

const router = express.Router();

router.post('/', upload.single('image'), (req, res) => {
    console.log("got here")
    res.send(`/${req.file.path}`);
});


const s3 = new aws.S3({
    accessKeyId: config.accessKeyId,
    secretAccessKey: config.secretAccessKey,
    region: "eu-south-1"
});

const storageS3 = multerS3({
    s3,
    bucket: 'ti-store-bucket2',
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key(req, file, cb) {
        cb(null, file.originalname);
    },
});
const uploadS3 = multer({ storage: storageS3 });
router.post('/s3', uploadS3.single('image'), (req, res) => {
    console.log("to s3")
    res.send(req.file.location);
});
export default router;