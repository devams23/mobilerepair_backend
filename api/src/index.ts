import express from 'express';
import { json } from 'express';
import complaintsRouter from './routes/complaints/index';
import driversRouter from './routes/drivers/index';

const app = express();

app.use(json()); // Middleware to parse JSON bodies

app.use((req , res , next)=>{
  res.setHeader('Access-Control-Allow-Origin' , ['*']); 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true'); 

  // handling preflight requests 
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }

  next();
});
//const router = Router();
const PORT = process.env.PORT || 3000;

app.get('/', async (req,res)=>{
    console.log('Received a request');

    res.send('Hello World!');
});

app.use('/complaints', complaintsRouter);
app.use('/drivers', driversRouter);


app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`);
})