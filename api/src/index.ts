import express from 'express';
import { json } from 'express';
import complaintsRouter from './routes/complaints/index';
import driversRouter from './routes/drivers/index';
import { createClient } from 'redis';

const client = createClient();

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

const app = express();

app.use(json()); // Middleware to parse JSON bodies

app.use((req , res , next)=>{
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5500'); // or your frontend domain
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true'); // Optional: for cookies/auth headers

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }

  next();
});
//const router = Router();
const PORT = process.env.PORT || 3000;

app.get('/', async (req,res)=>{
    console.log('Received a request');
//     try {
// await client.set('key', 'value');
// var value = await client.get('key');

//     } catch (error) {
//         console.error('Error setting value in Redis', error);
//     }
//     console.log(value);
    res.send('Hello World!');
});

app.use('/complaints', complaintsRouter);
app.use('/drivers', driversRouter);


app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`);
})