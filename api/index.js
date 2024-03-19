import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import report from '../api/models/report.model.js';
import cookieParser from 'cookie-parser';
import path from 'path';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(express.json());
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to MongoDB!");
}).catch((err)=>{
    console.log(err);
})
const __dirname = path.resolve();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.listen(3000, () =>{
    console.log('Server is running on port 3000')
}
);
app.get('/api/report', async (req, res) => {
  try {
    const logs = await report.find();
    res.json(logs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);


app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

app.use((err,req,res,next) => {
    const statusCode=err.statusCode || 500;
    const message=err.message || 'Internal Servor error'
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
});


  