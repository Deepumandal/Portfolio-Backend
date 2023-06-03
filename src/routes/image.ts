import express, { Request, Router, response } from 'express';
import path from 'path';
const imageRoute: Router = express.Router()


// expose social accounts routes 

const sociaFileService = path.join(__dirname, '../assets/social_images');

imageRoute.use("/social_images", express.static(sociaFileService))



export default imageRoute


// reference

// // expose the file to frontend
// const staticFolderPath = path.join(__dirname, '/assets/social_images');

// console.log("staticFolderPath", staticFolderPath)
// app.use(express.static(staticFolderPath)) // ye immage url ussi route pr ayega jisse ise dall agya hai 

