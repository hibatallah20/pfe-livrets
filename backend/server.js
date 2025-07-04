import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";

import connectDB from './config/db.js'
import  authRouter  from './routes/authRoutes.js'
import userRouter from "./routes/userRoutes.js";
import jobRouter from "./routes/jobRoutes.js";


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

app.listen(port, () => console.log(`Server started on PORT:${port}`));