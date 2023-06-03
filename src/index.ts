import express, { Request, Response } from 'express';
import homeRoute from "./routes/home"
import { authMiddleware } from './middleware/authmiddleware';
import morgan from 'morgan'
import imageRoute from './routes/image';
import configuration from './config';


const app = express();
const port = 3000;


app.use('/home', authMiddleware, homeRoute)
app.use('/api/images', authMiddleware, imageRoute)
app.use(morgan('dev'))

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, Express!');
});


app.listen(configuration().port, () => {
    console.log(`Server is running on port ${configuration().port}`);
});
