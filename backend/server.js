import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";

import connectDB from './config/db.js'
import  authRouter  from './routes/authRoutes.js'
import userRouter from "./routes/userRoutes.js";
import jobRouter from "./routes/jobRoutes.js";
import resumeRouter from "./routes/resumeRoutes.js";

import path from 'path'
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const app = express();
const port = process.env.PORT || 4000
connectDB();

const allowedOrigins = ['http://localhost:5173']

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowedOrigins, credentials: true}))

// api endpoints
app.get('/', (req, res) => res.send("API Working"));
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use("/api/jobs", jobRouter)
app.use('/api/resume', resumeRouter)
app.use(
    '/uploads',
    express.static(path.join(__dirname, 'uploads'), {
        setHeaders: (res, _path) => {
            res.set('Access-Control-Allow-Origin', 'http://localhost:5173')
        }
    })
)

app.listen(port, () => console.log(`Server started on PORT:${port}`));