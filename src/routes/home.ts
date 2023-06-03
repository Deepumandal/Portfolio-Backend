import express, { Request, Response, Router } from "express"
import { sociaFileService } from "../controller/homs.controller";
import multer from "multer";
import path from "path"
import configuration from "../config";



const homeRoute: Router = express.Router()


// homeRoute active 
//  ----> basic details  route --------------------------------   
homeRoute.post('/social', sociaFileService)

// test routes ------------------------
homeRoute.get('/', (request: Request, response: Response) => {
    response.send("this is a test")
})


// post avatar images here 

// storate path ----------------
const storagePath = multer.diskStorage({
    destination: "src/assets/social_images",
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
})

const uploadFile = multer({ storage: storagePath })



homeRoute.post('/avatar', uploadFile.single('image'), (request: Request, response: Response) => {
    if (!request.file) {
        response.status(400).json({ error: 'No file uploaded' });
    } else {
        const filePath = request.file.filename;
        console.log("filePath", request.file.filename);
        const fileUrl = `${configuration().BasePathUrl}/api/images/social_images/${filePath}`;
        response.json({ fileUrl });
    }
})



export default homeRoute;