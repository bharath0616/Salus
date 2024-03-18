import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import axios from 'axios'
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js'
import cookieParser from 'cookie-parser';
import path from 'path';
import cors from 'cors';
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to MongoDB!");
}).catch((err)=>{
    console.log(err);
})
const __dirname = path.resolve();
const app=express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.listen(3000, () =>{
    console.log('Server is running on port 3000')
}
);

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
app.use('/api/listing', listingRouter);

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

app.get('/BillingPlan/:salesOrder/:salesOrderItem', async (req, res) => {
    const username = 'NTPLDEMO';
    const password = 'Neo@123456';
    const { salesOrder, salesOrderItem } = req.params;
  
    try {
      const response = await axios.get(
        `https://s4happ.neovatic.com:8101/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder('${salesOrder}')/to_BillingPlan`,
        {
          auth: {
            username,
            password,
          },
        }
      );  
  
      res.json(response.data);
    } catch (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  