import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import path from "path";
import { fileURLToPath } from 'url';
import createDB  from './config/connection.js';
import authRouter from './routes/authRoutes.js';
dotenv.config();

const app = express();

createDB();
const port = process.env.PORT || 4000;
// const allowedOrigins = ["http://127.0.0.1:3001",process.env.FRONTEND_URI];
const allowedOrigins = process.env.FRONTEND_URI;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));


// API Endpoints
app.get('/',(req,res) => {
    res.send('API Working . . .');
})

app.use('/uploads',express.static(path.join(__dirname, "uploads")));

app.use('/api/v1/auth',authRouter)

app.listen(port,() => {
    console.log(`Server is running at ${port}`)
})
